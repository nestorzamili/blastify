# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [4.3.4](https://github.com/nestorzamili/blastify/compare/v4.3.3...v4.3.4) (2025-03-01)


### Bug Fixes

* add Jenkins pipeline for Docker build and push ([009d973](https://github.com/nestorzamili/blastify/commit/009d973f7977457162ef644a1ccae0e3a48f17e3))
* enhance Jenkins pipeline to allow branch and tag selection for Docker builds ([059f306](https://github.com/nestorzamili/blastify/commit/059f3060c38b766be9c48718a23bcb258dbdca1b))

## [4.3.3](https://github.com/nestorzamili/blastify/compare/v4.3.2...v4.3.3) (2025-03-01)


### Bug Fixes

* **logger:** enhance logging behavior for production and development environments ([3977693](https://github.com/nestorzamili/blastify/commit/3977693bb113f7bbf0adf01c7edab6b88678092e))

## [4.3.2](https://github.com/nestorzamili/blastify/compare/v4.3.1...v4.3.2) (2025-03-01)


### Bug Fixes

* **logger:** improve logging initialization message and enhance IP address handling in morgan middleware ([7832c87](https://github.com/nestorzamili/blastify/commit/7832c87831c12a7a30eb1ff7007a058bcf35b6f8))

## [4.3.1](https://github.com/nestorzamili/blastify/compare/v4.3.0...v4.3.1) (2025-03-01)


### Bug Fixes

* **logger:** enhance logging with environment-specific formats and add HTTP log file ([5ed26c0](https://github.com/nestorzamili/blastify/commit/5ed26c07f6366bd58fa704318f2d1dccddbdb38e))

## [4.3.0](https://github.com/nestorzamili/blastify/compare/v4.2.3...v4.3.0) (2025-03-01)


### Features

* **logger:** change log level to 'http' and add HTTP log file ([a5ddfff](https://github.com/nestorzamili/blastify/commit/a5ddfff0974a5e9035d19e93bf3888122426c34c))

## [4.2.3](https://github.com/nestorzamili/blastify/compare/v4.2.2...v4.2.3) (2025-03-01)


### Bug Fixes

* **middleware:** update production logging format and remove unnecessary skip logic ([c5ca359](https://github.com/nestorzamili/blastify/commit/c5ca359bfdd8d9e88de3c58f69e82026bbd87721))

## [4.2.2](https://github.com/nestorzamili/blastify/compare/v4.2.1...v4.2.2) (2025-03-01)


### Chores

* remove deprecated .env-example file and update quota balance handling ([3610247](https://github.com/nestorzamili/blastify/commit/36102471a4433b825bc8c80c2f020af60eecc370))

## [4.2.1](https://github.com/nestorzamili/blastify/compare/v4.2.0...v4.2.1) (2025-02-28)


### Bug Fixes

* ensure session cleanup occurs on client logout ([597fe0e](https://github.com/nestorzamili/blastify/commit/597fe0e1f4a4132f940afd2a888801c05607a3cb))

## [4.2.0](https://github.com/nestorzamili/blastify/compare/v4.1.6...v4.2.0) (2025-02-27)


### Features

* add getContact endpoint and retrieve user contacts ([db72945](https://github.com/nestorzamili/blastify/commit/db72945a27d4b708e91aa0edc3e1cac180fa9b14))


### Bug Fixes

* extend access token expiration from 15 minutes to 1 hour ([0b68b00](https://github.com/nestorzamili/blastify/commit/0b68b0051b0da961b0bb79879071d2fdb47e5ca3))
* remove success response logging for email verification request ([4ad07ae](https://github.com/nestorzamili/blastify/commit/4ad07aec4f3f611034490a29eb20d9f2057059a6))
* update DateTime fields to use Timestamptz in Prisma schema ([ac8b219](https://github.com/nestorzamili/blastify/commit/ac8b2199014e42b94641dae1ad89d5f5d7a1bdba))

## [4.1.6](https://github.com/nestorzamili/blastify/compare/v4.1.5...v4.1.6) (2025-02-26)


### Bug Fixes

* update Docker workflow to change package name from whatsapp-blast to blastify ([1e15a93](https://github.com/nestorzamili/blastify/commit/1e15a93da1611200ca27fb41e3bf27c0ad8afac3))

## [4.1.5](https://github.com/nestorzamili/whatsapp-blast/compare/v4.1.4...v4.1.5) (2025-02-26)


### Bug Fixes

* update .gitignore and include last QR code in client response ([b623917](https://github.com/nestorzamili/whatsapp-blast/commit/b623917f44ccb79ae67cd7a6f72c2649a781fb78))

## [4.1.4](https://github.com/nestorzamili/whatsapp-blast/compare/v4.1.3...v4.1.4) (2025-02-25)


### Bug Fixes

* update Dockerfile to include Prisma client generation ([70e78ea](https://github.com/nestorzamili/whatsapp-blast/commit/70e78ea0a8273d8a86936e6c340e4608fe641925))

## [4.1.3](https://github.com/nestorzamili/whatsapp-blast/compare/v4.1.2...v4.1.3) (2025-02-25)


### Bug Fixes

* add postinstall script to generate Prisma client ([fa4b691](https://github.com/nestorzamili/whatsapp-blast/commit/fa4b691b221d65ae60b376fd064ed290aca53d74))

## [4.1.2](https://github.com/nestorzamili/whatsapp-blast/compare/v4.1.1...v4.1.2) (2025-02-25)


### Bug Fixes

* update Prisma client version and remove generation step from Dockerfile ([c5aa288](https://github.com/nestorzamili/whatsapp-blast/commit/c5aa2885dc9f8008ff7bffe221868963de3a326f))

## [4.1.1](https://github.com/nestorzamili/whatsapp-blast/compare/v4.1.0...v4.1.1) (2025-02-25)


### Bug Fixes

* add Prisma generation step in Dockerfile ([5dd2b8f](https://github.com/nestorzamili/whatsapp-blast/commit/5dd2b8f9b362c838de064a56e87a8b9fa1835781))

## [4.1.0](https://github.com/nestorzamili/whatsapp-blast/compare/v4.0.1...v4.1.0) (2025-02-25)


### Features

* rename project to Blastify, enhance request validation, and improve response handling ([2fde4ad](https://github.com/nestorzamili/whatsapp-blast/commit/2fde4add9a8091bdf4cae4c48ed505f0e677e920))

## [4.0.1](https://github.com/nestorzamili/whatsapp-blast/compare/v4.0.0...v4.0.1) (2025-02-25)


### Bug Fixes

* update addQuota to require userId and improve amount validation ([52ccb93](https://github.com/nestorzamili/whatsapp-blast/commit/52ccb9313766b4075ba9bf5b7e6f34da78f5bdeb))

## [4.0.0](https://github.com/nestorzamili/whatsapp-blast/compare/v3.1.2...v4.0.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* improve error handling in controllers and response utilities

### Code Refactoring

* enhance cleanup process and error handling in ClientService ([e20b44d](https://github.com/nestorzamili/whatsapp-blast/commit/e20b44d271abd7e49c947b08f8511587af3fc3be))
* enhance quota handling by checking for existing user quotas before adding ([ddcfb6a](https://github.com/nestorzamili/whatsapp-blast/commit/ddcfb6ad8040f53186646ec76500dd18467c288b))
* improve error handling in controllers and response utilities ([c6ea8fe](https://github.com/nestorzamili/whatsapp-blast/commit/c6ea8fef706a653bc7a37141712d5a90810cbb2c))
* improve response handling and error management in quota controller and service ([5801693](https://github.com/nestorzamili/whatsapp-blast/commit/5801693b4cd49de7551ed36533b07beecaff2e84))
* streamline not found error handling in client controller ([c28e30f](https://github.com/nestorzamili/whatsapp-blast/commit/c28e30fe29068c190aa2fec68544edd98f559253))

## [3.1.2](https://github.com/nestorzamili/whatsapp-blast/compare/v3.1.1...v3.1.2) (2025-02-24)


### Code Refactoring

* streamline Dockerfile by consolidating build stages and optimizing npm install commands ([064c363](https://github.com/nestorzamili/whatsapp-blast/commit/064c363da474279dd5dd65804eac34c74f8ebdae))

## [3.1.1](https://github.com/nestorzamili/whatsapp-blast/compare/v3.1.0...v3.1.1) (2025-02-24)


### Code Refactoring

* remove Prisma client generation from Dockerfile and adjust postinstall script ([88814ca](https://github.com/nestorzamili/whatsapp-blast/commit/88814cacb47e4a71daa08e89f97e41281ddd8708))

## [3.1.0](https://github.com/nestorzamili/whatsapp-blast/compare/v3.0.0...v3.1.0) (2025-02-24)


### Features

* update Dockerfile and package.json to generate Prisma client during postinstall ([627bf34](https://github.com/nestorzamili/whatsapp-blast/commit/627bf34ecb824c1efc9f339aec1e17b51c087999))

## [3.0.0](https://github.com/nestorzamili/whatsapp-blast/compare/v2.0.0...v3.0.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* generate Prisma client during Docker build

### Features

* generate Prisma client during Docker build ([8433006](https://github.com/nestorzamili/whatsapp-blast/commit/8433006c329b67f1ec5d5dc1e0c4a8f85fc85f6f))

## [2.0.0](https://github.com/nestorzamili/whatsapp-blast/compare/v1.5.5...v2.0.0) (2025-02-24)


### ⚠ BREAKING CHANGES

* update environment configuration, logger level, and restructure Dockerfile for multi-stage build; restructure client service and controller

### Features

* add API key middleware for route protection ([98b0a57](https://github.com/nestorzamili/whatsapp-blast/commit/98b0a5777abddb4bfd50e13de4c616b205282a03))
* restrict add-quota route to admin users ([41ec258](https://github.com/nestorzamili/whatsapp-blast/commit/41ec2584f854d005dcd8f39bf74da9088fd7933d))
* update environment configuration, logger level, and restructure Dockerfile for multi-stage build; restructure client service and controller ([63a614c](https://github.com/nestorzamili/whatsapp-blast/commit/63a614c6a6d887cb7fd609f1c8585f800395686b))

## [1.5.5](https://github.com/nestorzamili/whatsapp-blast/compare/v1.5.4...v1.5.5) (2025-02-22)


### Chores

* remove puppeteer installation step from Dockerfile ([1311e0b](https://github.com/nestorzamili/whatsapp-blast/commit/1311e0bcf37f0ba4a9ec0e585ef46ca766752c19))

## [1.5.4](https://github.com/nestorzamili/whatsapp-blast/compare/v1.5.3...v1.5.4) (2025-02-22)


### Chores

* remove outdated deployment workflow and update Dockerfile for slim image and Puppeteer dependencies ([d5844bf](https://github.com/nestorzamili/whatsapp-blast/commit/d5844bff2f8dc6c77db005d3f8ad996c60a716ba))

## [1.5.3](https://github.com/nestorzamili/whatsapp-blast/compare/v1.5.2...v1.5.3) (2025-02-22)


### Bug Fixes

* update deployment workflows to use latest Docker tag and remove unnecessary triggers ([319db9e](https://github.com/nestorzamili/whatsapp-blast/commit/319db9e0e84c4fd1928fab51c7ef87af9686669a))

## [1.5.2](https://github.com/nestorzamili/whatsapp-blast/compare/v1.5.1...v1.5.2) (2025-02-22)


### Bug Fixes

* improve SSH key handling and connection debugging in deployment workflows ([b6e1897](https://github.com/nestorzamili/whatsapp-blast/commit/b6e189733697d1329e68341d8074535d3c0acba9))

## [1.5.1](https://github.com/nestorzamili/whatsapp-blast/compare/v1.5.0...v1.5.1) (2025-02-22)


### Bug Fixes

* update SSH keys and user in deployment workflow ([f55f2ba](https://github.com/nestorzamili/whatsapp-blast/commit/f55f2baa385a9024360d7e174f65d171d98f7231))

## [1.5.0](https://github.com/nestorzamili/whatsapp-blast/compare/v1.4.1...v1.5.0) (2025-02-22)


### Features

* add Dockerfile for application deployment ([49c0689](https://github.com/nestorzamili/whatsapp-blast/commit/49c06894eea18c568bee4197d9387035f69d5234))

## [1.4.1](https://github.com/nestorzamili/whatsapp-blast/compare/v1.4.0...v1.4.1) (2025-02-22)


### Chores

* remove Dockerfile ([a7f4ede](https://github.com/nestorzamili/whatsapp-blast/commit/a7f4edef09930de29f26acae3a1d93d8fdda122d))

## [1.4.0](https://github.com/nestorzamili/whatsapp-blast/compare/v1.3.0...v1.4.0) (2025-02-22)


### Features

* update deployment workflows and improve Docker integration ([02bfa11](https://github.com/nestorzamili/whatsapp-blast/commit/02bfa11ec73a78f9f2c79da92736916945e9b3d0))

## [1.3.0](https://github.com/nestorzamili/whatsapp-blast/compare/v1.2.3...v1.3.0) (2025-02-22)


### Features

* add Docker support with Dockerfile and .dockerignore ([8a4dd34](https://github.com/nestorzamili/whatsapp-blast/commit/8a4dd34e294b84b4871dab1f342870ff6db96fa2))

## [1.2.3](https://github.com/nestorzamili/whatsapp-blast/compare/v1.2.2...v1.2.3) (2025-02-22)


### Chores

* update Docker workflow to trigger on release-please completion ([3bc202f](https://github.com/nestorzamili/whatsapp-blast/commit/3bc202f1456e328d8c5dc0ac210de3a1798e35ed))

## [1.2.2](https://github.com/nestorzamili/whatsapp-blast/compare/v1.2.1...v1.2.2) (2025-02-22)


### Chores

* update Docker workflow to use release-please action ([70579f2](https://github.com/nestorzamili/whatsapp-blast/commit/70579f2920e6692a3425adf0435509b8adb032b2))

## [1.2.1](https://github.com/nestorzamili/whatsapp-blast/compare/v1.2.0...v1.2.1) (2025-02-22)


### Bug Fixes

* update Docker workflow to build and push latest image on workflow completion ([741717e](https://github.com/nestorzamili/whatsapp-blast/commit/741717e421c273662a73ee8434cf1599776ce1e5))

## [1.2.0](https://github.com/nestorzamili/whatsapp-blast/compare/v1.1.4...v1.2.0) (2025-02-22)


### Features

* add GitHub workflows for Docker image build and deployment ([ca98524](https://github.com/nestorzamili/whatsapp-blast/commit/ca98524880a278288eaa59e5c0a879bfd09d94ea))


### Code Refactoring

* rename models to lowercase for consistency ([3157a84](https://github.com/nestorzamili/whatsapp-blast/commit/3157a843104690f83967b49d09d8bb206e8bdc67))

## [1.1.4](https://github.com/nestorzamili/whatsapp-blast/compare/v1.1.3...v1.1.4) (2025-02-22)


### Bug Fixes

* **client:** prevent multiple initializations for the same client ([451e429](https://github.com/nestorzamili/whatsapp-blast/commit/451e429341372353eeb1b90309789792fbe2a6d9))

## [1.1.3](https://github.com/nestorzamili/whatsapp-blast/compare/v1.1.2...v1.1.3) (2025-02-22)


### Chores

* add release-please configuration ([283389c](https://github.com/nestorzamili/whatsapp-blast/commit/283389ced725ef6f2be210df99b7e3929cfa0be7))
* remove standard-version config and dependency ([19b7ef7](https://github.com/nestorzamili/whatsapp-blast/commit/19b7ef715662fc7965e7809bf7773448d73c0e07))

## [1.1.2](https://github.com/nestorzamili/whatsapp-bulk/compare/v1.1.0...v1.1.2) (2025-02-22)



## 1.1.0 (2025-02-21)


### Features

* add health check endpoint and define UserPayload and VerificationResult types ([cf442fc](https://github.com/nestorzamili/whatsapp-bulk/commit/cf442fc5cf907d71bc70ed79db721e9ac0489964))
* add media handling for messages; integrate Cloudinary for media uploads and update message model ([c294b4a](https://github.com/nestorzamili/whatsapp-bulk/commit/c294b4a1d11ad703313b6694db7626472fc67d9d))
* enhance client QR code handling and implement QR generation limits ([3567c11](https://github.com/nestorzamili/whatsapp-bulk/commit/3567c11d6ad363451cd59436a7ee2bb8bb8194d1))
* enhance media upload handling with file type validation and size limits ([884d915](https://github.com/nestorzamili/whatsapp-bulk/commit/884d9150f68122cef2e330820011a892c317e841))
* enhance media upload with file type validation, size limits, and improved error handling ([f872ac5](https://github.com/nestorzamili/whatsapp-bulk/commit/f872ac5d4090cd5c5938e3bb4710304e686ab6b0))
* implement batch processing for message sending; add progress tracking, client error handling, and idle handling ([4f45b77](https://github.com/nestorzamili/whatsapp-bulk/commit/4f45b7721e52ea1206072b70a65f0d91e7db2d75))
* implement client and message routes, update client status, and enhance email verification process ([3e39b9e](https://github.com/nestorzamili/whatsapp-bulk/commit/3e39b9e2d42a6db528817764617eee79391de1ee))
* implement client management; add initialization, logout, and status retrieval for WhatsApp clients ([42de335](https://github.com/nestorzamili/whatsapp-bulk/commit/42de3356d03b382c8af10b4eb0927967f4e9f991))
* implement quota management with add and check endpoints, integrate with message processing ([5ad59d1](https://github.com/nestorzamili/whatsapp-bulk/commit/5ad59d101e6679f998b963923af03a4564d554f7))
* rename project to whatsapp-bulk; update directory structure and add new controllers, services, and routes ([283fe84](https://github.com/nestorzamili/whatsapp-bulk/commit/283fe8499edd0d0fa1869c22fe529f10fc91e0d4))


### Bug Fixes

* update logo URL in email verification template ([99a07eb](https://github.com/nestorzamili/whatsapp-bulk/commit/99a07ebba2954b530c139ad72602a5304b338f05))


### Chores

* update @prisma/client ([b534869](https://github.com/nestorzamili/whatsapp-bulk/commit/b5348691ddb98c71fc9c7ea07d1142247a4edd11))


### Code Refactoring

* add type annotation for Message in createMessages return mapping ([bac0ad8](https://github.com/nestorzamili/whatsapp-bulk/commit/bac0ad87b201a016997a0b6fc2689cb50ad96ebc))
* add TypeScript module declarations for cors, morgan, jsonwebtoken, nodemailer, and qrcode-terminal ([1cece06](https://github.com/nestorzamili/whatsapp-bulk/commit/1cece062f27d595f526cc211b4b9b9cfbfb97e78))
* add TypeScript types for cors, jsonwebtoken, morgan, nodemailer, and qrcode-terminal; update Node engine version in package.json ([fbf93ed](https://github.com/nestorzamili/whatsapp-bulk/commit/fbf93edfbf44345171b8285d8d4a4384c38ab655))
* add TypeScript types for node, express, cors, jsonwebtoken, nodemailer, morgan, and qrcode-terminal ([15ae3d1](https://github.com/nestorzamili/whatsapp-bulk/commit/15ae3d12dc091b3e510f617aceb464268ff63f8a))
* remove unused import of Message from prisma client ([dbe93bd](https://github.com/nestorzamili/whatsapp-bulk/commit/dbe93bd7a24d7416bacb37c5de4bcbe4f6b4c8d3))
* remove unused message interfaces and JWT payload types; consolidate type definitions in types.d.ts ([e8bb736](https://github.com/nestorzamili/whatsapp-bulk/commit/e8bb736ae4728a219acd57492f871fbd25f108ca))
* rename project to whatsapp-blast; update type definitions and message handling ([eeb8e1c](https://github.com/nestorzamili/whatsapp-bulk/commit/eeb8e1cacfd99eb4c9ec420b9e10bc0a71f1e185))
* replace WhatsAppService with clientService and remove BatchProcessor ([5cb0067](https://github.com/nestorzamili/whatsapp-bulk/commit/5cb006731007109fa2fe3a60fa8d746da1fdf99c))
* simplify start script in package.json and remove unused TypeScript build info ([beae14f](https://github.com/nestorzamili/whatsapp-bulk/commit/beae14fdd3d6dbb33f0fa9d4886f2cc0ccb11f3e))
* update main entry point and start script to use built JavaScript file ([0d241aa](https://github.com/nestorzamili/whatsapp-bulk/commit/0d241aa06ef918878c4fb42d175fe85faddd069f))
* update main entry point to use TypeScript source file ([f680c38](https://github.com/nestorzamili/whatsapp-bulk/commit/f680c3851fd8896b0f1948765bff20859e482601))
* update mediaUrl handling to allow null values and adjust related types ([56e86e3](https://github.com/nestorzamili/whatsapp-bulk/commit/56e86e375cc0be5e255125740b30e3abc4b31770))
* update TypeScript configuration and add build script; include dist in .gitignore ([0f848b0](https://github.com/nestorzamili/whatsapp-bulk/commit/0f848b0d806114e276773fdba34a78739d025d29))


### Documentation

* update README to include quota management and advanced monitoring features ([02751ca](https://github.com/nestorzamili/whatsapp-bulk/commit/02751ca0a818807979b4f2568f6fe7f74699f76e))
* update README to reflect API features and structure ([10e13c4](https://github.com/nestorzamili/whatsapp-bulk/commit/10e13c432a6744d8b125816ad67ad6784fce11d1))
