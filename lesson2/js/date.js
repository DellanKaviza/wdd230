//declare variables and get date information
const d = new Date();
const year = d.getFullYear();


// using getElementById
document.querySelector("#year").textContent = year;
document.getElementById("lastupdated").textContent = `Last Updated: ${document.lastModified}`;


