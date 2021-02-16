let products=JSON.parse(localStorage.getItem("basket"))
let table= document.querySelector(".table")


console.log("TEzst", products);
console.log("table", table);


products.forEach(product => {
    table.lastElementChild.innerHTML+=
    ` <tr>
    <td>
        <img src="${product.image}" height="200">
    </td>
    <td>${product.name}</td>
    <td>${product.count}</td>
  </tr>`
});