import { Controller, get, post, Request } from 'vio';

import * as User from '../server/modules/user';

// extends `Controller` class.
export default class extends Controller {
    // route as a HTTP GET request.
    @get()
    default(req: Request<any>) {
        return User.register({
            mobile: req.query.name,
            password: req.query.password,
            firstName: req.query.firstName
        })
        .then(record => {
            console.log(record.firstName + '注册成功');
        })
        .catch(err => {
            console.log(req.query.firstName + '注册失败');
            console.log(err);
        });
    }
}
