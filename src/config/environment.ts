export default {
  DATABASE_URI: process.env.DATABASE_URI || '',
  DATABASE_NAME: process.env.DATABASE_NAME || '',
  DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB: parseInt(process.env.DATABASE_MEMORY_CACHE_SIZE_LIMIT_IN_MB || '0'),
  DATABASE_IN_MEMORY_CACHE_ACTIVE: true,
  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || '')
};
