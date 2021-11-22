# Default Information about used Frameworks

## NestJs Swagger Documentation
The OpenAPI specification is a language-agnostic definition format used to describe RESTful APIs. 
Nest provides a dedicated module which allows generating such a specification by leveraging decorators.

```
https://docs.nestjs.com/openapi/introduction
```

## Swagger Stats Documentation
swagger-stats traces REST API requests and responses in Node.js Microservices, and collects metrics per API Operation. swagger-stats detects API operations based on express routes. You may also provide Swagger (Open API) specification, and swagger-stats will match API requests with API Operations defined in swagger specification.
```
https://swaggerstats.io/guide/
```

## Swagger Stats Grafana Dashboard
Simple Grafana Dashboard for swagger stats and its prometheus client.
```
https://grafana.com/grafana/dashboards/3091
```

## Kong API Gateway
A lightweight API Gateway that lets you secure, manage, and extend APIs and microservices.

```
https://konghq.com/
https://docs.konghq.com/gateway/
https://hub.docker.com/_/kong
```

# NestJs Installation & Run

```
$ npm install

$ nx serve image-service
// open url http://localhost:3333/api/ for swagger API
// open url http://localhost:3333/swagger-stats/ for swagger stats
// prometheus-format metrics: http://localhost:3333/swagger-stats/metrics

$ nx serve wine-maker
// open url http://localhost:3334/api/ for swagger API
// open url http://localhost:3334/swagger-stats/ for swagger stats
// prometheus-format metrics: http://localhost:3334/swagger-stats/metrics
```

# Docker Instruction

[Docker-Compose File](./docker-compose.yml)

## Run local instances
```
docker build . -t base-image:nx-base
docker-compose up
```

## Build local instances
```
docker build . -t base-image:nx-base
docker-compose build
```

# Description
## How Kong works in here

- Kong is running in database-less mode (no Postgres or Cassandra is needed)
- Kong configuration endpoint: `http://localhost:8001/`
- Kong service configuration endpoint: `http://localhost:8001/services`
- kong default route: `http://localhost:8000`
- Service endpoints through Gateway:
```
$ http://localhost:8000/image-service/api/#
$ http://localhost:8000/wine-maker/api/#
```
- Kong config file: `./kong/.config.yaml`

[![Kong](https://img.youtube.com/vi/sJEID1xEZMg/0.jpg)](https://www.youtube.com/watch?v=sJEID1xEZMg)
