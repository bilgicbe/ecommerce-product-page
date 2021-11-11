const th1 = document.getElementById("th1");
const th2 = document.getElementById("th2");
const th3 = document.getElementById("th3");
const th4 = document.getElementById("th4");
const displayedImage = document.querySelector(".displayed-image")
const plus = document.querySelector(".plus")
const minus = document.querySelector(".minus")
const amount = document.getElementById("amount")
const mainCarousel = document.querySelector(".backdrop")
const closeButton = document.querySelector(".close-container svg")
const addToCart = document.querySelector(".cart-button")
const cartItem = document.querySelector(".cart-item")
const emptyCart = document.querySelector(".empty-cart")
const deleteCart = document.getElementById("delete")
const cartBadge = document.querySelector(".cart-badge")
const prevIcon = document.querySelector(".myCarousel-inner .carousel-control-prev-icon")
const nextIcon = document.querySelector(".myCarousel-inner .carousel-control-next-icon")
const myCarouselImage = document.querySelector(".myCarousel-item img")
const thc1 = document.getElementById("thc1")
const thc2 = document.getElementById("thc2")
const thc3 = document.getElementById("thc3")
const thc4 = document.getElementById("thc4")

document.addEventListener("click", e => {
    const isDropdownButton = e.target.matches("[data-dropdown-button]")
    if (!isDropdownButton && e.target.closest("[data-dropdown]") != null) return

    let currentDropdown
    if (isDropdownButton) {
        currentDropdown = e.target.closest("[data-dropdown]")
        currentDropdown.classList.toggle('active')
    }

    document.querySelectorAll("[data-dropdown].active").forEach(dropdown => {
        if (dropdown == currentDropdown) return
        dropdown.classList.remove('active')
    }) 
})

function handleArtik(element) {
    document.querySelectorAll('.main-carousel .thumbnail').forEach((element)=> {
        element.classList.remove('activated2')
        
    })
    element.parentElement.classList.add('activated2')
}

function handlethc1() {
    handleArtik(thc1)
    myCarouselImage.src = "images/image-product-1.jpg"
}

function handlethc2() {
    handleArtik(thc2)
    myCarouselImage.src = "images/image-product-2.jpg"
}

function handlethc3() {
    handleArtik(thc3)
    myCarouselImage.src = "images/image-product-3.jpg"
}

function handlethc4() {
    handleArtik(thc4)
    myCarouselImage.src = "images/image-product-4.jpg"
}

function handleNext() {
    if (thc1.parentElement == document.querySelector(".activated2")) {
        handlethc2()
    } else if (thc2.parentElement == document.querySelector(".activated2")) {
        handlethc3()
    } else if (thc3.parentElement == document.querySelector(".activated2")) {
        handlethc4()
    } else if (thc4.parentElement == document.querySelector(".activated2")) {
        handlethc1()
    }
}

function handlePrev() {
    if (thc1.parentElement == document.querySelector(".activated2")) {
        handlethc4()
    } else if (thc2.parentElement == document.querySelector(".activated2")) {
        handlethc1()
    } else if (thc3.parentElement == document.querySelector(".activated2")) {
        handlethc2()
    } else if (thc4.parentElement == document.querySelector(".activated2")) {
        handlethc3()
    }
}

function handleDelete() {
    let amount = document.querySelector(".calc-amount")
    amount.innerText = 0
    cartItem.style.display = "none"
    emptyCart.style.display = "flex"
    cartBadge.innerHTML = ""
}

function handleAddToCart() {
    let amount = document.getElementById("amount").innerText
    document.querySelector(".calc-amount").innerHTML = String(Number(document.querySelector(".calc-amount").innerText) + Number(amount))
    let calcAmount = Number(document.querySelector(".calc-amount").innerText)
    if (calcAmount === 0) {
        cartItem.style.display = "none"
        emptyCart.style.display = "flex"
    } else {
        document.querySelector(".calc-price").innerText = '$'+String(Number(document.querySelector(".calc-amount").innerText)*125)+'.00'
        emptyCart.style.display = "none"
        cartItem.style.display = "block"
        cartBadge.innerHTML = document.querySelector(".calc-amount").innerText
    }
    
}

function hideCarousel() {
    mainCarousel.style.opacity = "0"
    mainCarousel.style.pointerEvents = "none"
}

function displayCarousel() {
    mainCarousel.style.opacity = "1"
    mainCarousel.style.pointerEvents = "all"
}

function increase() {
    amount.innerHTML = Number(amount.innerHTML) + 1
}

function decrease() {
    if (amount.innerHTML != 0) {
        amount.innerHTML = Number(amount.innerHTML) - 1
    }
}

function handleClick1() {
    th1.classList.add("activated")
    th2.classList.remove("activated")
    th3.classList.remove("activated")
    th4.classList.remove("activated")
    displayedImage.src = "images/image-product-1.jpg"
    handlethc1
}

function handleClick2() {
    th1.classList.remove("activated")
    th2.classList.add("activated")
    th3.classList.remove("activated")
    th4.classList.remove("activated")
    displayedImage.src = "images/image-product-2.jpg"
    handlethc2
}

function handleClick3() {
    th1.classList.remove("activated")
    th2.classList.remove("activated")
    th3.classList.add("activated")
    th4.classList.remove("activated")
    displayedImage.src = "images/image-product-3.jpg"
    handlethc3
}

function handleClick4() {
    th1.classList.remove("activated")
    th2.classList.remove("activated")
    th3.classList.remove("activated")
    th4.classList.add("activated")
    displayedImage.src = "images/image-product-4.jpg"
    handlethc4
}

prevIcon.addEventListener("click", handlePrev)
nextIcon.addEventListener("click", handleNext)
deleteCart.addEventListener("click", handleDelete)
addToCart.addEventListener("click", handleAddToCart)
closeButton.addEventListener("click", hideCarousel)
displayedImage.addEventListener("click", displayCarousel)
plus.addEventListener("click", increase)
minus.addEventListener("click", decrease)
th1.addEventListener("click", handleClick1)
th2.addEventListener("click", handleClick2)
th3.addEventListener("click", handleClick3)
th4.addEventListener("click", handleClick4)
thc1.addEventListener("click", handlethc1)
thc2.addEventListener("click", handlethc2)
thc3.addEventListener("click", handlethc3)
thc4.addEventListener("click", handlethc4)


