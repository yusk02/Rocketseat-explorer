import initial from './default.js'
import * as elements from './elements.js' 
import * as events from './events.js'
import { stopCountdown } from './timer.js'

export function start(min, sec) {
  initial.minutes = Number(min)
  initial.seconds = Number(sec)

  const minutes = isNaN(parseInt(min, 10)) ? 0 : parseInt(min, 10);
  const seconds = isNaN(parseInt(sec, 10)) ? 0 : parseInt(sec, 10);
  
  updateTimer(minutes, seconds)
}


export function countdown() {
  clearTimeout(initial.timeoutID)
  
  let minutes = Number(elements.minutes.textContent)
  let seconds = Number(elements.seconds.textContent)
  
  seconds--
  
  if(seconds < 0) {
    seconds = 59
    minutes--
  }
  
  if(minutes < 0) {
    return
  } else if (initial.timeoutID == 0) {
    return
  }

  if (minutes == 0 && seconds == 0) {
    events.blink()
    stopCountdown()
  }
  
  updateTimer(minutes, seconds)
  initial.timeoutID = setTimeout(() => countdown(), 1000)
}

export function updateTimer(minutes, seconds) {
  minutes = Number(minutes) ?? initial.minutes;
  seconds = Number(seconds) ?? initial.seconds;
 
  if (minutes > 59) {
    seconds = 0
  } 

  elements.minutes.textContent = String(minutes).padStart(2, "0");
  elements.seconds.textContent = String(seconds).padStart(2, "0");
}