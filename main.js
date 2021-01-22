let imagesCarrousel = ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg', './assets/5.jpg']
const carrouselContainer = document.getElementsByClassName('container')[0]

/* 
DELETE BLANK SPACES IN CONTAINER (Whitespace inside elements is considered as text, 
and text is considered as nodes, this could break carrousel) 
*/
if (carrouselContainer.lastChild) {
    carrouselContainer.textContent = '';
}



//INSERT ALL IMAGES IN CAROUSEL CONTAINER
for (let index = 0; index < imagesCarrousel.length; index++) {
    const image = imagesCarrousel[index];
    const img = document.createElement('img')
    img.classList.add('container__img')
    if (index !== 0) {
        img.classList.add('none')
        img.classList.add('visuallyhidden')
    }
    img.src = image
    carrouselContainer.appendChild(img)
}


let imgIndex = 0
const childNodesImagesContainer = carrouselContainer.childNodes

const spanIndex = document.createElement('span')
spanIndex.classList.add('container__number')
spanIndex.textContent = `${imgIndex+1} / ${imagesCarrousel.length}`
carrouselContainer.appendChild(spanIndex)


//CARROUSEL NEXT
document.getElementById('carrousel_next').addEventListener('click', (e) => {
    e.preventDefault()
    imgIndex++

    if (imgIndex == imagesCarrousel.length) {
        imgIndex = 0
    }

    for (let index = 0; index < childNodesImagesContainer.length; index++) {
        const img = childNodesImagesContainer[index];

        if(img.nodeName === "SPAN"){
            return
        }

        if (index == imgIndex) {
            if (img.classList.contains('none')) {
                img.classList.remove('none')
                setTimeout(function () {
                    img.classList.remove('visuallyhidden')
                }, 20)
            }else{
                img.classList.add('visuallyhidden')
            }
            continue
        }
        img.classList.add('visuallyhidden')
        img.classList.add('none')
    }

})
//CARROUSEL BACK
document.getElementById('carrousel_back').addEventListener('click', (e) => {
    e.preventDefault()
    imgIndex--

    if (imgIndex == -1) {
        imgIndex = imagesCarrousel.length-1 
    }


    for (let index = 0; index < childNodesImagesContainer.length; index++) {
        const img = childNodesImagesContainer[index];
    
        if(img.nodeName === "SPAN"){
            return
        }

        if (index == imgIndex) {
            if (img.classList.contains('none')) {
                img.classList.remove('none')
                setTimeout(function () {
                    img.classList.remove('visuallyhidden')
                }, 20)
            }else{
                img.classList.add('visuallyhidden')
            }
            continue
        }
        img.classList.add('visuallyhidden')
        img.classList.add('none')
    }

})


class Carrousel{
    constructor(){
        console.log('carrousel')
    }
}

new Carrousel()

