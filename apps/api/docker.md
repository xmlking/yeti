# API

Build and Deploy yeti-api

### Build

```bash
# build, optionally use `--no-cache`
export VERSION=1.0.4-SNAPSHOT
export DOCKER_BUILDKIT=1
docker build \
--build-arg VERSION=$VERSION \
--build-arg BUILD_DATE=$(date -u +'%Y-%m-%dT%H:%M:%SZ') \
-t xmlking/yeti-api -f ./apps/api/Dockerfile .

# tag
docker tag  xmlking/yeti-api  xmlking/yeti-api:$VERSION

# push
docker push xmlking/yeti-api:$VERSION
docker push xmlking/yeti-api:latest

# check
docker inspect  xmlking/yeti-api:$VERSION
docker image prune -f
# run
docker run -it -p 3000:3000  xmlking/yeti-api
# to debug build issues
docker run -it -p 3000:3000  xmlking/yeti-api sh
docker run -it -p 3000:3000  xmlking/yeti-api node --version
```

### Run

```bash
# start yeti-api pod in interative mode.  Use 'Ctrl+C' to terminate pod and delete temp service.
kubectl run -it --rm yeti-api  --port 3000 --hostport=3000 --expose=true --image=xmlking/yeti-api:$VERSION --restart=Never --env TYPEORM_HOST=yeti-db-postgresql
kubectl port-forward yeti-api 3000:3000
#kubectl exec -it yeti-api /bin/busybox sh
kubectl exec -it yeti-api -- /bin/sh

# if you are using `docker-compose` instead of `Kubernetes`
docker compose up api
# docker run -it --env TYPEORM_HOST=postgres -p 3000:3000  xmlking/yeti-api
# to see ditectory content: (as we are using scratch container, we dont have any unix commands to interact with)
docker compose exec api node
docker compose exec api node -e 'console.log(__dirname);'
docker compose exec api node -e 'const fs = require('fs'); fs.readdirSync('.').forEach(file => { console.log(file);})
```

### Test

> The app will be available at http://localhost:3000

```bash
# test
curl -v -X GET \
  http://localhost:3000/ \
| jq .
```

### Deploy

1.  Create `kubeview` Service Account

```bash
kubectl create -f kubeview-service-account.yaml
```
