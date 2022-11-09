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

