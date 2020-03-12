'use strict'

//const express = require('./config/express.js')
const Hapi = require('Hapi')
const mongoose = require('mongoose')


const server = new Hapi.server({
    host:'localhost',
    port: 8000,
    routes: {
        cors: true
    }
})

server.app.db = mongoose.connect(
    'mongodb://localhost/hapijslogin',
    { useNewUrlParser: true }
  )
  const init = async () => {
    await server
      .register(
        { plugin: require('./routes/Users') },
        {
          routes: {
            prefix: '/users'
          }
        }
      )
      .catch(err => {
        console.log(err)
      })
  
    await server.start()
    console.log(`Server running at: ${server.info.uri}`)
  }
  
  init()



 
