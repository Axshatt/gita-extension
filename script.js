let currpg = 1;

document.getElementById("previous").addEventListener("click", previous);
document.getElementById("next").addEventListener("click", next);



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
}

getData();
