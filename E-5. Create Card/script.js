console.log("Dynamic Website Builder  Video - 73");

function createCard(title, cName, views, monthsOld, duration, thumbnail) {

    let viewStr
    if (views < 1000000) {
        viewStr = views / 1000 + "K"
    } else if(views >= 1000000) {
        viewStr = views / 1000000 + "M"
    } else {
        viewStr = views / 1000 + "K"
    }

    let html = `<div class="card">
    <div class="image">
        <img src="${thumbnail}">
        <div class="capsule">${duration}</div>
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} <span>&#8226;</span> ${viewStr} views <span>&#8226;</span> ${monthsOld} months ago</p>
    </div>
</div>`

document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + html;
}

createCard("MERN Stack Developer 50+ LPA | Sigma Web Dev - Tutorial #3", "CodeWithKaran", 7800000, 9, "30:20", "card.png");
