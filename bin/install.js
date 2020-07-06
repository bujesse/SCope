#!/usr/bin/env node
let shell = require('shelljs');
console.log('Installing SCope Bind Server');
shell.cd('opt/scopeserver/bindserver');
shell.exec('npm install');
shell.cd('../../../');
let commandExists = require('command-exists');

commandExists('poetry')
    .then(() => {
        console.log('Installing SCope Data Server...');
        shell.exec('cd opt && poetry install');
    })
    .catch(function () {
        throw Error(
            "The poetry program cannot be found. Installation has aborted. Please install it using 'pip install poetry' and then rerun the installation with 'npm install'."
        );
    });
