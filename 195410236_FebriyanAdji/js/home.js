function renderFoods() {
    var foodsElement = document.getElementById("foods");
    var foods = ""
    data['foods'].forEach(element => {
        foods += '<div class="food"><div class="thumb"><img src="' + element["images"][0] + '" /><div class="description">' + element["description"] + '</div></div><div class="title"><a href="food.html#'+element["slug"]+'">' + element["name"] + '</a></div><div class="body">';
        foods += '<span class="price">Rp. ' + element["price"] + '</span><span class="rate">';
        for (let i = 1; i < element['rate']; i++)
            foods += '<img src="icons/star.png">'
        foods += '</span></div></div>';
    });
    foodsElement.innerHTML = foods
}

function renderSlider() {
    var sliderElement = document.getElementById("slider")
    slider = '<div class="slide"><img src="' + data["foods"][data['foods'].length - 1]["images"][0] + '"></div>'
    let centerSliderId = Math.floor(Math.random() * (data['foods'].length - 2))
    slider += '<div class="slide"><img src="' + data["foods"][centerSliderId]["images"][0] + '"><span class="title">' + data["foods"][centerSliderId]["name"] + '</span></div>'
    slider += '<div class="slide"><img src="' + data["foods"][data['foods'].length - 2]["images"][0] + '"></div>'
    sliderElement.innerHTML = slider
}
renderFoods();
renderSlider();
setInterval(function () {
    renderSlider();
}, 2000)

