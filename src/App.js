import React, { useEffect, useState } from 'react';
import './App.css';
import Highlight from './components/highlight';
import TableParameters from './components/tableGen';
import TableLogic from './components/tableLogic';
import Filter from './components/filter';
import Options from './components/options';
import Wrapper from './components/wrapper';

function App() {
  const [bin, setBin] = useState(0)
  const [target, setTarget] = useState(0);
  const [min, setMin] = useState(null);
  const [max, setMax] = useState(null);
  const [step, setStep] = useState(1);
  const [reps, setReps] = useState(null);
  const [tableToggle, setTableToggle] = useState(true);
  const [repMax, setRepMax] = useState(true);
  const [reverse, setReverse] = useState(false);
  const [unit, setUnit] = useState("null")

  const handleMin = (e) => {
    let event = Number(e.target.value)
    let maxVal = document.getElementById("max").value
    if (event > 0 && event <= maxVal) {
      if ((maxVal - event) % step === 0) {
        if ((maxVal-event) % document.getElementById("step").value === 0) {
          setStep(document.getElementById("step").value)
        }
        setMin(event);
        setMax(maxVal);
      }
    }
  }
  const handleMax = (e) => {
    let event = Number(e.target.value)
    let minVal = document.getElementById("min").value
    if (event > 0 && event >= minVal) {
      if ((event - minVal) % step === 0) {
        if ((event - minVal) % document.getElementById("step").value === 0) {
          setStep(document.getElementById("step").value)
        }
        setMax(event);
        setMin(minVal);
      }
    }
  }
  const handleStep = (e) => {
    if (e.target.value > 0) {
      if ((max - min) % e.target.value === 0) {
        setStep(e.target.value);
      }
    }
  }
  
  useEffect(() => {
    clearHighlighter();
    highlighter();
    function restoreAll() {
      document.querySelectorAll(`th[data-col]`).forEach(val => {
        val.style.setProperty('display','table-cell')});
      document.querySelectorAll(`td[data-col]`).forEach(val => {
        val.style.setProperty('display','table-cell')});
      document.querySelectorAll(`tr[data-row]`).forEach(val => {
        val.style.setProperty('display','table-row')}) ;  
    }
    restoreAll();
    function clearHighlighter() {
      if (document.querySelectorAll('td')) {
        document.querySelectorAll('td').forEach(val => {
          val.style.setProperty('background-color', 'var(--sub)');
          val.style.setProperty('border', 'var(--bg) 1px solid');
          val.style.setProperty('color', 'var(--text)');
        })
        
      }
    }
    function highlighter() {
    let x = target - bin;
    for (x; x < target + bin; x += 0.1) {
      if (document.getElementsByClassName(`${x.toFixed(1)}`)) {
        document.querySelectorAll(`td[class="${x.toFixed(1)}"]`)
          .forEach(val=> {val.style.setProperty('background-color','var(--hl)');
                          val.style.setProperty('border','var(--textH) 1px solid');
                          val.style.setProperty('color','var(--subT)');
        })
      }
    }
  }    
  },[reps,step,max,min,target,bin,repMax,reverse])


  return (
    <div id="appDiv">
      <form>
        <TableParameters min={min} max={max} step={step} reps={reps} setReps={setReps} handleMin={handleMin} handleMax={handleMax} handleStep={handleStep} />
        <Options min={min} max={max} step={step} reps={reps} repMax={repMax} unit={unit} setUnit={setUnit} setRepMax={setRepMax} setReverse={setReverse} setTableToggle={setTableToggle} tableToggle={tableToggle} />
        <Highlight target={target} bin={bin} setTarget={setTarget} setBin={setBin} />
        <Filter min={min} max={max} reps={reps} />
      </form>
      <div id="tableContainer">
        <TableLogic max={max} min={min} reps={reps} step={step} reverse={reverse} repMax={repMax} unit={unit} />
      </div>
        <Wrapper />
    </div>
  )
}

export default App