#! /usr/bin/env node
const scripts = require('./scripts')

if(Object.hasOwnProperty(process.argv[2])){
    scripts.process.argv[2](process.argv[3])
}