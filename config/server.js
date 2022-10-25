module.exports = ({ env }) => ({
  proxy: true,
  port: env.int("PORT", 1337),
  app: {
    keys: env.array("APP_KEYS"),
  },
  url: env("MY_HEROKU_URL"),
});
