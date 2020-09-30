function reload() {
    let slug = window.location.hash.substr(1)
    // document.getElementById("url").innerHTML = slug
    let found = data['foods'].find(el => el['slug'] == slug)
    console.log(found)
    if (found != undefined) {
        document.getElementById("food_title").innerHTML  = found.name
        document.title = found.name.toUpperCase()
        document.getElementById("food_image").src = found.images[0]
        document.getElementById("food_description").innerHTML = found.description
    } else {
        alert('Tidak dapat menemukan kuliner dengan nama ' + slug)
        window.location = 'index.html'
    }
}
reload()
window.addEventListener("hashchange", function () {
    reload()
})
