import * as Path from 'path';

import * as express from 'express';
import { handlebars } from 'consolidate';
import { Router } from 'vio';

let app = express();

app.engine('hbs', handlebars);

let apiRouter = new Router(app, {
    routesRoot: Path.join(__dirname, '../api'),
    prefix: '/api'
});

let pageRouter = new Router(app, {
    routesRoot: Path.join(__dirname, '../page/mobile'),
    viewsRoot: Path.join(__dirname, '../../static/mobile'),
    viewsExtension: '.hbs',
    prefix: '/mobile'
});

let desktopRouter = new Router(app, {
    routesRoot: Path.join(__dirname, '../page/desktop'),
    viewsRoot: Path.join(__dirname, '../../static/desktop'),
    viewsExtension: '.hbs',
    prefix: '/'
});

app.listen(1337);
