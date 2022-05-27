export default function Timer({
  minutesDisplay,
  secondsDisplay,
  controls,
  sound
}) {
  let timerTimeout
  let minutes = Number(minutesDisplay.textContent)
  let seconds = Number(secondsDisplay.textContent)

  function updateDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, '0')
    secondsDisplay.textContent = String(seconds).padStart(2, '0')
  }

  function reset() {
    updateDisplay(minutes, seconds)
    clearTimeout(timerTimeout)
    sound.stop()
    controls.stop()
  }

  function timerMore() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    // minutesDisplay.textContent = minutes + 5
    updateDisplay(minutes + 5, seconds)
    if (minutes >= 60) {
      updateDisplay(minutes, seconds)
    }
  }
  function timerLess() {
    let minutes = Number(minutesDisplay.textContent)
    let seconds = Number(secondsDisplay.textContent)
    // minutesDisplay.textContent = minutes - 5
    updateDisplay(minutes - 5, seconds)

    if (minutes <= 5) {
      updateDisplay(minutes, seconds)
    }
  }

  function start() {
    timerTimeout = setTimeout(function () {
      let seconds = Number(secondsDisplay.textContent)
      let minutes = Number(minutesDisplay.textContent)
      let isFinished = minutes <= 0 && seconds <= 0

      updateDisplay(minutes, seconds)

      if (isFinished) {
        reset()
        return
      }
      if (seconds <= 0) {
        seconds = 2
        --minutes
      }

      updateDisplay(minutes, String(seconds - 1))

      start()
    }, 1000)
  }

  function hold() {
    clearTimeout(timerTimeout)
  }

  return { start, updateDisplay, timerMore, timerLess, reset, hold }
}
