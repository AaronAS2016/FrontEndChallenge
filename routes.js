const routes = require('next-routes')

module.exports = routes()
.add('index')
.add('search', '/search', 'search')
.add('dashboard', '/dashboard', 'dashboard')
.add('devices', '/devices', 'devices')