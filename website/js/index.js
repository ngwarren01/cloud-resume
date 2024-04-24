const counter = document.querySelector(".counter-number");
async function updateCounter() {
    let response = await fetch("https://takvi5padyolcwnswefzbkrpxy0zbkdj.lambda-url.ap-southeast-1.on.aws/");
    let data = await response.json();
    counter.innerHTML = ` This page has ${data} Views!`;
}

updateCounter();