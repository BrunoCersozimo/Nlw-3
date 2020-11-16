const options = {
    dragging: false,
    touchZoom: false,
    doubleClickZoom: false,
    scrollWheelZooom: false,
    zoomControl: false
}

// create map
const map = L.map('mapid', options).setView([-22.6823853,-44.325189], 15)

// create and add tileLayer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map)

/* create icon */ 
const icon = L.icon({
    iconUrl: "/images/map-marker.svg",
    iconSize: [58, 68],
    iconAnchor: [29, 68],
    popupAnchor: [170,2]
})


// create and add marker
L. 
marker([-22.6823853,-44.325189], { icon })
.addTo(map)

//image gallery

function selectImage(event){
    const button = event.currentTarget

    //remover todas as classes
    const buttons = document.querySelectorAll(".images button")
    // dois exemplos que fazem a mesma ação
    buttons.forEach((button) => {
        button.classList.remove("active")
    })

    /*function removeActiveClass(button){
        button.classList.remove("active")
    }*/
    // selecionar a image clicada
    const image = button.children[0]
    const imageContainer = document.querySelector(".orphanage-details > img") 



    // atualizar o container de imageclicada

    imageContainer.src = image.src

    // adicionar a classe .active
    button.classList.add('active')
}