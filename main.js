let imagesCarrousel = ['./assets/1.jpg', './assets/2.jpg', './assets/3.jpg', './assets/4.jpg', './assets/5.jpg']
const carrouselContainer = document.getElementsByClassName('container')[0]



class Carrousel {

    container;
    itemsContainer;
    images = [];
    spanIndex;
    imgIndex = 1;

    autoplay;

    slideDuration = 1000
    slideing = false

    constructor(options) {
        this.container = document.getElementsByClassName("carrousel__container")[0]
        this.itemsContainer = document.getElementsByClassName("carrousel__items")[0]
        //get imgs from carrousel items and remove #text's childs
        document.querySelectorAll(".carrousel__item").forEach(item => {
            item.childNodes.forEach(child => child.nodeName === "IMG" ? this.images.push(child) : false )
        })
        this.setup()
    }

    setup(){

        //insert all images in carrouselContainer
        for (let index = 0; index < this.images.length; index++) {
            const image = this.images[index];
            image.classList.add('carrousel__itemImg')  /* img */
        }

        // create span index image counter
        this.spanIndex = document.createElement('span')
        this.spanIndex.classList.add('container__number') //imgIndex
        this.updateIndex()
        this.container.appendChild(this.spanIndex)

        //create next prev arrows
        const arrowNext = document.createElement("span")
        arrowNext.id = "carrousel_next"
        arrowNext.textContent = "=>"
        this.container.appendChild(arrowNext)

        const arrowPrev = document.createElement("span")
        arrowPrev.id = "carrousel_prev"
        arrowPrev.textContent = "<="
        this.container.appendChild(arrowPrev)

        arrowNext.addEventListener("click", ()=>this.next())
        arrowPrev.addEventListener("click", ()=>this.prev())

    }

    next() {
        if(this.slideing) return
        this.slideing = true
        setTimeout(() => {
            this.slideing = false
        }, this.slideDuration);

        if (this.imgIndex == this.images.length) {
            this.itemsContainer.style.transform= "translateX(0px)"
            this.imgIndex = 1
            this.updateIndex()
            return
        }

        this.itemsContainer.style.transition = `transform ${this.slideDuration}ms`
        this.itemsContainer.style.transform = `translateX(-${this.container.clientWidth * this.imgIndex}px)`
        this.imgIndex++
        this.updateIndex()
    }

    prev() {
        if(this.slideing) return
        this.slideing = true
        setTimeout(() => {
            this.slideing = false
        }, this.slideDuration);


        if (this.imgIndex == 1) {
            this.itemsContainer.style.transition = `transform ${this.slideDuration}ms`
            this.itemsContainer.style.transform = `translateX(-${this.container.clientWidth * (this.images.length-1)}px)`
            this.imgIndex = this.images.length
            this.updateIndex()
            return
        }

        this.itemsContainer.style.transition = `transform ${this.slideDuration}ms`
        console.log(this.imgIndex)
        this.itemsContainer.style.transform = `translateX(-${this.container.clientWidth * (this.imgIndex-2)}px)`
        this.imgIndex--
        this.updateIndex()
    }

    updateIndex(){
        this.spanIndex.textContent = `${this.imgIndex} / ${this.images.length}`
    }

    autoPlay(){

    }
}

const carrousel = new Carrousel(carrouselContainer, imagesCarrousel)

