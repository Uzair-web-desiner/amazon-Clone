
let boxes=document.querySelectorAll('.catagares-box')
let catagares=document.querySelector('.catagares-box-row')
let itemDetail =document.querySelector('.item-main')
let detail =document.querySelector('#detail')
let boxInfo=document.querySelectorAll('.catagares-box-info p')
let itemImg =document.querySelector('.item-img img')
let heading =document.querySelector('.heading')
let price1=document.querySelector('#price1')
let price2=document.querySelector('#price2')



boxes.forEach(box => {
    box.addEventListener('click',(eve)=>{
        eve.preventDefault()
        catagares.style.display='none'
        heading.style.display='none'
        itemDetail.classList.remove("item-main")
        itemDetail.classList.add("main2")
        detail.innerText=box.children[1].innerText
        console.log(box.children[1].innerText )
        let boxImg=box.children[0]
        itemImg.src=boxImg.children[0].src
        price1.innerText=box.children[2].innerText
        price2.innerText=box.children[2].innerText

    })

});