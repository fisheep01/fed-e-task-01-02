const { task } = require('folktale/concurrency/task')
const { split, find } = require('lodash/fp')
const fs = require('fs')

function readFile (filename) {
    return task(resolver => {
        fs.readFile(filename, 'utf-8', (err, data) => {
            if (err) resolver.reject(err)
            resolver.resolve(data)
        })
    })
}

readFile('./package.json')
    .map(split('\n'))
    .map(find(x => x.includes('version')))
    .run()
    .listen({
        onRejected: err => {
            console.log(err)
        },
        onResolved: value => {
            console.log(value)
        }
    })