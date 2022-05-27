export default function Controls({
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonClear,
  buttonDim,
  page,
  buttonPlay,
  buttonPause,
  buttonStop
}) {
  function forest() {
    buttonForest.classList.add('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.remove('show')
  }

  function market() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.add('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.remove('show')
  }

  function rain() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.add('show')
    buttonFire.classList.remove('show')
  }

  function fire() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.add('show')
  }

  function stop() {
    buttonForest.classList.remove('show')
    buttonMarket.classList.remove('show')
    buttonRain.classList.remove('show')
    buttonFire.classList.remove('show')
  }

  function darkMode() {
    page.classList.add('dark')
    buttonClear.classList.add('hide')
    buttonDim.classList.remove('hide')
  }
  function clearMode() {
    page.classList.remove('dark')
    buttonClear.classList.remove('hide')
    buttonDim.classList.add('hide')
  }

  function play() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
  }

  function pause() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }
  function stop() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
  }

  return {
    forest,
    market,
    rain,
    fire,
    stop,
    darkMode,
    clearMode,
    play,
    pause,
    stop
  }
}
