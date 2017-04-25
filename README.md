# Service-Provider-Core

[![Build Status](https://travis-ci.org/meanstack-io/service-provider-core.svg)](https://travis-ci.org/meanstack-io/service-provider-core)
[![Coverage Status](https://coveralls.io/repos/github/meanstack-io/service-provider-core/badge.svg)](https://coveralls.io/github/meanstack-io/service-provider-core)
[![npm](https://img.shields.io/npm/v/service-provider-core.svg)](https://www.npmjs.com/package/service-provider-core)
[![npm](https://img.shields.io/npm/dm/service-provider-core.svg)](https://www.npmjs.com/package/service-provider-core)
[![npm](https://img.shields.io/npm/l/service-provider-core.svg)](https://www.npmjs.com/package/service-provider-core)

Service Provider Core are the central place of your application.

```sh
$ npm install service-provider-core --save
```

## Method Register
Responsible for registering your new service to the core.

## Method Boot
This method is called after all other service providers have been registered, which means that you have access to all other services that have been registered.

## Base Service Provider
```js
/**
 * Module dependencies.
 */
const ServiceProvider = require('service-provider-core/support/ServiceProvider');

/**
 * YourServiceProvider
 *
 * @type {Function}
 */
let YourServiceProvider = ServiceProvider.extend(function(Core) {
    this.Core = Core;
});

/**
 * YourServiceProvider register
 *
 * @param done
 */
YourServiceProvider.prototype.register = function (done) {

    //
    done();
};

/**
 * YourServiceProvider boot
 *
 * @param done
 */
YourServiceProvider.prototype.boot = function (done) {

    //
    done();
};

module.exports = YourServiceProvider;
```

## Copyright & License
Copyright © 2017 MEANStack.io - Licensed under [MIT](https://github.com/meanstack-io/service-provider-core/blob/master/License).
