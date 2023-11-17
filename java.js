let but = document.querySelector('.switch')
let price = document.querySelector('.fasi')
let pr = document.querySelector('.pr')
let p = document.querySelector('.oo')

console.log(but)
console.log(price)

but.addEventListener('click', () => {
   price.innerHTML = "$199.99"
   pr.innerHTML = "$249.99"
   p.innerHTML = '$399.99'

})