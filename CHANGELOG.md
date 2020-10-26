# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [0.1.3](https://github.com/xmlking/yeti/compare/v0.1.4...v0.1.3) (2020-10-26)


### Features

* **analyze:** switch to  Source Map Explorer ([c711ba9](https://github.com/xmlking/yeti/commit/c711ba9d56ac8e3d4b594c0ef8234c86891aae09))
* **environment:** add dynamic config load feature ([a3d7f26](https://github.com/xmlking/yeti/commit/a3d7f265ea4161fef00220d0029a415b3064e6b4))
* **goapi:** now using gogen lib with goapi ([c800d99](https://github.com/xmlking/yeti/commit/c800d9919b72f30b4a2cf8c450eca755c8e7ad4d))
* **golang:** adding golang api support ([113b71e](https://github.com/xmlking/yeti/commit/113b71e2b7d819dab7a6303179221599d1bd1446))
* **nopasswordlogin:** try adding nopasswordlogin OpenID connect provider ([f24ab1a](https://github.com/xmlking/yeti/commit/f24ab1a502a0bddeea6049dcbe48ee27fe9bba57))
* **state:** switching from @ngrx/component to @rx-angular/template ([25afd7b](https://github.com/xmlking/yeti/commit/25afd7b990e6f82ab16c35385b5354b6bd38e4f8))


### Bug Fixes

* **api:** fix tls issue for REST API ([bf88863](https://github.com/xmlking/yeti/commit/bf88863c65364906c33bb186f4a5d77a54fda085))
* **deps:** pin dependency @rx-angular/template to 1.0.0-beta.0 ([d0ba022](https://github.com/xmlking/yeti/commit/d0ba022358eb5cd7fb7aa77aeef3496f52dcbfae))
* **deps:** try to fix Dependabot alerts ([85c5dc9](https://github.com/xmlking/yeti/commit/85c5dc986f68abae167278557d5b9a2ea6439218))
* **deps:** update dependency @angular/flex-layout to v9.0.0-beta.30 ([28a7f2c](https://github.com/xmlking/yeti/commit/28a7f2c3d25292df861d028ac2a5f3232f7d95f3))
* **deps:** update dependency @nguniversal/express-engine to v9.1.1 ([d6eb19b](https://github.com/xmlking/yeti/commit/d6eb19bd2434d71a95a208e713a49b4618e1dfe3))

### 0.1.2 (2020-02-10)


### Features

* **accounts:** adding new accounts lib module ([9193727](https://github.com/xmlking/yeti/commit/91937273bc089eef28147b73b987d99953f59ee9))
* **api:** adding first echo gRPC service ([6430119](https://github.com/xmlking/yeti/commit/643011915d938b6729e44297df58295759470025))
* **auth:** auth with google and github WiP ([9779223](https://github.com/xmlking/yeti/commit/97792239a79656a30691aa1dae3959e481856187))
* **config:** adding AppConfig service ([dd21bf8](https://github.com/xmlking/yeti/commit/dd21bf88c72bff68e9b4d609b6b11faef8dcae42))
* **deploy:** adding firebase for hosting ([79dac4d](https://github.com/xmlking/yeti/commit/79dac4d970372cbb3e3f20edfcab43fbae82fdbb))
* **envoy:** adding envoy grpc-web proxy ([59c22ff](https://github.com/xmlking/yeti/commit/59c22ff9f87b80743431e1da3931a9b52289fc70))
* **footer:** updated footer ([bef50bf](https://github.com/xmlking/yeti/commit/bef50bf2a15fffa490deb3fc507c99cac46f8c6e))
* **makefile:** added tasks: proto gen and proto format ([7253ca7](https://github.com/xmlking/yeti/commit/7253ca722b4a1900a34bbb358786128fd966ffe3))
* **proto:** adding working envoy proxy config ([8086fdf](https://github.com/xmlking/yeti/commit/8086fdf3217d854ea21954469475405a15e0bc57))
* **prototool:** adding prototool for generateing Go/Java/JS code ([246f8f5](https://github.com/xmlking/yeti/commit/246f8f5db3c56b82caae5187541ea85756bfa609))
* **style:** adding prismjs ([ec2f791](https://github.com/xmlking/yeti/commit/ec2f79181a22400e007d8fb536e44c6203e8cf93))


### Bug Fixes

* **auth:** change lazy import for admin to make it work with scully ([6f87d5b](https://github.com/xmlking/yeti/commit/6f87d5b8ba676319468db0bb05980cb873b66f0b))
* **blog:** lock guess-parser version to 0.4.14 for scullyio ([1bc788f](https://github.com/xmlking/yeti/commit/1bc788fc376ca9613ae7a1b6aa9b447f74cde089))
* **blog:** upgrade scullyio ([0440f48](https://github.com/xmlking/yeti/commit/0440f48f92b3304d611a84b16fb39e73a5d7f034))
* **blog:** workaround for https://github.com/scullyio/scully/issues/112 ([7daffcd](https://github.com/xmlking/yeti/commit/7daffcd02de62a69686f053c79d30660633233d3))
* **deps:** lock guess-parser@0.4.14 ([100ef6a](https://github.com/xmlking/yeti/commit/100ef6a305676cc129ac93d3a8e4dda9aea423a0))
* **deps:** pin dependencies ([af035ca](https://github.com/xmlking/yeti/commit/af035ca0be94a9a36f60bd4f3122b94c2472f7b3))
* **deps:** pin dependencies ([c2514ef](https://github.com/xmlking/yeti/commit/c2514ef198c1b22cc8575496d0823c1649e9ade4))
* **deps:** pin dependency @angular/flex-layout to 9.0.0-beta.28 ([0664fcf](https://github.com/xmlking/yeti/commit/0664fcfb36d3c9b1d7a0fa592f65e1ae8fd05264))
* **deps:** pin dependency @ngxs-labs/select-snapshot to 1.1.0 ([47aac61](https://github.com/xmlking/yeti/commit/47aac61f609b5c90590f46858b91c6fca7a9fc58))
* **deps:** update dependency @angular/animations to v9.0.0-rc.11 ([32ef4b5](https://github.com/xmlking/yeti/commit/32ef4b525286bf9c72b9adf5bf4aaa7b0acc963b))
* **deps:** update dependency @angular/cdk to v9.0.0-rc.8 ([893c1a8](https://github.com/xmlking/yeti/commit/893c1a8e701a982bf942c72b19a73ac540804024))
* **deps:** update dependency @nebular/security to v5.0.0-beta.5 ([bda5173](https://github.com/xmlking/yeti/commit/bda5173a49034e07b6db97c0a4d6a8d0a97132c4))
* **deps:** update dependency @nebular/theme to v5.0.0-beta.5 ([ed2e32c](https://github.com/xmlking/yeti/commit/ed2e32c41d0a936f3a59bdca57dead81b562319c))
* **deps:** update dependency @nestjs/swagger to v4.1.10 ([3f2bbe3](https://github.com/xmlking/yeti/commit/3f2bbe39e06af3b0297fbf4790019e1ab508d26f))
* **deps:** update dependency @nestjs/swagger to v4.1.7 ([ada5a87](https://github.com/xmlking/yeti/commit/ada5a873c4e8b540adeadbcd88509bf558cb77ec))
* **deps:** update dependency firebase to v7.6.2 ([f9623fd](https://github.com/xmlking/yeti/commit/f9623fd6d316edd6588be4ba39ad88415e8e0360))
* **deps:** update dependency firebase to v7.7.0 ([f1ee630](https://github.com/xmlking/yeti/commit/f1ee6305c4f086bdb7d51b80e9f10952822f6f22))
* **login:** home page header refresh properly after login/logout events ([9c2254c](https://github.com/xmlking/yeti/commit/9c2254cf1a542feb9b5ef58a4d982482627c1b05))
* **makefile:** adding proto PHONY ([36ea74e](https://github.com/xmlking/yeti/commit/36ea74ebfdea47622fce6e4c6294b9eeb10ebbc6))
* **proto:** adding account proto ([5b2e6a2](https://github.com/xmlking/yeti/commit/5b2e6a2ddd02be76307f48a3d27e6ccce60646ae))
* **proto:** adding CI for proto linting ([6342153](https://github.com/xmlking/yeti/commit/63421534295e17dbf9099ec595fe92a14beaec63))
* **proto:** adding scope dependencies for modules to enforce linting ([80c9e94](https://github.com/xmlking/yeti/commit/80c9e9495fc1db278dd1fa4bdc29420056cd35c3))

### 0.1.1 (2020-02-06)


### Features

* **accounts:** adding new accounts lib module ([9193727](https://github.com/xmlking/yeti/commit/91937273bc089eef28147b73b987d99953f59ee9))
* **api:** adding first echo gRPC service ([6430119](https://github.com/xmlking/yeti/commit/643011915d938b6729e44297df58295759470025))
* **auth:** auth with google and github WiP ([9779223](https://github.com/xmlking/yeti/commit/97792239a79656a30691aa1dae3959e481856187))
* **config:** adding AppConfig service ([dd21bf8](https://github.com/xmlking/yeti/commit/dd21bf88c72bff68e9b4d609b6b11faef8dcae42))
* **deploy:** adding firebase for hosting ([79dac4d](https://github.com/xmlking/yeti/commit/79dac4d970372cbb3e3f20edfcab43fbae82fdbb))
* **envoy:** adding envoy grpc-web proxy ([59c22ff](https://github.com/xmlking/yeti/commit/59c22ff9f87b80743431e1da3931a9b52289fc70))
* **footer:** updated footer ([bef50bf](https://github.com/xmlking/yeti/commit/bef50bf2a15fffa490deb3fc507c99cac46f8c6e))
* **proto:** adding working envoy proxy config ([8086fdf](https://github.com/xmlking/yeti/commit/8086fdf3217d854ea21954469475405a15e0bc57))
* **style:** adding prismjs ([ec2f791](https://github.com/xmlking/yeti/commit/ec2f79181a22400e007d8fb536e44c6203e8cf93))


### Bug Fixes

* **auth:** change lazy import for admin to make it work with scully ([6f87d5b](https://github.com/xmlking/yeti/commit/6f87d5b8ba676319468db0bb05980cb873b66f0b))
* **blog:** lock guess-parser version to 0.4.14 for scullyio ([1bc788f](https://github.com/xmlking/yeti/commit/1bc788fc376ca9613ae7a1b6aa9b447f74cde089))
* **blog:** upgrade scullyio ([0440f48](https://github.com/xmlking/yeti/commit/0440f48f92b3304d611a84b16fb39e73a5d7f034))
* **blog:** workaround for https://github.com/scullyio/scully/issues/112 ([7daffcd](https://github.com/xmlking/yeti/commit/7daffcd02de62a69686f053c79d30660633233d3))
* **deps:** lock guess-parser@0.4.14 ([100ef6a](https://github.com/xmlking/yeti/commit/100ef6a305676cc129ac93d3a8e4dda9aea423a0))
* **deps:** pin dependencies ([af035ca](https://github.com/xmlking/yeti/commit/af035ca0be94a9a36f60bd4f3122b94c2472f7b3))
* **deps:** pin dependencies ([c2514ef](https://github.com/xmlking/yeti/commit/c2514ef198c1b22cc8575496d0823c1649e9ade4))
* **deps:** pin dependency @angular/flex-layout to 9.0.0-beta.28 ([0664fcf](https://github.com/xmlking/yeti/commit/0664fcfb36d3c9b1d7a0fa592f65e1ae8fd05264))
* **deps:** pin dependency @ngxs-labs/select-snapshot to 1.1.0 ([47aac61](https://github.com/xmlking/yeti/commit/47aac61f609b5c90590f46858b91c6fca7a9fc58))
* **deps:** update dependency @angular/animations to v9.0.0-rc.11 ([32ef4b5](https://github.com/xmlking/yeti/commit/32ef4b525286bf9c72b9adf5bf4aaa7b0acc963b))
* **deps:** update dependency @angular/cdk to v9.0.0-rc.8 ([893c1a8](https://github.com/xmlking/yeti/commit/893c1a8e701a982bf942c72b19a73ac540804024))
* **deps:** update dependency @nebular/security to v5.0.0-beta.5 ([bda5173](https://github.com/xmlking/yeti/commit/bda5173a49034e07b6db97c0a4d6a8d0a97132c4))
* **deps:** update dependency @nebular/theme to v5.0.0-beta.5 ([ed2e32c](https://github.com/xmlking/yeti/commit/ed2e32c41d0a936f3a59bdca57dead81b562319c))
* **deps:** update dependency @nestjs/swagger to v4.1.10 ([3f2bbe3](https://github.com/xmlking/yeti/commit/3f2bbe39e06af3b0297fbf4790019e1ab508d26f))
* **deps:** update dependency @nestjs/swagger to v4.1.7 ([ada5a87](https://github.com/xmlking/yeti/commit/ada5a873c4e8b540adeadbcd88509bf558cb77ec))
* **deps:** update dependency firebase to v7.6.2 ([f9623fd](https://github.com/xmlking/yeti/commit/f9623fd6d316edd6588be4ba39ad88415e8e0360))
* **deps:** update dependency firebase to v7.7.0 ([f1ee630](https://github.com/xmlking/yeti/commit/f1ee6305c4f086bdb7d51b80e9f10952822f6f22))
* **login:** home page header refresh properly after login/logout events ([9c2254c](https://github.com/xmlking/yeti/commit/9c2254cf1a542feb9b5ef58a4d982482627c1b05))
* **proto:** adding account proto ([5b2e6a2](https://github.com/xmlking/yeti/commit/5b2e6a2ddd02be76307f48a3d27e6ccce60646ae))
* **proto:** adding CI for proto linting ([6342153](https://github.com/xmlking/yeti/commit/63421534295e17dbf9099ec595fe92a14beaec63))
* **proto:** adding scope dependencies for modules to enforce linting ([80c9e94](https://github.com/xmlking/yeti/commit/80c9e9495fc1db278dd1fa4bdc29420056cd35c3))

## 0.1.0 (2020-02-06)


### Features

* **accounts:** adding new accounts lib module ([9193727](https://github.com/xmlking/yeti/commit/91937273bc089eef28147b73b987d99953f59ee9))
* **api:** adding first echo gRPC service ([6430119](https://github.com/xmlking/yeti/commit/643011915d938b6729e44297df58295759470025))
* **auth:** auth with google and github WiP ([9779223](https://github.com/xmlking/yeti/commit/97792239a79656a30691aa1dae3959e481856187))
* **config:** adding AppConfig service ([dd21bf8](https://github.com/xmlking/yeti/commit/dd21bf88c72bff68e9b4d609b6b11faef8dcae42))
* **deploy:** adding firebase for hosting ([79dac4d](https://github.com/xmlking/yeti/commit/79dac4d970372cbb3e3f20edfcab43fbae82fdbb))
* **envoy:** adding envoy grpc-web proxy ([59c22ff](https://github.com/xmlking/yeti/commit/59c22ff9f87b80743431e1da3931a9b52289fc70))
* **footer:** updated footer ([bef50bf](https://github.com/xmlking/yeti/commit/bef50bf2a15fffa490deb3fc507c99cac46f8c6e))
* **proto:** adding working envoy proxy config ([8086fdf](https://github.com/xmlking/yeti/commit/8086fdf3217d854ea21954469475405a15e0bc57))
* **style:** adding prismjs ([ec2f791](https://github.com/xmlking/yeti/commit/ec2f79181a22400e007d8fb536e44c6203e8cf93))


### Bug Fixes

* **auth:** change lazy import for admin to make it work with scully ([6f87d5b](https://github.com/xmlking/yeti/commit/6f87d5b8ba676319468db0bb05980cb873b66f0b))
* **blog:** lock guess-parser version to 0.4.14 for scullyio ([1bc788f](https://github.com/xmlking/yeti/commit/1bc788fc376ca9613ae7a1b6aa9b447f74cde089))
* **blog:** upgrade scullyio ([0440f48](https://github.com/xmlking/yeti/commit/0440f48f92b3304d611a84b16fb39e73a5d7f034))
* **blog:** workaround for https://github.com/scullyio/scully/issues/112 ([7daffcd](https://github.com/xmlking/yeti/commit/7daffcd02de62a69686f053c79d30660633233d3))
* **deps:** lock guess-parser@0.4.14 ([100ef6a](https://github.com/xmlking/yeti/commit/100ef6a305676cc129ac93d3a8e4dda9aea423a0))
* **deps:** pin dependencies ([af035ca](https://github.com/xmlking/yeti/commit/af035ca0be94a9a36f60bd4f3122b94c2472f7b3))
* **deps:** pin dependencies ([c2514ef](https://github.com/xmlking/yeti/commit/c2514ef198c1b22cc8575496d0823c1649e9ade4))
* **deps:** pin dependency @angular/flex-layout to 9.0.0-beta.28 ([0664fcf](https://github.com/xmlking/yeti/commit/0664fcfb36d3c9b1d7a0fa592f65e1ae8fd05264))
* **deps:** pin dependency @ngxs-labs/select-snapshot to 1.1.0 ([47aac61](https://github.com/xmlking/yeti/commit/47aac61f609b5c90590f46858b91c6fca7a9fc58))
* **deps:** update dependency @angular/animations to v9.0.0-rc.11 ([32ef4b5](https://github.com/xmlking/yeti/commit/32ef4b525286bf9c72b9adf5bf4aaa7b0acc963b))
* **deps:** update dependency @angular/cdk to v9.0.0-rc.8 ([893c1a8](https://github.com/xmlking/yeti/commit/893c1a8e701a982bf942c72b19a73ac540804024))
* **deps:** update dependency @nebular/security to v5.0.0-beta.5 ([bda5173](https://github.com/xmlking/yeti/commit/bda5173a49034e07b6db97c0a4d6a8d0a97132c4))
* **deps:** update dependency @nebular/theme to v5.0.0-beta.5 ([ed2e32c](https://github.com/xmlking/yeti/commit/ed2e32c41d0a936f3a59bdca57dead81b562319c))
* **deps:** update dependency @nestjs/swagger to v4.1.10 ([3f2bbe3](https://github.com/xmlking/yeti/commit/3f2bbe39e06af3b0297fbf4790019e1ab508d26f))
* **deps:** update dependency @nestjs/swagger to v4.1.7 ([ada5a87](https://github.com/xmlking/yeti/commit/ada5a873c4e8b540adeadbcd88509bf558cb77ec))
* **deps:** update dependency firebase to v7.6.2 ([f9623fd](https://github.com/xmlking/yeti/commit/f9623fd6d316edd6588be4ba39ad88415e8e0360))
* **deps:** update dependency firebase to v7.7.0 ([f1ee630](https://github.com/xmlking/yeti/commit/f1ee6305c4f086bdb7d51b80e9f10952822f6f22))
* **login:** home page header refresh properly after login/logout events ([9c2254c](https://github.com/xmlking/yeti/commit/9c2254cf1a542feb9b5ef58a4d982482627c1b05))
* **proto:** adding account proto ([5b2e6a2](https://github.com/xmlking/yeti/commit/5b2e6a2ddd02be76307f48a3d27e6ccce60646ae))
* **proto:** adding CI for proto linting ([6342153](https://github.com/xmlking/yeti/commit/63421534295e17dbf9099ec595fe92a14beaec63))
* **proto:** adding scope dependencies for modules to enforce linting ([80c9e94](https://github.com/xmlking/yeti/commit/80c9e9495fc1db278dd1fa4bdc29420056cd35c3))
