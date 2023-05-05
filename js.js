const project = [
    {
        id: 0,
        img: "https://contents.mediadecathlon.com/p1811219/k$6f1825f61117c52fa1794647df3857fe/sq/spor-ayakkabilar.jpg?format=auto&f=800x0",
        title: "Runing shoes &",
        price: 45,
    },
    {
        id: 1,
        img: "https://contents.mediadecathlon.com/p1811247/k$937a5c7297d1a926fef4438cde3b0aa0/sq/8558968.jpg?format=auto&f=800x0",
        title: "Runing shoes &",
        price: 30
    },
    {
        id: 2,
        img: "https://contents.mediadecathlon.com/p1811197/k$6bfbcc16aaf7b9bea8b50fe7f584f458/sq/8558959.jpg?format=auto&f=800x0",
        title: "Runing shoes &",
        price: 34
    },
    {
        id: 3,
        img: "https://www.keenshoesfactoryoutlet.com/images/large/keenshoesfactoryoutlet/KEEN%20Women%20s%20Terradora%20II%20Vent%20Shoe%20%20313_5_ZOOM.jpg",
        title: "Runing shoes &",
        price: 39
    },
    {
        id: 4,
        img: "https://cdn.sportsshoes.com/product/U/UND5768/UND5768_1000_1.jpg",
        title: "Runing shoes &",
        price: 78
    },
    {
        id: 5,
        img: "https://th.bing.com/th/id/OIP.mJsJQcauRQMMWcXN0jHuKQHaHa?pid=ImgDet&w=1000&h=1000&rs=1",
        title: "Runing shoes &",
        price: 69
    },
    {
        id: 6,
        img: "https://th.bing.com/th/id/OIP.SI1j6hn5C-1z5vcJHOLlFgHaHa?pid=ImgDet&rs=1",
        title: "Runing shoes &",
        price: 74
    },
    {
        id: 7,
        img: "https://www.prodirectrunning.com/ProductImages/Main/226677_Main_Thumb_0716876.jpg",
        title: "Runing shoes &",
        price: 70
    }


]

const container = [... new Set(project.map((item) => { return item }))]
let i = 0
document.querySelector(".left").innerHTML = container.map((item) => {
    let { img, title, price } = item
    return (
        `
            <div class="box">
            <div class="images">
            <img src=${img} alt="">
            </div>
            <div class="bottom">
            <p>${title}</p>
            <span>$ ${price}.00 </span> ` +
        "<button onclick ='addtodocart(" + (i++) + ")'> Add To Cart </button>" +
        `</div>
        </div>
            `

    )
}).join("")

document.addEventListener("DOMContentLoaded" ,function (e) {
    let shop = localStorageShop()
    shop.forEach( function(shops){
        disCard(shops)
    });
})

function addtodocart(a) {
    card.push({ ...container[a] })
    disCard()
}
let card = []

function disCard() {
    let j = 0 , total = 0
    document.querySelector(".countIn").innerHTML = card.length;
    if (card.length == 0) {
        document.querySelector(".card1").innerHTML = "Your is empty bag"
        document.querySelector(".total").innerHTML = "$" + 0 + ".00"
    }
    else {
        document.querySelector(".card1").innerHTML = card.map((items) => {
            let { img, title, price } = items
            localStorageShopAdd(items)
            total = total + price
            document.querySelector(".total").innerHTML = "$" + total + ".00"
            return (
                `
    <div class="cardIt">
            <div class="image">
            <img src=${img} alt="">
            </div>
            <div class="top">
            <p>${title}</p>
            <span>$ ${price}.00 </span> ` +
                "<i class='fa-solid fa-trash'onclick ='deleteEl(" + (j++) + ")'></i>" +
                `</div>
        </div>
    `
            )
        }).join("")
    }
}

function deleteEl(a) {
    card.splice(a, 1)
    disCard()

}

function localStorageShop(){
    let shop
    if(localStorage.getItem(shop) === null){
shop = []
    }
    else{
        shop = JSON.parse(localStorage.getItem("shop"))
    }
    return shop
}

function localStorageShopAdd(shops){
let shop = localStorageShop()
shop.push(shops)
localStorage.setItem( "shop",JSON.stringify(shop))
}