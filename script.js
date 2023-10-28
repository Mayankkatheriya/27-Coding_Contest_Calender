let apiURL = "https://kontests.net/api/v1/all"
let cardContent = document.querySelector(".container");
function formatDate(inputDate){
    const options = {
        year: 'numeric',
        month: 'numeric',
        day:'numeric',
        hour:'numeric',
        minute:'numeric',
        second:'numeric',
        hour12:true
    }
    const formattedDate = new Intl.DateTimeFormat('en-us', options).format(new Date(inputDate));
    return formattedDate;
 }
function createCards(data) {
    data.forEach(ele => {
        let div = document.createElement("div")
        div.classList.add("card")
        div.innerHTML = `
        <h2>${ele.name}</h2>
        <p>${formatDate(ele.end_time)}</p>
        <p>${formatDate(ele.start_time)}</p>
        <a href="${ele.url}" target="_blank">Join Now</a>
        `
        cardContent.appendChild(div);
    });
}
async function fetchingData(){
    let data = await fetch(apiURL)
    .then(response => response.json())
    createCards(data);
}
fetchingData()