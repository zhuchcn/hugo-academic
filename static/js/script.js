const footer = document.querySelector("footer div.container")
const copyright = document.createElement('p')
const date = new Date()
const year = date.getFullYear()
copyright.className = "powered-by"
copyright.innerHTML = `copyright &copy; ${year} Chenghao Zhu`
const poweredBy = footer.querySelector('.powered-by')
footer.insertBefore(copyright, poweredBy)
console.log(poweredBy)