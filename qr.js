let form = document.querySelector("form")
form.addEventListener("submit",(e)=>{
    e.preventDefault()
    let input = document.querySelector("#url").value
    let image = document.querySelector("img")
    // console.dir(image)
    let qrUrl = `https://chart.googleapis.com/chart?cht=qr&chs=400x400&chl=${input}`
    // console.log(qrUrl)
    image.src=qrUrl
})