
/*let URL = "http://localhost:1818/products"

document.querySelector("form").addEventListener("submit", function () {
    getData()
})


async function getData() {

    event.preventDefault();

    let image = document.getElementById("input1").value
    let price = document.getElementById("input2").value
    let title = document.getElementById("input3").value
    let category = document.getElementById("input4").value
    let rating = document.getElementById("input5").value


    let obj = {
        image,
        price,
        title,
        category,
        rating 
    }

    console.log(obj)


    let response = await fetch(`${URL}`, {
        method: "POST",
        headers: {
            "content-type":"application/json"
        },
        body: JSON.stringify(obj)
    })

window.location.href = "index.html";

}
*/
