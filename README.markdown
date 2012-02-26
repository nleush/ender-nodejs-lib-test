# What is this?

This is the test of writing JavaScript library which can be used on client and server side simultaneously.
NPM dependencies and CommonJS `require` used.
Server side environment expected to be NodeJS.
Client side supported with Ender.

# Packages description

**lib-common** - common functionality for server and client.

**lib-server**, **lib-client** - server and client side wrapper of lib-common.

**test-serever**, **test-client** - server and client side lib consumers.
 
# Install

All packages are not in NPM repository, so we need to manually link all dependencies.

## Link packages (for local environment)

    sh ./link-libs

# Using Ender to compile client scripts

This step is optional, result included in source.

## Install Ender

    sudo npm install ender -g

## Build ender lib

    cd test-client
    ender build

# Run tests

## Run client test

Open `/test-client/test.html` in your browser.

## Run server test

    cd test-server
    node main.js