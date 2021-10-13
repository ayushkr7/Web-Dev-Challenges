const colors = [
  '#16a085',
  '#27ae60',
  '#BB6CDB',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#EF1EA0',
  '#9560B9',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function randColorBg(){
  let r = Math.floor(Math.random() * 12);
  let x = document.getElementsByClassName("container")
  x[0].style.backgroundColor = colors[r];
  document.body.style.scrollbarTrackColor= colors[r];
}

function longest_string(str_ara) {
  let max = str_ara[0].length;
  str_ara.map(v => max = Math.max(max, v.length));
  let result = str_ara.filter(v => v.length == max);
  return result;
}
document.getElementById("count-left").innerHTML = 200;

document
   .querySelector("#txtid")
   .addEventListener("input", function countWord() {
       randColorBg();
     let res = [];
     let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
     str.map((s) => {
       let trimStr = s.trim();
       if (trimStr.length > 0) {
         res.push(trimStr);
       }
     })

     let y = longest_string(str);
     let z = this.value.length;
     
     document.getElementById("count-left").innerHTML = 200-z;
     document.getElementById("count-char").innerHTML = z;
     document.getElementById("long-word").innerHTML = y[0];
     document.querySelector("#count").innerText = res.length;
   });
