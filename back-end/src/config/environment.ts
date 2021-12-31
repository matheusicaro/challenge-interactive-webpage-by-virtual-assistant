export default {
  DATABASE_IN_MEMORY_CACHE_ACTIVE: true,
  DATABASE_NAME: process.env.DATABASE_NAME || '',
  DATABASE_SIZE_OF_MEMORY_CACHE_IN_MB: parseInt(process.env.DATABASE_MEMORY_CACHE_SIZE_LIMIT_IN_MB || '0'),
  DATABASE_URI: process.env.DATABASE_URI || '',

  NODE_ENV: process.env.NODE_ENV,
  PORT: parseInt(process.env.PORT || ''),

  WATSON_API_KEY: process.env.WATSON_API_KEY || '',
  WATSON_API_VERSION_DATE: process.env.WATSON_API_VERSION_DATE || '',
  WATSON_ASSISTANT_ID: process.env.WATSON_ASSISTANT_ID || '',
  WATSON_SERVICE_FULL_URL: process.env.WATSON_SERVICE_FULL_URL || ''
};
