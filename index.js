
let container = document.getElementById("container")

let URL = "http://localhost:1818/products"

async function getData(){
 try {
     let res = await fetch(URL)
     let data = await res.json();
     console.log(data)
     displayData(data)
 } catch (error) {
     console.log(error)
 }
}

getData()

function displayData(data){

  container.innerHTML = ""
    data.forEach((ele)=>{

        let card = document.createElement("div");

        let category = document.createElement("h2");
        category.innerText = ele.category
   
        let image = document.createElement("img");
            image.src = ele.image
   
        let price = document.createElement("p");
            price.innerText = ele.price

          let title = document.createElement("h4")
            title.innerText = ele.title

            let rating = document.createElement("p");
            rating.innerHTML = ele.rating.rate

            let btn = document.createElement("button")
            btn.innerText = "DELETE"

            btn.addEventListener("click", async function(){
               let res = await fetch(`${URL}/${ele.id}`,{
                method : "DELETE"
               })

               getData()
        

            })

            card.append(image, price, title, category, rating, btn)
            container.append(card)
    })
     
}

