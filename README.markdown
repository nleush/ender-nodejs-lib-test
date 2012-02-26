# Packages description

**lib-common** - common functionality for server and client

**lib-server**, **lib-client** - server and client side implementation with lib-common using

**test-serever**, **test-client** - server and client side lib consumers
 
# Install

## Get ender

    sudo npm install ender -g

## Link packages (for local env)

    cd lib-common
    sudo npm link
    
    cd ../lib-client
    npm link lib-common
    
    cd ../lib-server
    npm link lib-common
    
    
    cd ../lib-client
    sudo npm link
    
    cd ../test-server
    npm link lib-server
    
    
    cd ../lib-server
    sudo npm link
    
    cd ../test-server
    npm link lib-server


## Build ender lib

    cd test-client
    ender build

## Run client test

Open `/test-client/test.html` in your browser.

## Run server test

    cd test-server
    node main.js