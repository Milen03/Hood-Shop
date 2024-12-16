import './config/firebaseInit.js'
import page from "./lib/page.js";
import app from './config/firebaseInit.js';

import catalogView from "./views/catalogView.js";
import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";
import loginView from './views/loginView.js';

console.log(app);

//Setup layout
page(layoutView)
//setup rout
page('/',homeView)
page('/catalog',catalogView)
page('/login',loginView)

//Start routing
page()
