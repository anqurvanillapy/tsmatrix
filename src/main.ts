function sayhi (name: string) {
  let person: string = name ? name : 'stranger'
  return 'Hello, ' + person + '!'
}

var user = 'anqur'

document.body.innerHTML = sayhi(user)
