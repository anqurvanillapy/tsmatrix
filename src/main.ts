const c = document.getElementById('c') as HTMLCanvasElement
let ctx = c.getContext('2d') as CanvasRenderingContext2D

// Full screen canvas.
c.width = window.innerWidth
c.height = window.innerHeight

const fontSize = 16
let columns = Math.floor(c.width / fontSize)
let rows = Math.floor(c.height / fontSize)
let drops: number[] = []
let prev: string[] = [] // previous head symbol

// Random raindrop spawning.
for (let x = 0; x < columns; ++x) {
  drops[x] = Math.floor(Math.random() * rows)
}

let getSymbol = (): string => {
  // Character 33~126 in ASCII are printable.
  return String.fromCharCode(Math.floor(Math.random() * 94) + 33)
}

let draw = () => {
  // .05 opacity for fading out.
  ctx.fillStyle = 'rgba(0, 0, 0, .05)'
  ctx.fillRect(0, 0, c.width, c.height)
  ctx.font = fontSize + 'px monospace'

  for (let i = 0; i < drops.length; ++i) {
    // Get a green symbol and a white symbol (as head).
    let s = prev[i] || getSymbol()
    let hs = getSymbol()

    ctx.fillStyle = '#0f0'  // green text
    ctx.fillText(s, i * fontSize, drops[i] * fontSize)
    ctx.fillStyle = '#fff'  // white head
    ctx.fillText(hs, i * fontSize, (drops[i] + 1) * fontSize)
    prev[i] = hs

    // Send a drop back to the top after it has crossed the screen,
    // with a random delay.
    if (drops[i] > rows && Math.random() > .975) drops[i] = 0
    else ++drops[i]
  }
}

setInterval(draw, 33)
