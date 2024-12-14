import {render,html} from '../lib/lit-html.js'


const template = ()=>html`
<h1>catalog template</h1>

`

export default function(ctx){
    ctx.render(template())
}