import './App.css';
import Instruction from './instruction';
import Quote from "./quote.js";

var timer = [0, 0, 0, 0];
var timerRunning = false;
var interval;



function leadingZero(time) {
  if (time <= 9) {
      time = "0" + time;
  }
  return time;
}

function runTimer() {
  let currentTime = leadingZero(timer[0]) + ":" + leadingZero(timer[1]) + ":" + leadingZero(timer[2]);
  document.getElementById('timer').innerHTML = currentTime;
  timer[3]++;

  timer[0] = Math.floor((timer[3]/100)/60);
  timer[1] = Math.floor((timer[3]/100) - (timer[0] * 60));
  timer[2] = Math.floor(timer[3] - (timer[1] * 100) - (timer[0] * 6000));

  let typed = document.getElementById('textBox').value.length;
  let timeTaken = timer[0] + (timer[1]/60);

  document.getElementById('wpm').innerHTML = "WPM : " + (typed/5)/timeTaken;

}

function start() {
  if (document.getElementById('textBox').value.length === 0 && !timerRunning) {
      timerRunning = true;
      interval = setInterval(runTimer, 10);
  }
}


function reset() {
  clearInterval(interval);
  interval = null;
  timer = [0,0,0,0];
  timerRunning = false;

  document.getElementById('timer').innerHTML = '00:00:00';
  document.getElementById('textBox').style.borderColor = 'grey';
  document.getElementById('textBox').value = '';
  document.getElementById('wpm').innerHTML = ''
  
}



function matchText() {
  if(document.getElementById('toType').innerHTML === document.getElementById('textBox').value) {
    document.getElementById('textBox').style.borderColor = 'green';
    clearInterval(interval);
  }
  else if(
    document.getElementById('toType').innerHTML.slice(0, document.getElementById('textBox').value.length) === document.getElementById('textBox').value
  ) {
    document.getElementById('textBox').style.borderColor = 'orange';
  }
  else {
    document.getElementById('textBox').style.borderColor = 'red';
  }
}

function App() {
  return (
    <>
      <header><h1>Speed Tester</h1></header>
      <Instruction />
      <Quote />
      <textarea id='textBox' rows='10' cols='150' onKeyUpCapture={matchText} onKeyPress={start}></textarea>
      <section id="clock">
        <h1 id="timer">00:00:00</h1>
      </section>
      <button onClick={reset}>Reset</button>
      <h2 id='wpm'></h2>
    </>
  )
}

export default App;
