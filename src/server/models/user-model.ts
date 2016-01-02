import * as Sequelize from 'sequelize';

import sequelize from '../core/sequelize';

export interface ModelPOJO {
    id?: number;
    mobile?: string;
    firstName?: string;
    password?: string;
}

export interface ModelInstance extends Sequelize.Instance<ModelInstance, ModelPOJO>, ModelPOJO {};

var Model = sequelize.define<ModelInstance, ModelPOJO>('user', {
    mobile: Sequelize.STRING,
    firstName: Sequelize.STRING,
    password: Sequelize.STRING
});

Model.sync();

export default Model;
