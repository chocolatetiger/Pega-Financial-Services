// declarations
var files = ['case1.html','case2.html','case3.html','case4.html','case5.html'];
var page =0;
var request = new XMLHttpRequest();
const next_btn = document.querySelector("#next-button");
const prev_btn = document.querySelector("#previous-button");
const sflow = document.querySelectorAll("#arrowlayout li.active a");
const sflow_a = document.querySelectorAll("#arrowlayout li ");
console.log(sflow_a);
sflow[0].setAttribute("style","background:green;");
sflow_a[0].classList.add("change");
// event-listeners

next_btn.addEventListener("click",changeCase_next);
next_btn.addEventListener("click",changeColor_next);
next_btn.addEventListener("click",function(e){e.preventDefault();  });
prev_btn.addEventListener("click",changeCase_prev);
prev_btn.addEventListener("click",changeColor_prev);
prev_btn.addEventListener("click",function(e){e.preventDefault();  });

// functions

function changeCase_next(){
  let nextPage=0;
  if(page<5){
    nextPage=page+1;
    request.open('GET',files[nextPage],true);
    request.onreadystatechange=function(){
      if((request.readyState===4)&&(request.status===200)){
        const modify = document.querySelector(".case-replace");
        modify.innerHTML=request.responseText;
        page++;
      }
    }
    request.send();
  }
}

function changeCase_prev(){
  let prevPage=0;
  if(page>0){
    prevPage=page-1;
    request.open('GET',files[prevPage],true);
    request.onreadystatechange=function(){
      if((request.readyState===4)&&(request.status===200)){
        const modify = document.querySelector(".case-replace");
        modify.innerHTML=request.responseText;
        page--;
      }
    }
    request.send();
  }
}


function changeColor_next(){
  let nextPage=0;

if(page<4){
  nextPage = page+1;
  sflow[nextPage].setAttribute("style","background:green;");
  sflow[page].setAttribute("style","background:#367AB5;");
  sflow_a[nextPage].classList.add("change");
  sflow_a[page].classList.remove("change");
}
}

function changeColor_prev(){
  let prevPage=0;
  if(page>0){
    prevPage=page-1;
    sflow[prevPage].setAttribute("style","background:green;");
    sflow[page].setAttribute("style","background:#367AB5;");
    sflow_a[prevPage].classList.add("change");
    sflow_a[page].classList.remove("change");
  }
}
