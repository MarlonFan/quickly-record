import * as Sequelize from 'sequelize';

import * as config from '../../config';

var sequelize = new Sequelize(config.database.name, config.database.username, config.database.password, {
    host: config.database.host,
    dialect: config.database.type,
    port: config.database.port,
    timezone: '+08:00'
});

export default sequelize;
