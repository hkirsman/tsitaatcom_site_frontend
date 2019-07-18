// PM2 ecosystem File to start the project.
// @todo: As I don't know how much this can be configured by Zone.ee, I've disabled everything but minimal and will add more gradually.
module.exports = {
  apps : [{
    name: 'tsitaat-com',
    // script: 'app.js',
    script: 'npm start',
    cwd: './domeenid/www.tsitaat.com/frontend',
    // Options reference: https://pm2.io/doc/en/runtime/reference/ecosystem-file/
    // args: 'one two',
    // instances: 1,
    // autorestart: true,
    // watch: false,
    // max_memory_restart: '1G',
    // env: {
    //   NODE_ENV: 'development'
    // },
    // env_production: {
    //   NODE_ENV: 'production'
    // }
  }],

  // deploy : {
  //   production : {
  //     user : 'node',
  //     host : '212.83.163.1',
  //     ref  : 'origin/master',
  //     repo : 'git@github.com:repo.git',
  //     path : '/var/www/production',
  //     'post-deploy' : 'npm install && pm2 reload ecosystem.config.js --env production'
  //   }
  // }
};
