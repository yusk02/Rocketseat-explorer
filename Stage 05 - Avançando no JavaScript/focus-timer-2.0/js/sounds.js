import * as elements from './elements.js'

const forest = new Audio('./sounds/Floresta.wav')
forest.loop = true
const rain = new Audio('./sounds/Chuva.wav')
rain.loop = true
const cafe = new Audio('./sounds/Cafeteria.wav')
cafe.loop = true
const fireplace = new Audio('./sounds/Lareira.wav')
fireplace.loop = true
export const ringtone = new Audio('./sounds/kitchen-timer.mp3')
ringtone.loop = true

export function playForest() {
  elements.forestButton.classList.toggle('active')

  if (elements.forestButton.classList == 'active') {
    pauseRain()
    pauseCafe()
    pauseFireplace()
    elements.rainButton.classList.remove('active')
    elements.cafeButton.classList.remove('active')
    elements.fireplaceButton.classList.remove('active')
    forest.play()
  }
  
  elements.forestButton.addEventListener('click', pauseForest)

}
function pauseForest() {
  if (elements.forestButton.classList !== 'active') {
    forest.pause()
    elements.forestButton.removeEventListener('click', pauseForest)
  }
}

export function playRain() {
  elements.rainButton.classList.toggle('active')

  if (elements.rainButton.classList == 'active') {
    pauseForest()
    pauseCafe()
    pauseFireplace()
    elements.forestButton.classList.remove('active')
    elements.cafeButton.classList.remove('active')
    elements.fireplaceButton.classList.remove('active')
    rain.play()
  }
  
  elements.rainButton.addEventListener('click', pauseRain)

}
function pauseRain() {
  if (elements.rainButton.classList !== 'active') {
    rain.pause()
    elements.rainButton.removeEventListener('click', pauseRain)
  }
}

export function playCafe() {
  
  elements.cafeButton.classList.toggle('active')

  if (elements.cafeButton.classList == 'active') {
    pauseForest()
    pauseRain()
    pauseFireplace()
    elements.forestButton.classList.remove('active')
    elements.rainButton.classList.remove('active')
    elements.fireplaceButton.classList.remove('active')
    cafe.play()
  }
  
  elements.cafeButton.addEventListener('click', pauseCafe)

}
function pauseCafe() {
  if (elements.cafeButton.classList !== 'active') {
    cafe.pause()
    elements.cafeButton.removeEventListener('click', pauseCafe)
  }
}

export function playFireplace() { 

  elements.fireplaceButton.classList.toggle('active')

  if (elements.fireplaceButton.classList == 'active') {
    pauseForest()
    pauseRain()
    pauseCafe()
    elements.forestButton.classList.remove('active')
    elements.rainButton.classList.remove('active')
    elements.cafeButton.classList.remove('active')
    fireplace.play()
  }
  
  elements.fireplaceButton.addEventListener('click', pauseFireplace)

}
function pauseFireplace() {
  if (elements.fireplaceButton.classList !== 'active') {
    fireplace.pause()
    elements.fireplaceButton.removeEventListener('click', pauseFireplace)
  }
}