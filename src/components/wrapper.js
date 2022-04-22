import React from "react";

const Wrapper = () => {
  document.addEventListener("keydown", (e)=>{
    if (e.shiftKey && e.code === "KeyO") {
      e.preventDefault()
      e.stopImmediatePropagation()
      const options = document.getElementById("options");
      console.log(options)
        options.style.getPropertyValue('display') === 'grid' 
        ? options.style.setProperty('display','none')
        : options.style.setProperty('display','grid')
    }
    if (e.shiftKey && e.code === "KeyH") {
      e.preventDefault()
      e.stopImmediatePropagation()
        const options = document.getElementById("highlightDiv");
        options.style.getPropertyValue('display') === 'grid' 
        ? options.style.setProperty('display','none')
        : options.style.setProperty('display','grid')
    }
    if (e.shiftKey && e.code === "KeyF") {
      e.preventDefault()
      e.stopImmediatePropagation()
        const options = document.getElementById("filter");
        options.style.getPropertyValue('display') === 'grid' 
        ? options.style.setProperty('display','none')
        : options.style.setProperty('display','grid')
    }
    if (e.shiftKey && e.code === "KeyR") {
      if (document.getElementById("options").style.getPropertyValue('display') === 'grid') {
        document.getElementById("buTT").focus();
      }
    }
    
    if (e.shiftKey && e.code === "KeyT") {
      e.preventDefault()
      e.stopImmediatePropagation()
        const options = document.getElementById("wrapper");
        if (options.getAttribute('class') === 'display-none') {
          options.setAttribute('class','display-grid')
          setTimeout(()=>options.style.setProperty('transform','translateY(0%)'),100)
          document.addEventListener("click", clearCard)
          document.addEventListener("keydown", clearCard)
        }
    }
    if (e.shiftKey && e.code === "KeyM") {
      e.preventDefault()
        document.getElementById("min").focus();
    }
  })
  function clearCard() {
    const el = document.getElementById("wrapper");
    el.style.setProperty('transform','translateY(100%)')
    setTimeout(()=>el.setAttribute('class','display-none'),300)
    document.removeEventListener("keydown",clearCard)
    document.removeEventListener("click",clearCard)
  }
      document.addEventListener("click", clearCard )
      document.addEventListener("keydown", clearCard)
      


  //Themes:
  function changeThemeMonkey() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--sub","rgb(32,34,37)");
    htmlEl.style.setProperty("--bg","#646669");
    htmlEl.style.setProperty("--text","#e2b714");
}
function changeThemeClassic() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#fff");
    htmlEl.style.setProperty("--sub","#fafafa");
    htmlEl.style.setProperty("--text","#000");
    htmlEl.style.setProperty("--hl","yellow");
    htmlEl.style.setProperty("--subT","black");
    htmlEl.style.setProperty("--textH","var(--bg)");
}
function changeThemeBotanical() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#7b9c98");
    htmlEl.style.setProperty("--sub","#495755");
    htmlEl.style.setProperty("--text","#eaf1f3");
}
function changeThemeFrooChew() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#d6d3d6");
    htmlEl.style.setProperty("--sub","#b49cb5");
    htmlEl.style.setProperty("--text","#5c1e5f");
}
function changeThemeMatrix() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#000");
    htmlEl.style.setProperty("--sub","#003b00");
    htmlEl.style.setProperty("--text","#15ff00");
}
function changeThemePaper() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#eee");
    htmlEl.style.setProperty("--sub","#b2b2b2");
    htmlEl.style.setProperty("--text","#444");
}
function changeThemeMiami() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#18181a");
    htmlEl.style.setProperty("--sub","#47bac0");
    htmlEl.style.setProperty("--text","#e4609b");
}
function changeThemeDragon() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#1a0b0c");
    htmlEl.style.setProperty("--sub","#e2a528");
    htmlEl.style.setProperty("--text","#ff3a32");
}
function changeThemeRyujin() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#081426");
    htmlEl.style.setProperty("--sub","#ffbc90");
    htmlEl.style.setProperty("--text","#f17754");
}
function changeThemeSewing() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#241963");
    htmlEl.style.setProperty("--sub","#446ad5");
    htmlEl.style.setProperty("--text","#f2ce83");
}
function changeThemeStrawberry() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#f37f83");
    htmlEl.style.setProperty("--sub","#e53c58");
    htmlEl.style.setProperty("--text","#fcfcf8");
}
function changeThemeAlpine() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg","#6c687f");
    htmlEl.style.setProperty("--sub","#9994b8");
    htmlEl.style.setProperty("--text","#fff");
}



  return (
  <div id="wrapper">
      <h1>Weight Equivalence Calculator</h1>
      <h4>Welcome!</h4>
      <p>Click anywhere or hit any Key to Continue</p>
      <aside>
        <span>Hotkeys:</span> <br/><br/>
        <pre>Options:            shift + o</pre><br/>
        <pre>Highlighter:        shift + h</pre><br/>
        <pre>Filter:             shift + f</pre><br/>
        <pre>Focus table toggle: shift + r</pre><br/>
        <pre>Focus first input:  shift + m</pre>
      </aside>
      <footer>
        <h4>Choose a Theme:</h4>
        <span onClick={changeThemeBotanical}>Botanical</span>
        <span onClick={changeThemeClassic}>Classic</span>
        <span onClick={changeThemeAlpine}>Alpine</span>
        <span onClick={changeThemeStrawberry}>Strawberry</span>
        <span onClick={changeThemeFrooChew}>FrooChew</span>
        <span onClick={changeThemeMatrix}>Matrix</span>
        <span onClick={changeThemePaper}>Paper</span>
        <span onClick={changeThemeMiami}>Miami</span>
        <span className="margin-bottom" onClick={changeThemeDragon}>Dragon</span>
        <span className="margin-bottom" onClick={changeThemeRyujin}>Ryujin</span>
        <span className="margin-bottom" onClick={changeThemeSewing}>Sewing</span>
        <span className="margin-bottom" onClick={changeThemeMonkey}>Monkey</span>
      </footer>
    </div>
  )
}

export default Wrapper