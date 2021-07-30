let first = document.getElementById("first");
let second = document.getElementById("second");
let third = document.getElementById("third");
let fourth = document.getElementById("fourth");
let fifth = document.getElementById("fifth");
let sixth = document.getElementById("sixth");
let seventh = document.getElementById("seventh");
let eighth = document.getElementById("eighth");
let ninth = document.getElementById("ninth");
let tenth = document.getElementById("tenth");
let bar  = document.getElementById("input")

let images = [];


  
  function setCurrentImages(){
    first.innerHTML = `<img src="${images["0"]}">`;
    second.innerHTML = `<img src="${images["1"]}">`;
	  third.innerHTML = `<img src="${images["2"]}">`;
    fourth.innerHTML = `<img src="${images["3"]}">`;
    fifth.innerHTML = `<img src="${images["4"]}">`;
    sixth.innerHTML = `<img src="${images["5"]}">`;
    seventh.innerHTML = `<img src="${images["6"]}">`;
    eighth.innerHTML = `<img src="${images["7"]}">`;
    ninth.innerHTML = `<img src="${images["8"]}">`;
    tenth.innerHTML = `<img src="${images["9"]}">`;
    
  }
  async function findGif() {
  let gifName = bar.value;
  console.log(gifName);
  const request = new Request("https://api.giphy.com/v1/gifs/search?q="+gifName+"&api_key=EJgC8gC5E8r6gtEbuNf46POFykTvVW7X&limit=10");
  
 await fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log(response.data);
	for(let i = 0; i < response.data.length; i++)
		images.unshift(response.data[i].images.original.url);
    images = images.slice(0,10);
	  positiveWords(bar);
    badWords(bar);
    setCurrentImages();
    
  }).catch(error => {
    console.error(error);
  });
 
  }
  
  
  function animation(){
   first.className="firstmove"
    
  }
  function animation1(){
    second.className="secondmove"
  }
  function animation2(){
    third.className="thirdmove"
  }
  function animation3(){
    fourth.className="fourthmove"
  }
  function animation4(){
    fifth.className="fifthmove"
  }
  function animation5(){
    sixth.className="sixthmove"
  }
  function animation6(){
    seventh.className="seventhmove"
  }
  function animation7(){
    eighth.className="eighthmove"
  }
  function animation8(){
    ninth.className="ninthmove"
  }
  function animation9(){
    tenth.className="tenthmove"
  }
  
  async function init(){
  const request = new Request("https://api.giphy.com/v1/gifs/search?q=siliconvalley&api_key=EJgC8gC5E8r6gtEbuNf46POFykTvVW7X&limit=10");
  await fetch(request)
  .then(response => {
    if (response.status === 200) {
      return response.json();
    } else {
      throw new Error('Something went wrong on api server!');
    }
  })
  .then(response => {
    console.log(response.data);
	for(let i = 0; i < response.data.length; i++)
		images.unshift(response.data[i].images.original.url);
    images = images.slice(0,10);
	  setCurrentImages();
    
  }).catch(error => {
    console.error(error);
  });
 
} 
