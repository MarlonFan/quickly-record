import * as Promise from 'bluebird';

import {default as userModel, ModelPOJO as userModelPOJO, ModelInstance as userModelInstance} from '../models/user-model';

/**
  * 注册用户
  */
export function register({
    mobile,
    password,
    firstName
}: {
    mobile: string;
    password: string;
    firstName: string;
}): Promise<userModelInstance> {
    return Promise.resolve(userModel.create({
        mobile,
        password,
        firstName
    }));
}
