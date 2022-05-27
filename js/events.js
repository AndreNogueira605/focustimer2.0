import {
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  buttonClear,
  buttonDim,
  volForest,
  volRain,
  volMarket,
  volFire
} from './elements.js'

export default function ({ controls, sound, timer }) {
  buttonForest.addEventListener('click', function () {
    controls.forest()
    sound.forest()
  })
  buttonRain.addEventListener('click', function () {
    controls.rain()
    sound.rain()
  })
  buttonMarket.addEventListener('click', function () {
    controls.market()
    sound.market()
  })
  buttonFire.addEventListener('click', function () {
    controls.fire()
    sound.fire()
  })
  buttonPlay.addEventListener('click', function () {
    timer.start()
    controls.play()
  })
  buttonStop.addEventListener('click', function () {
    timer.reset()
    controls.stop()
  })
  buttonPause.addEventListener('click', function () {
    timer.hold()
    controls.pause()
  })
  buttonMore.addEventListener('click', function () {
    timer.timerMore()
  })
  buttonLess.addEventListener('click', function () {
    timer.timerLess()
  })
  buttonClear.addEventListener('click', function () {
    controls.darkMode()
  })
  buttonClear.addEventListener('click', function () {
    controls.darkMode()
  })
  buttonDim.addEventListener('click', function () {
    controls.clearMode()
  })

  volForest.addEventListener('input', () => {
    let volume = Number(volForest.value)
    sound.volumeForest(volume)
  })
  volRain.addEventListener('input', () => {
    let volume = Number(volRain.value)
    sound.volumeRain(volume)
  })
  volMarket.addEventListener('input', () => {
    let volume = Number(volMarket.value)
    sound.volumeMarket(volume)
  })
  volFire.addEventListener('input', () => {
    let volume = Number(volFire.value)
    sound.volumeFire(volume)
  })
}
