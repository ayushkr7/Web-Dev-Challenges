const colors = [
  '#16a085',
  '#27ae60',
  '#2c3e50',
  '#f39c12',
  '#e74c3c',
  '#9b59b6',
  '#FB6964',
  '#342224',
  '#472E32',
  '#BDBB99',
  '#77B1A9',
  '#73A857'
];

function randColorBg(){
  let r = Math.floor(Math.random() * 12);
  let x = document.getElementsByClassName("container")
  x[0].style.backgroundColor = colors[r];
}

document
   .querySelector("#txtid")
   .addEventListener("keyup", function countWord() {
       randColorBg();
     let res = [];
     let str = this.value.replace(/[\t\n\r\.\?\!]/gm, " ").split(" ");
     str.map((s) => {
       let trimStr = s.trim();
       if (trimStr.length > 0) {
         res.push(trimStr);
       }
     });
     document.querySelector("#count").innerText = res.length;
   });
