const config = {
  port: 3030,
  authentication: {
    tokenKey: 'authToken',
  },
  token: {
    exp: 30*60*1000, // 30 mins
  },
  cors: {
    enabled: true,
    credentials: true,
  },
  sessions: {
    enabled: true,
    store: {
      host: '127.0.0.1',
      port: 27017,
      db: 'test-njs',
      collection: 'sessions',
    },
    cookie: {
      domain: 'localhost',
    },
  },
};

export default config;
