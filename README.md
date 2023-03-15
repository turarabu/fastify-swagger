# Fastify Swagger
[![NodeJS version](https://img.shields.io/badge/node-%3E%3D%2016.9.1-brightgreen)](https://nodejs.org)
[![NPM version](https://img.shields.io/npm/v/@fastify/swagger.svg?style=flat)](https://github.com/turarabu/fastify-swagger)
[![License](https://img.shields.io/badge/license-MIT-green)](https://github.com/turarabu/fastify-swagger/blob/latest/LICENSE)

Self-documenting REST API

Uses [fastify](https://github.com/fastify/fastify) to create server and schema  
Uses [@fastify/swagger](https://github.com/fastify/fastify-swagger) to spec from schemas  
Uses [@fastify/swagger-ui](https://github.com/fastify/fastify-swagger-ui) to create an interface on the server  

## Installation
Run to install
```
git clone https://github.com/turarabu/fastify-swagger.git
cd fastify-swagger
npm install
```

For a quick start run:
```
npm run serve
```

To compile ts-files run:
```
npm run build
```

To build run:
```
npm run server
```

To compile and run the build run:
```
npm start
```

## Usage
Instructions for extension and usage

### Schemas
The scheme of endpoints is described according to the [JSON Schema 7](https://json-schema.org)  
All schemas are stored in the [schemas](./schemas) directory  
To load the schema, you need to add the path in the [schemas-list.ts](./schemas-list.ts) file  

### Endpoints
Endpoints are described by the route full-description of `fastify`  
All endpoints are stored in the [endpoints](./endpoints) directory  
To load the endpoint, you need to add the path in the [enpoints-list.ts](./enpoints-list.ts) file

### Output
Each time the script is run, it creates `SPEC.OA3.json` file in the root directory  
The file contains descriptions of schemas and endpoints,  
according to the `Open Api Specification 3`

### Configuration
Configuration file for `@fastify/swagger` is located in [core/fastify-swagger.config.json](./core/fastify-swagger.config.json)  
Configuration file for `@fastify/swagger-ui` is located in [core/fastify-swagger-ui.config.json](./core/fastify-swagger-ui.config.json)

## License
Licensed under [MIT](./LICENSE).