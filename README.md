# ipp5-control-room

## Requirements

- Azure Subscription
    - https://azure.microsoft.com/en-us/

- Azure Command-Line Interface
    - https://learn.microsoft.com/en-us/cli/azure/
    - version
        ~~~~~ sh
        $ az version
        {
            "azure-cli": "2.43.0",
            "azure-cli-core": "2.43.0",
            "azure-cli-telemetry": "1.0.8",
            "extensions": {
                "account": "0.2.5"
            }
        }
        ~~~~~

- Docker
    - https://www.docker.com/
    - version
        ~~~~~ sh
        $ docker --version
        Docker version 20.10.22, build 3a2c30b
        ~~~~~

- Node.js
    - https://nodejs.org/en/
    - version
        ~~~~~ sh
        $ node --version
        v18.2.0
        ~~~~~
        ~~~~~ sh
        $ npm --version
        9.1.2
        ~~~~~

## Installation

~~~~~ sh
$ git clone https://github.com/e53e04ac/ipp5-control-room.git
$ cd ipp5-control-room

$ npm install

$ mkdir .configuration
$ echo '{ 
    "subscription": "(azure subscription id)",
    "group": "(resource group name)",
    "location": "(location)",
    "realm": "(realm)",
    "az": "az",
    "docker": "docker",
    "node": "node"
}' > .configuration/metadata.json

$ az login

$ node generate-keys.mjs

$ node build-static.mjs

$ node terraform.mjs

$ node launch-frontend.mjs

$ node launch-backend-static.mjs

$ node launch-backend-idp.mjs

$ node launch-backend-api.mjs

$ node launch-backend-batch.mjs
~~~~~
