const btnHasard = document.getElementById("btnHasard");

const result = document.getElementById("result");
btnHasard.addEventListener("click",async () => {
    const res = await fetch("https://carambarandco-back.onrender.com/api/v1/blagues");
    const data  = await res.json();
    console.log(data);
    result.textContent = data.blagues;
})