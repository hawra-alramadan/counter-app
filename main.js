let saveEl = document.getElementById("save-el");
let countEl = document.getElementById("count");
let count = 0;
function increment() {
  count += 1 ;
 countEl.textContent= count;
}

// save button 

function save() {
  let countStr = count + " - "
  saveEl.textContent += countStr ;
     countEl.textContent= 0;
  count = 0;
}


