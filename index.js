'use strict';

const { run } = require('./src/server');
const {PORT} = require('./src/config');
const { sequelize } = require('./src/models');



sequelize.sync().then(() => {
    run(PORT);
}).catch(reject => console.log(reject));
