Run Mode
========

Simple utility functions for reading the Node.js `NODE_ENV`.

Installation
============

Install this module in the usual way:

    npm install run-mode

Usage
=====

Include the module:

    var RunMode = require('run-mode');

Here are some example uses:

    ...

    if (!RunMode.isValid()) {
       console.log("FATAL ERROR: Unknown NODE_ENV '" + process.env.NODE_ENV + "'. Must be one of: " + RunMode.getValidModes());
       process.exit(0);
    }

    ...

    var log4js = require('log4js');
    log4js.configure('log4js-config-' + RunMode.get() + '.json');

    ...

    app.set('view cache', RunMode.isProduction());           // only cache views in production

