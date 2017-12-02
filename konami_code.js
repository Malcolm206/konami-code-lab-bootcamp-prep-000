const code = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65]

function init() {
  // Write your JavaScript code inside the init() function
  document.body.addEventListener('keydown', function oneKeyDownHandler(e) {
    let i = 0
    const key = parseInt(e.detail || e.location)
    if (key === code[i]) {
      i = i++
      if (i === code.length) {
        alert('Hurray!')
        i = 0
      }
    } else {
        i = 0
    }
  })

}
