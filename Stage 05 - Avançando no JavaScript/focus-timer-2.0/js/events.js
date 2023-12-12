import * as elements from './elements.js'
import * as sounds from './sounds.js'
import * as timer from './timer.js'


elements.playButton.addEventListener('click', timer.startCountdown)

elements.stopButton.addEventListener('click', timer.stopCountdown)

elements.plusButton.addEventListener('click', timer.countdownIncrease)

elements.minusButton.addEventListener('click', timer.countdownDecrease)

elements.forestButton.addEventListener('click', sounds.playForest)

elements.rainButton.addEventListener('click', sounds.playRain)

elements.cafeButton.addEventListener('click', sounds.playCafe)

elements.fireplaceButton.addEventListener('click', sounds.playFireplace)

elements.minutes.addEventListener('click', () => {
  timer.editTimer(elements.minutes)
  timer.digitsLimiter(elements.minutes)
})

elements.seconds.addEventListener('click', () => {
  timer.editTimer(elements.seconds)
  timer.digitsLimiter(elements.seconds)
})


let blinking;
export function blink() {
  sounds.ringtone.play()

  blinking = setInterval(() => {
    document.body.classList.toggle('blink')
  }, 500)

  setTimeout(stopBlink, 7450)
}

function stopBlink() {
  clearInterval(blinking)
  document.body.classList.remove('blink')
  sounds.ringtone.pause()
}