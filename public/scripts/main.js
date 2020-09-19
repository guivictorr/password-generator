
class PasswordOptions {
  rand(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
  }

  getUpperCase() {
    return String.fromCharCode(this.rand(65,91))
  }

  getLowerCase() {
    return String.fromCharCode(this.rand(97, 123))
  }

  getNumbers() {
    return String.fromCharCode(this.rand(48, 58))
  }

  getSymbols() {
    const symbols = '^!%#$&*_?'
    return symbols[this.rand(0, symbols.length)]
  }
}

class RandomPassword extends PasswordOptions {
  getPassword(letters, uppercase, lowercase, numbers, symbols){
    const passwordArray = []
    letters = Number(letters)

    for(let i = 0; i < letters; i++) {
     uppercase && passwordArray.push(this.getUpperCase())
     lowercase && passwordArray.push(this.getLowerCase())
     numbers && passwordArray.push(this.getNumbers())
     symbols && passwordArray.push(this.getSymbols())
    }

    return passwordArray.join('').slice(0, letters)
  }
}

const randomPassword = new RandomPassword()

const passwordDisplay = document.querySelector('.password-display')
const letters = document.querySelector('.letters')
const chkUpperCase = document.querySelector('.chk-uppercase')
const chkLowerCase = document.querySelector('.chk-lowercase')
const chkNumbers = document.querySelector('.chk-numbers')
const chkSymbols = document.querySelector('.chk-symbols')
const getPasswordForm = document.querySelector('form')

function renderPassword() {
  const senha = randomPassword.getPassword(
    letters.value,
    chkUpperCase.checked,
    chkLowerCase.checked,
    chkNumbers.checked,
    chkSymbols.checked,
  )

  return senha
}

passwordDisplay.innerHTML = renderPassword()

getPasswordForm.addEventListener('submit', event => {
  event.preventDefault()

  passwordDisplay.innerHTML = renderPassword()
})