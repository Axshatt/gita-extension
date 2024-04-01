let currpg = 1;

const prev = document.getElementById("previous");
const nex = document.getElementById("next");

prev.style.visibility = "hiddden";
nex.style.visibility = "hidden";


if(currpg == 1){
  prev.style.visibility = "hidden";
}
if(currpg==18){
  nex.style.visibility = "hidden";
}


function previous() {
  if (currpg > 1) {

    currpg--;


  }

 
  getData();
}

function next() {
  if (currpg < 18) {
    
    currpg++;
   
  }

  getData();
}



async function getData() {
  const response = await fetch(`https://bhagavadgitaapi.in/chapter/${currpg}/`);
  console.log(response);
  const data = await response.json();
  const summarytxt = data.summary.en;
  const chNo = data.chapter_number;
  

  const summary = document.getElementById("summary");

  summary.innerHTML = summarytxt;

  const ch = document.getElementById("ch");

  ch.innerHTML = "Chapter " + chNo;



  

  document.getElementById("loader").style.display="none";
  prev.style.visibility = "visible";
  nex.style.visibility = "visible";
  prev.addEventListener("click", previous)
  nex.addEventListener("click", next)
}

getData();
