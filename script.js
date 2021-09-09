const letterCounts = {};
const wordsCounts = {};

const button = document.getElementById("countButton");

button.addEventListener("click", function() {  
   // teu código vai aqui ... 
  
   let typedText = document.getElementById("textInput").value;
   typedText = typedText.toLowerCase(); 
   // Isto muda todas as letras para minúsculas
   typedText = typedText.replace(/[^a-z'\s]+/g, "");
   

   for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    // faça algo com cada letra 
    
    if (letterCounts[currentLetter] === undefined) {
        letterCounts[currentLetter] = 1; 
     } else { 
        letterCounts[currentLetter]++; 
     }

     
 }

 for (let letter in letterCounts) { 
    const span = document.createElement("span"); 
    const textContent = `"${letter}": ${letterCounts[letter]}, `;
    span.innerText = textContent; 
    const letters = document.getElementById("lettersDiv");
    letters.appendChild(span); 
 }


 let words = document.getElementById("textInput").value;
 typedText = typedText.toLowerCase(); 
 // Isto muda todas as letras para minúsculas
 typedText = typedText.replace(/[^a-z'\s]+/g, "");
 words = typedText.split(/\s/);
 

 for (let i = 0; i < words.length; i++) {
  currentLetter = words[i];
  // faça algo com cada letra 
  
  if (wordsCounts[currentLetter] === undefined) {
      wordsCounts[currentLetter] = 1; 
   } else { 
      wordsCounts[currentLetter]++; 
   }

   
}

for (let letter in wordsCounts) { 
  const span = document.createElement("span"); 
  const textContent = `"${letter}": ${wordsCounts[letter]}, `;
  span.innerText = textContent; 
  const letters = document.getElementById("wordsDiv");
  letters.appendChild(span); 
}


});
  
