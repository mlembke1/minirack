module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/minirack-dev'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/minirack-test'
  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
}
