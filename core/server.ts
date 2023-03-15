import Fastify, { FastifyInstance, RouteOptions, FastifyRegisterOptions } from 'fastify'
import FastifySwagger from '@fastify/swagger'
import FastifyswaggerUI, { fastifySwaggerUi } from '@fastify/swagger-ui'

import FastifySwaggerConfig from "./fastify-swagger.config.json"
import FastifyswaggerUIConfig from "./fastify-swagger-ui.config.json"

export interface ServerOptions {
  port: number
  host: string
}

export interface ServerEndpointOptions {
  method: RouteOptions["method"]
  path: RouteOptions["url"]
  schema: RouteOptions["schema"]
}

export class Server {
  #server: FastifyInstance
  #options: ServerOptions
  #controller: RouteOptions["handler"] = (_, response) => {
    response.code(204)
    return null
  }

  public get specification () {
    return this.#server.swagger()
  }

  constructor (options: ServerOptions) {
    this.#server = Fastify()
    this.#options = options
  }

  async prepare (): Promise<void> {
    await this.#server.register(FastifySwagger, FastifySwaggerConfig as unknown as undefined)
    await this.#server.register(FastifyswaggerUI, FastifyswaggerUIConfig as unknown as undefined)
  }

  async route (endpoints: ServerEndpointOptions[]): Promise<void> {
    endpoints.forEach((endpoint: ServerEndpointOptions) => {
      this.#server.route({
        handler: this.#controller,
        method: endpoint.method,
        url: endpoint.path,
        schema: endpoint.schema
      })
    })
  }

  async start (): Promise<void> {
    await this.#server.listen(this.#options)
    await this.#server.ready()
  }

  async schema (schema: { [P: string]: object }) {
    for (const name in schema) {
      if (schema.hasOwnProperty(name)) {
        this.#server.addSchema({
          $id: name,
          ...schema[name]
        })
      }
    }
  }
}
