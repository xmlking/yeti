# Installation

Do-it-yourself step-by-step instructions to create this project structure from scratch.

## Setup

### Prerequisites

> you need following tools. versions listed here are minimal versions tested.

| Software        | Version | Optional |
| --------------- | ------- | -------- |
| Node            | v13.5.0 |          |
| Yarn            | v1.21.1 |          |
| Lerna           | v3.20.2 |          |
| Angular CLI     | v9.0.0  |          |
| @nrwl/workspace | v9.0.0  |          |
| @nestjs/cli     | v6.13.2 |          |
| commitizen      | v4.0.3  |          |

### Install Prerequisites

```bash
# install or Update Node and Yarn with brew
brew update
brew install node
#brew upgrade node
brew install yarn
#brew upgrade yarn
yarn config set workspaces-experimental true
yarn global add lerna
brew cleanup
```
