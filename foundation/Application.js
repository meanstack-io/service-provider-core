/**
 * Application
 *
 * @author: Rafael Pegorari <rafapegorari@gmail.com>
 * @copyright Copyright (c) 2015-2017, MEANStack.io.
 * @license See LICENSE
 * MIT Licensed
 */

'use strict';

/**
 * Module dependencies.
 */
const path = require('path'),
    util = require('util'),
    debug = require('debug')('meanstack-core:application'),
    ServiceProvider = require('../support/ServiceProvider'),
    Config = require('../config'),
    Promise = require('bluebird');

/**
 * Core
 *
 */
class Core {
    /**
     * Bind config path.
     *
     * @param configPath
     */
    constructor(configPath) {
        this.config = new Config(configPath);
    }

    /**
     * Bootstrap application.
     *
     * @param callback
     * @return {void}
     */
    bootstrap(callback) {
        debug('Bootstrap application...');

        this.resolveProvider()
            .then(() => {
                debug('All providers have been initialized.');

                if (typeof callback === 'function') {
                    callback(this);
                }
            });
    };

    /**
     * Resolve provider
     *
     * @return {Promise}
     */
    resolveProvider() {
        return this.loadProvider()
            .then(this.registerProviders)
            .then(this.bootProviders)
            .catch(function (e) {
                throw new Error(e);
            });
    };

    /**
     * Resolve provider
     *
     * @return {Promise}
     */
    loadProvider() {
        let providers = this.config.get('app').providers;

        return Promise.map(providers, (provider) => {
            let Provider = new (require(provider))(this);

            if (!(Provider instanceof ServiceProvider)) {
                throw new Error(util.format('Provider: %s is not an instance of ServiceProvider class', provider));
            }

            // Saves the file path for debugging.
            Provider.path = provider;

            return Provider;
        });
    };

    /**
     * Register providers
     *
     * @param providers
     * @return {Promise}
     */
    registerProviders(providers) {
        return Promise.each(providers, (provider) => {

            return new Promise((resolve) => {
                provider.register(() => {
                    debug('registered %s', provider.path);

                    return resolve(true);
                });
            });
        });
    };

    /**
     * Boot providers
     *
     * @param providers
     * @return {Promise}
     */
    bootProviders(providers) {
        return Promise.each(providers, (provider) => {

            return new Promise((resolve) => {
                provider.boot(() => {
                    debug('booted %s', provider.path);

                    return resolve(true);
                });
            });
        });
    };
}

module.exports = Core;
