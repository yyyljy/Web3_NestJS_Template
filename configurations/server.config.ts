export default () => ({
  server: {
    port: parseInt(process.env.PORT, 10) || 5000,
    corsOption: {
      origin: (origin, callback) => {
        const allowedOrigins = process.env.CORS_ALLOWS.replace(
          /[\[\]\s']/g,
          '',
        ).split(',');
        if (!origin || allowedOrigins.indexOf(origin) !== -1) {
          callback(null, true);
        } else {
          callback(new Error('Not allowed by CORS'));
        }
      },
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      preflightContinue: false,
      optionsSuccessStatus: 200,
    },
  },
});
