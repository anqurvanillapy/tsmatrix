const c = document.getElementById('c') as HTMLCanvasElement
const ctx = c.getContext('2d')

// Full screen canvas
c.width = window.innerWidth
c.height = window.innerHeight
