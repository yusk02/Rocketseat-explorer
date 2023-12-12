import * as clock from './index.js'
import initial from './default.js'
import * as elements from './elements.js'

export function startCountdown(minutes, seconds) {
  minutes = elements.minutes.textContent
  seconds = elements.seconds.textContent

  if (document.activeElement === minutes || document.activeElement === seconds) {
    minutes.blur()
    seconds.blur()
  }

  clock.start(minutes, seconds)
  
  if (!initial.running && initial.timeoutID === null) {
    initial.running = true;
    clock.updateTimer(minutes, seconds)
    initial.timeoutID = setTimeout(clock.countdown, 1000);
  }
}

export function editTimer(timerElement) {
  stopCountdown()

  timerElement.setAttribute('contenteditable', true)
  timerElement.focus()

  timerElement.addEventListener('keydown', handleKeyDown)
  timerElement.addEventListener('blur', handleBlur)
}

function handleKeyDown(event) {
  if (event.key === 'Enter' || event.key === 'click') {
    handleBlur()
  }
}

function handleBlur(event) {
  let timer = event.currentTarget;
  let time = parseInt(timer.textContent) || 0;

  if (timer.id === 'minutes') {
    time = Math.min(Math.max(time, 0), 60);
    initial.minutes = time;
    clock.updateTimer(initial.minutes, elements.seconds.textContent);
  } else if (timer.id === 'seconds') {
    time = Math.min(Math.max(time, 0), 60);
    initial.seconds = time;
    clock.updateTimer(elements.minutes.textContent, initial.seconds);
  }

  timer.removeAttribute('contenteditable');
  timer.removeEventListener('keydown', handleKeyDown);
  timer.removeEventListener('blur', handleBlur);
  
  this.blur()
  startCountdown()
}

export function digitsLimiter(element) {
  element.addEventListener('input', function(event) {
    const input = event.data
      if (isNaN(input)) {
        element.textContent = element.textContent.replace(input, "")
      }
      else if (element.textContent.length > 2) {
        element.textContent = ""
      }
  })

  element.addEventListener('focus', () => {
    element.textContent = ""
  })
}

digitsLimiter(elements.minutes)
digitsLimiter(elements.seconds)

export function stopCountdown() {
  initial.running = false
  clearTimeout(initial.timeoutID)
  initial.timeoutID = null
}

export function countdownIncrease() {
  let currentMinutes = elements.minutes.textContent
  let currentSeconds = elements.seconds.textContent

  currentMinutes = Number(elements.minutes.textContent) + 5

  if (currentMinutes > 60) {
    currentMinutes = 60
  }
  stopCountdown()
  clock.updateTimer(currentMinutes, currentSeconds)
  startCountdown(currentMinutes, currentSeconds)
}

export function countdownDecrease() {
  let currentMinutes = elements.minutes.textContent
  let currentSeconds = elements.seconds.textContent

  currentMinutes = Number(elements.minutes.textContent) - 5
  if (currentMinutes < 0) {
    currentMinutes = 0
  }
  clock.updateTimer(Number(currentMinutes), Number(currentSeconds))
}
