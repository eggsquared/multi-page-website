document.getElementById("btn").addEventListener("click", btnclicked);
let output = document.getElementById("output");
let percent = document.getElementById("percent");
let ans1 = document.getElementById("ans1");
let ans2 = document.getElementById("ans2");
let ans3 = document.getElementById("ans3");
let ans4 = document.getElementById("ans4");
function btnclicked() {
  let ca = 0;
  console.log(1);
  let q1 = document.getElementById("q1").value.toLowerCase();;
  let q2 = document.getElementById("q2").value.toLowerCase();;
  let q3 = document.getElementById("q3").value.toLowerCase();;
  let q4 = document.getElementById("q4").value.toLowerCase();;
  if (q1 === "no") {
    ans1.innerHTML = `<p class="green">correct</p>`;
    ca++;
  } else if (q1 !== "no") {
    ans1.innerHTML = `<p class="red">drinking and driving is illegal and heavely discouraged</p>`;
  }
  if (
    q2 === "the person who has been there the longest" ||
    q2 === "the first one there"
  ) {
    ca++;
    ans2.innerHTML = `<p class="green">correct</p>`;
  } else if (q2 !== "the person who has been there the longest" ||
  q2 !== "the first one there") {
    ans2.innerHTML = `<p class="red">the first person there or the person who has been at the stop sign the longest should have right of way</p>`;
  }
  if (q3 === "15") {
    ca++;
    ans3.innerHTML = `<p class="green">correct</p>`;
  }  else if (q3 !== "15") {
    ans3.innerHTML = `<p class="red">15 demerit points will get your liscence suspended</p>`;
  }
  if (q4 === "0.05") {
    ca++;
    ans4.innerHTML = `<p class="green">correct</p>`;
  } else if (q4 !== "0.05") {
    ans4.innerHTML = `<p class="red">anything over 0,05 is illegal</p>`;
  }
  if (ca === 1) {
    percent.innerHTML = `<p>25%</p>`;
  } else if (ca === 2) {
    percent.innerHTML = `<p>50%</p>`;
  } else if (ca === 3) {
    percent.innerHTML = `<p>75%</p>`;
  } else if (ca === 4) {
    percent.innerHTML = `<p>100%</p>`;
  } else {
    percent.innerHTML = `<p>0%</p>`;
  }
  console.log(ca);
  output.innerHTML = ca;
}
