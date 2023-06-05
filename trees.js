let reasons=[
    "Trees Are A Vital Habitat For Wildlife","Trees provide Food","Trees purify our air and combat climate change","Trees protect against floods and water pollution","Trees Provide Oxygen"
    ]
    let images=[
    "https://thumbs.dreamstime.com/z/wild-animals-cartoon-trees-illustration-91371473.jpg","https://media.tenor.com/3nFjpbdV4HoAAAAC/apple-picking-fall.gif","https://media2.giphy.com/media/cj7ZyuIo0iLVnMqqDF/giphy.gif?cid=6c09b952bf01fb5d650c03d7f500fae55c33367d2877b826&rid=giphy.gif&ct=g","https://i.ytimg.com/vi/9lq8SeiDUEA/maxresdefault.jpg","https://www.arborday.org/kids/photosynthesis/images/2.gif"
    ]
    let i=0;
    function next(){
    if(i==5){
    i=0
    }
    document.getElementById("img1")
    .src=images[i]
    document.getElementById("reason").innerText=reasons[i]
    i++;
    }