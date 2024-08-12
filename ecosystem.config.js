module.exports = {
  apps: [
    {
      name: 'node-webhook',
      script: 'dist/server.js',
      instances: 1,
      exec_mode: 'fork',
      watch: true,
      // Define a health check
      health_check: {
        url: 'http://54.255.202.15:8080:3000/health', // Example endpoint
        interval: 30000, // Check every 30 seconds
        timeout: 5000, // Timeout after 5 seconds
        retries: 3, // Retry 3 times before considering it failed
      },
    },
  ],
};
