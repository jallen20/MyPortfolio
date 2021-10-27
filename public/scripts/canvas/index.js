
const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

const colors = ['#2185C5', '#7ECEFD', '#FFF6E5', '#FF7F66'];

// Event Listeners
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX
    mouse.y = event.clientY
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Objects
function Dot(x, y, radius, color, animationRadius, velocity) {
    this.x = x
    this.y = y
    this.radius = radius
    this.color = color;
    this.radians = 0;
    this.velocity = velocity;
    this.animationRadius = animationRadius;
    this.hitMax = true;
    this.hitMin = false;

    this.draw = () => {
        this.radians += this.velocity;
        this.x = (x + Math.cos(this.radians) * this.animationRadius);
        this.y = (y + Math.sin(this.radians) * this.animationRadius);
        c.beginPath()
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
        c.fillStyle = this.color
        c.fill()
        c.closePath()
    }

    this.update = () => {
        this.draw()
    }
}

// Implementation
let dots;
function init() {
    dots = []

    for (let i = 1; i < 10; i++) {
        dots.push(new Dot(innerWidth / 2, innerHeight / 2, 5, 'red', (i  * .25) * 100,  i* .05));
    }
}

// Animation Loop
function animate() {
    requestAnimationFrame(animate)
    c.clearRect(0, 0, canvas.width, canvas.height)

    dots.forEach(dot => {
     dot.update()
    })
}

init()
animate()