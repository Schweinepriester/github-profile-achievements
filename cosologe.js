console.log("test")
console.log("abc")

let particles = [];
let microparticles = [];

const c1 = createCanvas({
  width: $(window).width(),
  height: $(window).height(),
});

const tela = c1.canvas;
const canvas = c1.context;

// $("body").append(tela);
$("body").append(c1.canvas);

class Particle1 {
  constructor(canvas) {
    this.random = Math.random();
    this.random1 = Math.random();
    this.random2 = Math.random();
    this.progress = 0;
    this.canvas = canvas;
    this.life = 1000 + Math.random() * 3000;

    this.x =
      $(window).width() / 2 + (Math.random() * 20 - Math.random() * 20);
    this.y = $(window).height();
    this.s = 2 + Math.random();
    this.w = $(window).width();
    this.h = $(window).height();
    this.direction = this.random > 0.5 ? -1 : 1;
    this.radius = 1 + 3 * this.random;
    this.color = "#ff417d";

    this.ID = setInterval(
      function() {
        microparticles.push(
          new microParticle(c1.context, {
            x: this.x,
            y: this.y,
          })
        );
      }.bind(this),
      this.random * 20
    );

    setTimeout(
      function() {
        clearInterval(this.ID);
      }.bind(this),
      this.life
    );
  }

  render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    // this.canvas.lineWidth = 2;
    this.canvas.shadowOffsetX = 0;
    this.canvas.shadowOffsetY = 0;
    // this.canvas.shadowBlur = 6;
    this.canvas.shadowColor = "#000000";
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move() {
    this.x -=
      this.direction *
      Math.sin(this.progress / (this.random1 * 430)) *
      this.s;
    this.y -= Math.cos(this.progress / this.h) * this.s;

    if (this.x < 0 || this.x > this.w - this.radius) {
      clearInterval(this.ID);
      return false;
    }

    if (this.y < 0) {
      clearInterval(this.ID);
      return false;
    }
    this.render();
    this.progress++;
    return true;
  }
}

class microParticle {
  constructor(canvas, options) {
    this.random = Math.random();
    this.random1 = Math.random();
    this.random2 = Math.random();
    this.progress = 0;
    this.canvas = canvas;

    this.x = options.x;
    this.y = options.y;
    this.s = 2 + Math.random() * 3;
    this.w = $(window).width();
    this.h = $(window).height();
    this.radius = 1 + this.random * 0.5;
    this.color = "#4EFCFE"; //this.random > .5 ? "#a9722c" : "#FFFED7"
  }

  render() {
    this.canvas.beginPath();
    this.canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
    this.canvas.lineWidth = 2;
    this.canvas.fillStyle = this.color;
    this.canvas.fill();
    this.canvas.closePath();
  }

  move() {
    this.x -=
      Math.sin(this.progress / (100 / (this.random1 - this.random2 * 10))) *
      this.s;
    this.y += Math.cos(this.progress / this.h) * this.s;

    if (this.x < 0 || this.x > this.w - this.radius) {
      return false;
    }

    if (this.y > this.h) {
      return false;
    }
    this.render();
    this.progress++;
    return true;
  }
}

var random_life = 1000;

setInterval(
  function() {
    particles.push(new Particle1(canvas));
    random_life = 2000 * Math.random();
  }.bind(this),
  random_life
);

function clear() {
  let grd = canvas.createRadialGradient(
    tela.width / 2,
    tela.height / 2,
    0,
    tela.width / 2,
    tela.height / 2,
    tela.width
  );
  grd.addColorStop(0, "rgba(20,20,20,1)");
  grd.addColorStop(1, "rgba(0,0,0,0)");
  // Fill with gradient
  canvas.globalAlpha = 0.16;
  canvas.fillStyle = grd;
  canvas.fillRect(0, 0, tela.width, tela.height);
}

function blur(ctx, canvas, amt) {
  // ctx.filter = `blur(${amt}px)`
  // ctx.drawImage(canvas, 0, 0)
  // ctx.filter = 'none'
}



function createCanvas(properties) {
  let canvas = document.createElement("canvas");
  canvas.width = properties.width;
  //   canvas.style.zIndex = 999;
  canvas.height = properties.height;
  let context = canvas.getContext("2d");
  return {
    canvas: canvas,
    context: context,
  };
}

update();
