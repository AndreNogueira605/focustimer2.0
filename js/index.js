import {
  buttonPlay,
  buttonPause,
  buttonStop,
  buttonMore,
  buttonLess,
  minutesDisplay,
  secondsDisplay,
  buttonClear,
  buttonDim,
  page,
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  volForest,
  volRain,
  volMarket,
  volFire
} from './elements.js'
import Controls from './controls.js'
import Timer from './timer.js'
import Sound from './sounds.js'
import Events from './events.js'

const controls = Controls({
  buttonForest,
  buttonRain,
  buttonMarket,
  buttonFire,
  buttonClear,
  buttonDim,
  page,
  volForest,
  volRain,
  volMarket,
  volFire,
  buttonPlay,
  buttonPause,
  buttonStop
})
const sound = Sound()

const timer = Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound
})

Events({ controls, sound, timer })
