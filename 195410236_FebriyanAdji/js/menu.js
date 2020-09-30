menusElement = document.getElementById("menus");
var menus = ""
data["menus"].forEach(element => {
    menus += '<a href="'+element["link"]+'">'+element["title"]+'</a>';
});
menusElement.innerHTML = menus