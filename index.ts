import 'dotenv/config'
import FilePath from "node:path"
import FileSystem from 'node:fs/promises'
import { Server } from "./core/server"
import SchemasList from "./schemas-list"
import EndpointsList from './endpoints-list'

const port = process.env.SERVER_PORT as unknown as number
const host = process.env.SERVER_HOST as unknown as string
const server = new Server({ port, host })

start().then(specification)

async function start () {
  await server.prepare()
  await server.schema(SchemasList)
  await server.route(EndpointsList)
  await server.start()

  console.log('Server launched')
  console.log('Documentation URL:', `http://${host}:${port}`)
}

async function specification () {
  console.log('\nCreating specification file...')
  const root = process.cwd()
  const path = FilePath.join(root, 'SPEC.OA3.json')
  const data = JSON.stringify(server.specification, null, 2)

  FileSystem.writeFile(path, data)
    .then(() => console.log('Specification file created at:\n', path))
    .catch((error) => console.error('Cannot create specification file\n', error))
}
