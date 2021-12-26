  
function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}
function createNode(element1) {
    return document.createElement(element1);
}

function append(parent, el1) {
  return parent.appendChild(el1);
}


const beer_result = document.getElementById('beer_result');
const beer_btn = document.getElementById('beer_btn');
getRandomBeer()
beer =beer_btn.addEventListener('click', getRandomBeer)
function getRandomBeer(){
    fetch('https://random-data-api.com/api/beer/random_beer')
    .then(res => res.json())
    .then(data => {
        beer_result.innerHTML = `<div class='beer_name'>Name:<br> ${data.name}</div> 
        <div class='beer_brand'>Brand:<br> ${data.brand}</div>
        <div class='beer_hop'>Hop:<br> ${data.hop}</div>
        <div class='beer_alcohol'>Alcohol:<br> ${data.alcohol}</div>`;
        
    })
}






const ul = document.getElementById('authors');
const url = 'https://randomuser.me/api/?results';

const ul1 = document.getElementById('beers');
const url1='https://random-data-api.com/api/beer/random_beer';


fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let authors = data.results;
  return authors.map(function(author) {
    let li = createNode('li');
    let img = createNode('img');
    let span = createNode('span');
    img.src = author.picture.large;
    span.innerHTML = `<div class='user'><div class='username'>${author.name.first}</div><div class='username2'> ${author.name.last}</div></div>`;
    append(li, img);
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});


