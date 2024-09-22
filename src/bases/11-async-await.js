// const getImagePromesa = () =>  new Promise((res) => res('https://ajajajaja.com'))

const getImagePromesa = async () => {
    // return 'https://ajajajaja.com';
    const apiKey = '2C2cl7zwvEL2HWjBN6zAdKim9SPqQz1h'
    const res = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`);
    const {data} = await res.json();
    const {url} =   data.images.original;
    const img = document.createElement('img');
    // const url = data.url;
    img.src = url;
    document.body.append(img);
    console.log(data.images.original);
}

getImagePromesa()







// peticion
// .then((resp => resp.json()))
// .then(({data}) => {

//     const {url} =data.images.original;
    
//     const img = document.createElement('img')
//         img.src = url;
//         document.body.append(img)
    

// })


// .catch((req)=>{
//     console.warn(req)
// })
