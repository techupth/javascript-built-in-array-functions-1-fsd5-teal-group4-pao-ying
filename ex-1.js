let words = ["hello", "world"];

function getWordLengths(words) {
  // Start coding here
  // return words.map(function(wIndex){return wIndex.length})
  // return words.map((wIndex)=>{return wIndex.length})
  
  return words.map((wIndex)=>wIndex.length)
    
  }
  
  // Array.prototype.ying = function(arr){return this.map((wIndex)=>wIndex.length)}
  // return words.ying()


const result = getWordLengths(words);

console.log(result); // Output: [5, 5]
