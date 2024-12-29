import './config/firebaseInit.js'
import page from "./lib/page.js";

import catalogView from "./views/item/catalogView.js";
import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";
import loginView from './views/loginView.js';
import { authMiddleware } from './middlewares/authMiddlewares.js';
import logoutView from './views/logoutView.js';
import registerView from './views/registerView.js';
import createView from './views/item/createView.js';
import detailsView from './views/item/detailsView.js';
import editView from './views/item/editView.js';




//Setup layout
page(authMiddleware )
page(layoutView)
//setup rout
page('/',homeView)
page('/catalog',catalogView)

page('/catalog/create',createView)
page('/catalog/:itemId/details',detailsView)
page('/catalog/:itemId/edit',editView)

page('/login',loginView)
page('/logout',logoutView)
page('/register',registerView)

//Start routing
page()
