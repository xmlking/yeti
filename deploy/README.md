# Deployment

deploying with **appctl** and **Kustomize**

### Structure

```
├── config
│   ├── base
│   │   ├── kustomization.yaml
│   │   └── myapp.yaml
│   └── envs
│       ├── prod
│       │   └── kustomization.yaml
│       └── staging
│           ├── kustomization.yaml
│           └── patch-replicas.yaml
└── delivery
    └── envs
        ├── prod.yaml
        └── staging.yaml
```

#### config/base

  Configuration in the directory `config/base` applies to all environments. Additional configuration in `config/envs` can modify this configuration.

#### config/envs

  The repository contains information on two environments, defined in the directory `config/envs`: `prod` and `staging`.

  The `prod` environment refers only to the configuration in `config/base/myapp.yaml`.

  The `staging` environment has an additional customization in `config/envs/staging/patch-replicas.yaml`. This customization is referenced in `config/envs/staging/kustomization.yaml`.

#### delivery/envs

  Subdirectories in `delivery/envs` contain information on the GKE clusters that host each environment. These files are automatically generated and don't need to be modified directly.

### Install

```bash
gcloud components install appctl
```

### Setup

```bash
GIT_USERNAME="xmlking"
APPLICATION_NAME="yeti"
# 1. Initialize existing repositories
cd yeti
appctl init yeti --app-config-repo=github.com/xmlking/yeti
# 2. add new env dev and connect to `sumo` cluster
appctl env add development --cluster=sumo
appctl env add staging --cluster=sumo
appctl env add production --cluster=sumo
# 3. [optional] see commit logs - `appctl env add` committed a new `dev` env
git log -p *
# push auto-generated configurations
git push origin master
# 4. dry run to see what you will create
kubectl apply -k config/base/ --dry-run=client -o yaml
kubectl apply -k config/envs/staging  --dry-run=client -o yaml
# 5. tag changes
git tag v0.1.0
git push origin  v0.1.0
# 6. prepare env PR (response with created PR in seymour-env)
appctl prepare staging
# 7. run apply without merge the PR -> deny
appctl apply staging
# Merge PR in seymour-env and see created dev branch
# Rerun apply
# Open GCP and see GKE/Applications
# To promote a release candidate from one environment to another, run the following command:
appctl prepare prod --from-env staging
# To deploy the release candidate to the target environment, run the following command:
appctl apply prod
# rollback
appctl apply staging --from-tag v0.1.0
```

### Reference

1. [kustomize](https://kubectl.docs.kubernetes.io/pages/examples/kustomize.html)
1. <https://github.com/kubernetes-sigs/kustomize/blob/master/docs/glossary.md>
1. <https://blog.jetstack.io/blog/kustomize-cert-manager/>
1. <https://kustomize.io/>
1. with sops <https://teuto.net/deploying-jupyterhub-to-kubernetes-via-kustomize-using-sops-secret-management/?lang=en>
1. <https://github.com/pwittrock-me/petclinic-config/tree/master/config>
1. [TODO: gRPC-Web Istio Demo](https://github.com/venilnoronha/grpc-web-istio-demo)
1. patch example, keycloak traefik <https://github.com/piotrjanik/opa-warsaw-cloud-native-conf/tree/master/manifests>
1. [Application Delivery](https://cloud.google.com/kubernetes-engine/docs/concepts/add-on/application-delivery)
1. [Application Manager for GKE](https://cloud.google.com/blog/products/containers-kubernetes/announcing-application-manager-for-google-kubernetes-engine)
1. [Application Manager brings GitOps to GKE](https://www.youtube.com/watch?v=r5_xYtbZPfc)
