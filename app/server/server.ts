// Universal
import 'angular2-universal/polyfills';

// Express
import * as path from 'path';
import * as express from 'express';

// Angular 2 Universal
import { provide, expressEngine, ORIGIN_URL, enableProdMode } from 'angular2-universal';

// Application/Universal
import { AppComponent } from '../app.component';
enableProdMode();

// Express
const app = express();
const ROOT = path.join(path.resolve(__dirname, '../..'));

// express view
// Engine points to Universal 
app.engine('html', expressEngine);
app.set('views', __dirname);
app.set('view engine', 'html');

// Server-side application render (universal)
function ngApp(req, res) {
    console.log("here");
    res.render('index', {
        directives: [AppComponent],
        platformProviders: [
            provide(ORIGIN_URL, { useValue: 'http://localhost:3000' })
        ],

        preboot: true
    });
}

// serve static files
app.use(express.static(ROOT, { index: false }));

// This allows me to render without using universal
//app.use(express.static(__dirname + '/'));

// routes with html5 push state
app.use('/', ngApp);

// server
app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});