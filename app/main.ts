// Universal
import 'angular2-universal/polyfills';
import { bootstrap, enableProdMode } from 'angular2-universal';

// Before Universal
//import {bootstrap} from '@angular/platform-browser-dynamic';

import {AppComponent} from './app.component';

console.log("bootstrap");

setTimeout(function() {bootstrap(AppComponent).then(function() { alert("done"); }); }, 3000);

