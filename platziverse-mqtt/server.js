'use strict'

const debug = require('debug')('platziverse:mqtt')
const redis = require('redis')
const chalk = require('chalk')

let aedes = require('aedes')
const mqemitter = require('mqemitter-redis')
const redisPersistence = require('aedes-persistence-redis')

function startAedes () {

  const port = 1883

  // aedes = aedes({
  //   mq: mqemitter({
  //     port: <redis_port>,
  //     host: <redis_url>,
  //     family: 4
  //   }),
  //   persistence: redisPersistence({
  //    port: <redis_port>,
  //     host: <redis_url>,
  //     family: 4 // 4 (IPv4) or 6 (IPv6)
  //   })
  // })

  const server = require('net').createServer(aedes.handle)

  server.listen(port, function () {
    console.log(`${chalk.green('[platziverse-mqtt]')} server is running`)
    
  })
  
}
startAedes ()

