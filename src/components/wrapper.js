import React from "react";

const Wrapper = () => {
  function initTheme() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--sub", localStorage.getItem("--sub"));
    htmlEl.style.setProperty("--bg", localStorage.getItem("--bg"));
    htmlEl.style.setProperty("--text",localStorage.getItem("--text") );
    htmlEl.style.setProperty("--hl", localStorage.getItem("--hl"));
    htmlEl.style.setProperty("--subT", localStorage.getItem("--subT"));
    htmlEl.style.setProperty("--textH", localStorage.getItem("--textH"));
    htmlEl.style.setProperty("--bord", localStorage.getItem("--bord"))
  }
  initTheme();

  document.addEventListener("keydown", (e) => {
    if (e.shiftKey && e.code === "KeyO") {
      e.preventDefault()
      e.stopImmediatePropagation()
      const options = document.getElementById("options");
      console.log(options)
      options.style.getPropertyValue('display') === 'grid'
        ? options.style.setProperty('display', 'none')
        : options.style.setProperty('display', 'grid')
    }
    if (e.shiftKey && e.code === "KeyH") {
      e.preventDefault()
      e.stopImmediatePropagation()
      const options = document.getElementById("highlightDiv");
      options.style.getPropertyValue('display') === 'grid'
        ? options.style.setProperty('display', 'none')
        : options.style.setProperty('display', 'grid')
    }
    if (e.shiftKey && e.code === "KeyF") {
      e.preventDefault()
      e.stopImmediatePropagation()
      const options = document.getElementById("filter");
      options.style.getPropertyValue('display') === 'grid'
        ? options.style.setProperty('display', 'none')
        : options.style.setProperty('display', 'grid')
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
        options.setAttribute('class', 'display-grid')
        setTimeout(() => options.style.setProperty('transform', 'translateY(0%)'), 100)
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
    el.style.setProperty('transform', 'translateY(100%)')
    setTimeout(() => el.setAttribute('class', 'display-none'), 300)
    document.removeEventListener("keydown", clearCard)
    document.removeEventListener("click", clearCard)
  }
  document.addEventListener("click", clearCard)
  document.addEventListener("keydown", clearCard)



  //Themes:
  function changeThemeMonkey() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--sub", "rgb(32,34,37)");
    htmlEl.style.setProperty("--bg", "#646669");
    htmlEl.style.setProperty("--text", "#e2b714");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--sub","rgb(32,34,37)")
    localStorage.setItem("--bg", "#646669")
    localStorage.setItem("--text", "#e2b714")
    localStorage.setItem("--hl", "var(--bg)")
    localStorage.setItem("--subT", "var(--sub)")
    localStorage.setItem("--textH", "var(--text)")
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeClassic() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#fff");
    htmlEl.style.setProperty("--sub", "#fafafa");
    htmlEl.style.setProperty("--text", "#000");
    htmlEl.style.setProperty("--hl", "yellow");
    htmlEl.style.setProperty("--subT", "black");
    htmlEl.style.setProperty("--textH", "var(--bg)");
    htmlEl.style.setProperty("--bord", "black")
    localStorage.setItem("--bg", "#fff");
    localStorage.setItem("--sub", "#fafafa");
    localStorage.setItem("--text", "#000");
    localStorage.setItem("--hl", "yellow");
    localStorage.setItem("--subT", "black");
    localStorage.setItem("--textH", "var(--bg)");
    localStorage.setItem("--bord", "black")
  }
  function changeThemeBotanical() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#7b9c98");
    htmlEl.style.setProperty("--sub", "#495755");
    htmlEl.style.setProperty("--text", "#eaf1f3");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#7b9c98");
    localStorage.setItem("--sub", "#495755");
    localStorage.setItem("--text", "#eaf1f3");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeFrooChew() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#d6d3d6");
    htmlEl.style.setProperty("--sub", "#b49cb5");
    htmlEl.style.setProperty("--text", "#5c1e5f");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#d6d3d6");
    localStorage.setItem("--sub", "#b49cb5");
    localStorage.setItem("--text", "#5c1e5f");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeMatrix() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#000");
    htmlEl.style.setProperty("--sub", "#003b00");
    htmlEl.style.setProperty("--text", "#15ff00");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#000");
    localStorage.setItem("--sub", "#003b00");
    localStorage.setItem("--text", "#15ff00");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemePaper() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#eee");
    htmlEl.style.setProperty("--sub", "#b2b2b2");
    htmlEl.style.setProperty("--text", "#444");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#eee");
    localStorage.setItem("--sub", "#b2b2b2");
    localStorage.setItem("--text", "#444");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeMiami() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#18181a");
    htmlEl.style.setProperty("--sub", "#47bac0");
    htmlEl.style.setProperty("--text", "#e4609b");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#18181a");
    localStorage.setItem("--sub", "#47bac0");
    localStorage.setItem("--text", "#e4609b");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeDragon() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#1a0b0c");
    htmlEl.style.setProperty("--sub", "#e2a528");
    htmlEl.style.setProperty("--text", "#ff3a32");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#1a0b0c");
    localStorage.setItem("--sub", "#e2a528");
    localStorage.setItem("--text", "#ff3a32");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeRyujin() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#081426");
    htmlEl.style.setProperty("--sub", "#ffbc90");
    htmlEl.style.setProperty("--text", "#f17754");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#081426");
    localStorage.setItem("--sub", "#ffbc90");
    localStorage.setItem("--text", "#f17754");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeSewing() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#241963");
    htmlEl.style.setProperty("--sub", "#446ad5");
    htmlEl.style.setProperty("--text", "#f2ce83");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#241963");
    localStorage.setItem("--sub", "#446ad5");
    localStorage.setItem("--text", "#f2ce83");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeStrawberry() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#f37f83");
    htmlEl.style.setProperty("--sub", "#e53c58");
    htmlEl.style.setProperty("--text", "#fcfcf8");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#f37f83");
    localStorage.setItem("--sub", "#e53c58");
    localStorage.setItem("--text", "#fcfcf8");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }
  function changeThemeAlpine() {
    const htmlEl = document.getElementById('html');
    htmlEl.style.setProperty("--bg", "#6c687f");
    htmlEl.style.setProperty("--sub", "#9994b8");
    htmlEl.style.setProperty("--text", "#fff");
    htmlEl.style.setProperty("--hl", "var(--bg)");
    htmlEl.style.setProperty("--subT", "var(--sub)");
    htmlEl.style.setProperty("--textH", "var(--text)");
    htmlEl.style.setProperty("--bord", "var(--bg)")
    localStorage.setItem("--bg", "#6c687f");
    localStorage.setItem("--sub", "#9994b8");
    localStorage.setItem("--text", "#fff");
    localStorage.setItem("--hl", "var(--bg)");
    localStorage.setItem("--subT", "var(--sub)");
    localStorage.setItem("--textH", "var(--text)");
    localStorage.setItem("--bord", "var(--bg)")
  }



  return (
    <div id="wrapper">
      <h1>Weight Equivalence Calculator</h1>
      <h4>Welcome!</h4>
      <p>Click anywhere or hit any Key to Continue</p>
      <aside>
        <span>Hotkeys:</span> <br /><br />
        <pre>Options:            shift + o</pre><br />
        <pre>Highlighter:        shift + h</pre><br />
        <pre>Filter:             shift + f</pre><br />
        <pre>Opening Card:       shift + t</pre><br />
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