

const searchPart = document.querySelector('.searchPart');
const menu = document.querySelector('.menu');
const suggestions = document.querySelector('.suggestions');

function searchHeader() {

    menu.style.display = "none"
    searchPart.style.display = "flex"

}

function searchOut() {

    menu.style.display = "flex"
    searchPart.style.display = "none"

}


const endpoint = 'https://gist.githubusercontent.com/dewo66/21a9a54192693647f9f614d6df93c785/raw/de81b34b164ebbba1a0d400a6dac6e2b4953d75c/music';
const cities = [];
fetch(endpoint)
    .then(blob => blob.json())
    .then(data => cities.push(...data));

function findMatches(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.artist.match(regex) | console.log(place.artist.match(regex))
    });
}


function displayMatches() {
    const matchArray = findMatches(this.value, cities);
    const html = matchArray.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const artist = place.artist.replace(regex, `${this.value}`);
        return `
  <li>
    <span >${artist}</span>
  </li>
`;
    }).join('');
    suggestions.innerHTML = html;
}

//const searchInput = document.querySelector('.search');


searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
