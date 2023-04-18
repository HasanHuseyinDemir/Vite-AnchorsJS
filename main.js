import './style/style.css'
import {html} from "anchorsjs"
import { Counter } from './components/Counter'
import { Clock } from './components/Clock'

/*Recomended vscode extensions
* jsx highlighter : es6-string-jsx
* html highlighter: es6-string-html*/
// usage html/*jsx*/ || html/*html*/

const Main=()=>{
  let Page=html/*html*/`
  <>
    <div id="logo-container">
      <img id="vite-logo" width="150px" src="../images/vite-logo.png">
      <img id="logo" width="250px" src="../images/anchors-logo.png">
    </div>

    <h1 id="frame-vite">Vite</h1>
    <h2 id="frame-name">Anchors Framework </h2>
    ${Clock} 
    <Counter/>  
  </>
  `
  //you can use ${Clock} in 'Page' or use Page.component("counter",Counter) for <Counter/>
  //or use just ${Counter} instead of <Counter/>
  Page.component("counter",Counter);//<Counter/>
  Page.onMount(()=>{console.log("Anchors-JS v1.5")})

  return Page
}

document.querySelectorAll('#app').render(Main);
