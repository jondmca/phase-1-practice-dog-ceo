
console.log('%c HI', 'color: firebrick')

//STEP 1
function ceo(){
    let imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    fetch(imgUrl)
        .then(resp => resp.json())
        .then(json => renderImg(json))
}

function renderImg(images){
    let loc = document.querySelector('div')
    images.message.forEach(image => {
        let img = document.createElement('img');
        img.src = image;
        loc.appendChild(img);

    });
}

document.addEventListener('DOMContentLoaded', () => { ceo() })


//STEP 2
async function start() {
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    let response = await fetch(breedUrl)
    let data = await response.json()
    createBreedList(data.message)
    removeDogBreeds(data.message)
}
start()



function createBreedList(breedList){
    document.getElementById('dog-breeds').innerHTML = `${Object.keys(breedList).map(function (breed) {
        return `<p>${breed}</p>`
}).join('')}`
breedList = document.getElementById('dog-breeds')
breedList.addEventListener('click', colorChange)
  
}

function colorChange(event){
    event.target.style.color = 'purple'
}

function removeDogBreeds(breedList){
    let currentList = Object.keys(breedList)
    let filteredList = currentList.filter(value => value.startsWith('a'));
    console.log(filteredList)
        
}


let breedDropDown = document.getElementById('breed-dropdown');
console.log(breedDropDown.innerHTML)

