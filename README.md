# Service-Provider-Core

[![Build Status](https://travis-ci.org/meanstack-io/service-provider-core.svg)](https://travis-ci.org/meanstack-io/service-provider-core)
[![Coverage Status](https://coveralls.io/repos/github/meanstack-io/service-provider-core/badge.svg)](https://coveralls.io/github/meanstack-io/service-provider-core)
[![npm](https://img.shields.io/npm/v/service-provider-core.svg)](https://www.npmjs.com/package/service-provider-core)
[![npm](https://img.shields.io/npm/dm/service-provider-core.svg)](https://www.npmjs.com/package/service-provider-core)
[![npm](https://img.shields.io/npm/l/service-provider-core.svg)](https://www.npmjs.com/package/service-provider-core)

More informations in [Service-Provider-Starter](https://github.com/meanstack-io/service-provider-starter).

# Getting Started
* Clone project [Service-Provider-Starter](https://github.com/meanstack-io/service-provider-starter).
```sh
$ git clone https://github.com/meanstack-io/service-provider-starter.git yourProjectName
```

* Create your environment file.
```sh
$ cd yourProjectName && cp .env-example.js .env.js
```

* Run
```sh
$ npm start
```

# Service Provider
Service Provider are the central place of your application.

## Method Register
Responsible for registering your new service to the core.

## Method Boot
This method is called after all other service providers have been registered, which means that you have access to all other services that have been registered.

## Copyright & License
Copyright © 2017 MEANStack.io - Licensed under [MIT](https://github.com/meanstack-io/service-provider-core/blob/master/License).
