## NestJs Swagger Documentation

```
https://docs.nestjs.com/openapi/introduction
```

## Swagger Stats Documentation

```
https://swaggerstats.io/guide/
```

## Swagger Stats Grafana Dashboard

```
https://grafana.com/grafana/dashboards/3091
```



## Installation

```
$ npm install

$ nx serve image-service
// open url http://localhost:3333/api/ for swagger API
// open url http://localhost:3333/swagger-stats/ for swagger stats
// prometheus metrics: http://localhost:3333/swagger-stats/metrics for swagger stats

$ nx serve wine-maker
// open url http://localhost:3334/api/ for swagger API
// open url http://localhost:3334/swagger-stats/ for swagger stats
// prometheus metrics: http://localhost:3334/swagger-stats/metrics for swagger stats
```

## Docker Instruction

### Run local instances
```
docker build . -t base-image:nx-base
docker-compose up
```

### Build local instances
```
docker build . -t base-image:nx-base
docker-compose build
```
