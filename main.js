let btn = document.querySelector(".btn");
let inp = document.querySelector(".inp");
let boxs = document.querySelectorAll(".box");
let drag =null;
btn.onclick = function(){
    if (inp.value !=''){
      boxs[0].innerHTML += `
      <p class="item" draggable="true">${inp.value}</p>
      
      `
      inp.value ='';
    }
    dragitem()
}
function dragitem(){
  let items = document.querySelectorAll(".item");
  items.forEach(
    item=>{
      item.addEventListener("dragstart",function(){
        drag = item
        item.style.opacity=.5;
      })
      item.addEventListener("dragend",function(){
      drag=null;
      item.style.opacity=1;
      })
      boxs.forEach(
        box=>{
          box.addEventListener("dragover",function(s){
            s.preventDefault();
            this.style.background="green";
          });
          box.addEventListener("dragleave",function(){
            this.style.background="white";
          
          });

          box.addEventListener("drop",function(){
            this.append(drag);
            this.style.background="white";
          })

        }
      )
    }
  )
}
