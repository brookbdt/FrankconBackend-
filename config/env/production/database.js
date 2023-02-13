const parse = require("pg-connection-string").parse;
const config = parse(process.env.DATABASE_URL);

module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: config.host,
      port: config.port,
      database: config.database,
      user: config.user,
      password: config.password,
      // ssl: {
      //   rejectUnauthorized: false,
      // },
      ssl: {
        rejectUnauthorized: env.bool("DATABASE_SSL_SELF", false), // For self-signed certificates
      },
      debug: false,
      // ssl: process.env.DATABASE_URL ? true : false,
      // ssl: env.bool('DATABASE_SSL', true),
    },
  },
});
