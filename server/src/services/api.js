const axios = require('axios')

const baseURL =
  'https://my-json-server.typicode.com/christianmarinhoandrade/dbjson'

const api = axios.create({
  baseURL
})

module.exports = api
