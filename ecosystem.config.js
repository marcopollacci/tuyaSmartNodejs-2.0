module.exports = {
  apps : [{
    name: 'TuyaController 2.0',
    script: 'dist/src/main.js',
    error_file: 'log/err.log',
    out_file: 'log/out.log',
    log_file: 'log/combined.log',
    time: true,
    instances: 1,
    autorestart: true,
    max_memory_restart: '1G',
    env: {
      NODE_ENV: 'production'
    },
  }],

};

