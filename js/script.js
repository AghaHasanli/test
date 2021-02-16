// localStorage.setItem("a",5)
// localStorage.setItem("a",10)
// let a =parseInt(localStorage.getItem("a"))
// a++;
// localStorage.setItem("a",a)
// console.log(a);

// localStorage.setItem("a",34)
//  let a=parseInt(localStorage.getItem("a"))
//  a++;
//  localStorage.setItem("a",a)
//  console.log(a);

//  localStorage.setItem("a",77)
//   let a=parseInt(localStorage.getItem("a"))
//   a++
//   localStorage.setItem("a",a)
//   console.log(a);

// localStorage.setItem("arr",JSON.stringify([10,20,30]))


// let arr = JSON.parse(localStorage.getItem("arr"))

// console.log(arr);

// localStorage.removeItem("a")
// localStorage.clear()


let addCartBtns=document.querySelectorAll(".btn-primary")
if(localStorage.getItem("basket")==null){
    localStorage.setItem("basket",JSON.stringify([]))
}


// let basket=[]
addCartBtns.forEach(btn=>{
    btn.onclick=function(ev){
        ev.preventDefault();
        let Id = this.parentNode.parentElement.getAttribute("data-id")
        let img = this.parentNode.previousElementSibling.getAttribute("src")
        let name = this.parentNode.firstElementChild.innerText

        let basket = JSON.parse(localStorage.getItem("basket"))

        let isExistCars=basket.find(p=>p.id==Id);
        if(isExistCars==undefined){
                    basket.push({
            id:Id,
            image:img,
            name:name,
            count:1
        })
        }else{
            isExistCars.count+=1
        }

        localStorage.setItem("basket",JSON.stringify(basket))

        // console.log(basket);
    }
})