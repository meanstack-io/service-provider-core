/**
 * Config
 *   Load Configuration files.
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
const fs = require('fs'),
    path = require('path'),
    mergeObject = require('../support/MergeObject');

/**
 * Config
 *
 * @param configPath
 * @constructor
 */
class Config {
    constructor (configPath) {
        // Merge config file and env file.
        this._config = this.mergeConfigs(configPath);
    }

    /**
     * Load config file.
     *
     * @param configPath
     * @return {{}}
     */
    loadConfigFile (configPath) {
        // Returns an array of filenames.
        let filenames = fs.readdirSync(configPath),
            config = {};

        filenames.forEach((filename) => {
            let module = filename.replace(path.extname(filename), '');

            config[module] = require(path.resolve(configPath, filename));
        });

        return config;
    };

    /**
     * Load environment file.
     *
     * @param config
     * @returns {{}}
     */
    loadEnvFile (config) {
        return (fs.existsSync(config.app.env)) ? require(config.app.env) : {};
    };

    /**
     * Merge configs
     *
     * @param configPath
     */
    mergeConfigs (configPath) {
        let config = this.loadConfigFile(configPath),
            env = this.loadEnvFile(config);

        return mergeObject(config, env);
    };

    /**
     * Get configuration.
     *   Example: App.config.get('app').providers
     *
     * @param module
     * @returns {*}
     */
    get (module) {
        return this._config[module];
    };
}

module.exports = Config;
