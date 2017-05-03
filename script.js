document.addEventListener('DOMContentLoaded', function() {
       document.getElementById("clicker").addEventListener("click", changeRandom);
    
           document.getElementById("button").addEventListener("click", back);

});
var lastRandom = 1;
function changeRandom() {
  var random = Math.floor(Math.random() * 20) + 1;
  var faces = [
    "(─‿‿─)", 
    "¯\\_(ツ)_/¯", 
    "(╯°□°）╯",
    "(◕‿◕)",
    "ಠ_ಠ",
    "(• ε •)",
    "ಠ╭╮ಠ",
    "◉_◉",
    "⚆ _ ⚆",
    "ʕ•ᴥ•ʔ",
    "◕‿↼",
    "\(^Д^)/",
    "(·.·)",
    "(='X'=)",
    "( ͡° ͜ʖ ͡°)",
    "(✿◠‿◠)",
    "●ᴥ●",
    "⊂◉‿◉つ",
    "(¬_¬)",
    "@(・●・)@"
  ];
  while (lastRandom === random)
    {
      random = Math.floor(Math.random() * 20) + 1;
    }
  lastRandom = random;
  var text = faces[random-1];
  document.getElementById('text').innerHTML = text;
}
function back() {
   document.getElementById("text").innerHTML = "Click Me"; 
}