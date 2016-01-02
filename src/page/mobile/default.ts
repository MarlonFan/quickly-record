import { Controller, get, post } from 'vio';

// extends `Controller` class.
export default class extends Controller {
    // route as a HTTP GET request.
    @get()
    default() {
        // can also be a promise if it's async.
        return {
            title: 'Hello, VIO!',
            content: 'Keep calm and read the doc!'
        };
    }
}
