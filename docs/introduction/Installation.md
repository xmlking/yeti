# Installation

Do-it-yourself step-by-step instructions to create this project structure from scratch.

## Setup

### Prerequisites

you need following tools. versions listed here are minimal versions tested.

> Recommended to install latest versions available

| Software    | Version | Optional |
|-------------|---------|----------|
| Node        | 17.0.1  |          |
| NPM         | 8.1.0   |          |
| Angular CLI | 13.0.3  |          |
| nx          | 13.2.2  |          |
| @nestjs/cli | 8.1.5   |          |
| commitizen  | 4.2.4   |          |

### Install Prerequisites

```bash
# install or Update Node and Yarn with brew
brew update
brew install node
#brew upgrade node
brew cleanup
```

## Configuration

### VSCode

Codelyzer should work out of the box with Atom but for __VSCode__ you will have to
open `Code > Preferences > User Settings`, and enter the following config:

```json
{
  "tslint.rulesDirectory": "./node_modules/codelyzer",
  "typescript.tsdk": "node_modules/typescript/lib"
}
```

### Chrome

Install [redux-devtools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en)
for Chrome (optional)

### Install Kubernetes (optional)

follow instructions [here](https://gist.github.com/xmlking/62ab53753c0f0f5247d0e174b31dab21) to install kubernetes
toolchain:

1. Docker for Mac (edge version)
2. Helm (optional)
3. kubectx (optional)

### Install Bazel (optional)

For Mac, install via
Brew. [Instructions](https://docs.bazel.build/versions/master/install-os-x.html#install-on-mac-os-x-homebrew)

```bash
brew install bazel
bazel version
# you can upgrade to a newer version of Bazel with:
brew upgrade bazel

# if needed
sudo xcode-select -s /Applications/Xcode.app/Contents/Developer
sudo xcodebuild -license
bazel clean --expunge
```
