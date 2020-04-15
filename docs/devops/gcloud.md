# gCloud

## Prerequisites

1. Active Google Cloud Platform (GCP) Account.
2. Working [gCloud SDK](https://github.com/xmlking/macbooksetup#cloud-sdk-optional).

## Install

Install components

```bash
gcloud components install appctl
```

## Setup

1. Create k8s cluster

```bash
export CLUSTER_NAME=sumo
gcloud beta container clusters create ${CLUSTER_NAME} \
  --cluster-version 1.15.11-gke.3 \
  --num-nodes=1 \
  --machine-type=n1-standard-4 \
  --addons ApplicationManager \
  --quiet \
  --preemptible
  ```
