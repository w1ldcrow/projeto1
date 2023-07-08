var app = document.getElementById('typew');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('Hyago Bitencourt')
  .pauseFor(300)
  .deleteChars(16)
  .typeString('Hyago Bitencourt')
  .typeString('<strong> baphomé</strong>')
  .pauseFor(1000)
  .start();

  