'use strict'

const fs = require('fs')
const { exec } = require('child_process')
const path = require('path')

const file = path.resolve(__dirname, './../app/config/environments/develop.js')


function createConfig(appName = 'meetings-api'){
    exec('git rev-parse --abbrev-ref HEAD', (err, stdout) => {
        if (err) return console.log(err)

        fs.readFile(file, 'utf8', function (err, data) {
            if (err) return console.log(err)

            const branch = stdout.trim().replace('/', '-')
            const result = data.replace(/develop/g, branch)
            const output = path.resolve(__dirname, `../app/config/environments/${branch}.js`)

            fs.writeFile(output, result, 'utf8', function (err) {
                if (err) return console.log(err)
            })
        })
    })
}

module.exports = createConfig


