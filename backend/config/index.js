const config = {
  PORT: process.env.PORT || 3000,
  // MONGO_URL: process.env.MONGO_URL || 'mongodb://127.0.0.1:27017/hs-project',
  MONGO_URL: process.env.MONGO_URL || 'mongodb+srv://hsproject:1q2w3e4r@cluster0.bvf3g08.mongodb.net',
  JWT_SECRET: process.env.JWT_SECRET || 'secret',
  JWT_TTL: process.env.JWT_TTL || '7d',
};

module.exports = config;