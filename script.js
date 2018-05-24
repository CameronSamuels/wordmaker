document.addEventListener("DOMContentLoaded", function() {
  
  var animating;
  var combinations = {
    start: ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "qu", "r", "s", "t", "st", "v", "w", "y", "z"],
    vowel: ["a", "e", "i", "o", "u", "ee", "ue", "ie", "ae", "ei", "oo", "oi"],
    end: ["b", "c", "d", "g", "h", "l", "m", "n", "p", "r", "s", "t", "st", "v", "w", "z"]
  };
  
  document.addEventListener("click", function() {
    
    if (animating) return;
    document.body.style.animationName = "animation";
    
    setTimeout(function() {
      
      do {
        var first = combinations.start[Math.floor(Math.random() * combinations.start.length)];
        var second = combinations.vowel[Math.floor(Math.random() * combinations.vowel.length)];
        var third = combinations.end[Math.floor(Math.random() * combinations.end.length)];
        var fourth = combinations.vowel[Math.floor(Math.random() * combinations.vowel.length)];
        var fifth = combinations.end[Math.floor(Math.random() * combinations.end.length)];
        var word = first + second + third + fourth + fifth;
      } while (word.includes("uu"));
      
      document.querySelector("div").textContent = word;
      
      try {
        speechSynthesis.speak(new SpeechSynthesisUtterance(word))
      } catch (e) {}
      
      setTimeout(function() {
        document.body.style.animationName = "";
        animating = false;
      }, 375);
      
    }, 375);
    
    animating = true;
    
  });
  
  document.body.click();
  
});
