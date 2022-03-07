const btn = document.querySelectorAll("button")
// console.log(btn)
btn.forEach(function (button,index){
button.addEventListener("click",function (event){{
        let btnItem = event.target
        let product = btnItem.parentElement
        let productImg = product.querySelector("img").src
        let productName = product.querySelector("H1").innerHTML
        let productPrice = product.querySelector("span").innerHTML
    // console.log(productPrice,productName,productImg)
        addcart(productPrice,productName,productImg)
}})
})
function addcart(productPrice,productName,productImg) {
    let addtr = document.createElement("tr")
    let trcontent =  '<tr><td style="display: flex;align-items: center"><img style="width: 70px" src="'+ productImg +'" alt="">'+ productName +'</td><td><p><span>'+ productPrice +'</span><sup>đ</sup></p></td><td><input style="width: 30px;outline: none;" type="number" value="1" min="1"></td><td style="cursor: pointer;">Xóa</td></tr>'
    addtr.innerHTML = trcontent
    let cartTable = document.querySelector("tbody")
    // console.log(cartTable)
    cartTable.append(addtr)

    carttotal()

}

//-----------------totalprice-----------------

function carttotal() {
    let cartItem = document.querySelectorAll("tbody tr")
    let totalC = 0
    // console.log(cartItem.length)
    for (let i=0; i < cartItem.length; i++) {
        let inputValue = cartItem[i].querySelector("input").value
        // console.log(inputValue)
        let productPrice = cartItem[i].querySelector("span").innerText
        // console.log(productPrice)
         totalA = inputValue*productPrice*1000
        //  totalB = totalA.toLocaleString('de-DE')
        // console.log(totalB)
        totalC = totalC + totalA
        totalD =totalC.toLocaleString('de-DE')
    }
    let cartTotalA = document.querySelector(".price-total span")
    cartTotalA.innerHTML = totalD
}

