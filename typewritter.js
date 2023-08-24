var app = document.getElementById('typew');

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(2500)
  .typeString('xxx')
  .pauseFor(300)
  .deleteChars(16)
  .typeString('xxxx')
  .typeString('<strong> xxxx</strong>')
  .pauseFor(1000)
  .start();

  