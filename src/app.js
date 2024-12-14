import './config/firebaseInit.js'
import page from "./lib/page.js";
import catalogView from "./views/catalogView.js";
import homeView from "./views/homeView.js";
import layoutView from "./views/layoutView.js";


//Setup layout
page(layoutView)
//setup rout
page('/',homeView)
page('/catalog',catalogView)

//Start routing
page()
