const apiKey = '2C2cl7zwvEL2HWjBN6zAdKim9SPqQz1h'

const peticion = fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)

peticion
.then((resp => resp.json()))
.then(({data}) => {

    const {url} =data.images.original;
    
    const img = document.createElement('img')
        img.src = url;
        document.body.append(img)
    

})


.catch((req)=>{
    console.warn(req)
})
