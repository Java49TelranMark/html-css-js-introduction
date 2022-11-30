const jsonData = '{"page":1,"results":[{"adult":false,"backdrop_path":"/bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg","genre_ids":[28,14,878],"id":436270,"original_language":"en","original_title":"Black Adam","overview":"Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.","popularity":15075.276,"poster_path":"/pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg","release_date":"2022-10-19","title":"Black Adam","video":false,"vote_average":7.2,"vote_count":1888},{"adult":false,"backdrop_path":"/kmzppWh7ljL6K9fXW72bPN3gKwu.jpg","genre_ids":[14,28,35,80],"id":1013860,"original_language":"en","original_title":"R.I.P.D. 2: Rise of the Damned","overview":"When Sheriff Roy Pulsipher finds himself in the afterlife, he joins a special police force and returns to Earth to save humanity from the undead.","popularity":6040.388,"poster_path":"/g4yJTzMtOBUTAR2Qnmj8TYIcFVq.jpg","release_date":"2022-11-15","title":"R.I.P.D. 2: Rise of the Damned","video":false,"vote_average":6.8,"vote_count":152},{"adult":false,"backdrop_path":"/kpUre8wWSXn3D5RhrMttBZa6w1v.jpg","genre_ids":[35,10751,14],"id":338958,"original_language":"en","original_title":"Disenchanted","overview":"Disillusioned with life in the city, feeling out of place in suburbia, and frustrated that her happily ever after hasn’t been so easy to find, Giselle turns to the magic of Andalasia for help. Accidentally transforming the entire town into a real-life fairy tale and placing her family’s future happiness in jeopardy, she must race against time to reverse the spell and determine what happily ever after truly means to her and her family.","popularity":3316.598,"poster_path":"/4x3pt6hoLblBeHebUa4OyiVXFiM.jpg","release_date":"2022-11-16","title":"Disenchanted","video":false,"vote_average":7.5,"vote_count":352}]}'
const httpPrefix = "https://image.tmdb.org/t/p/w500";

const moviesData = JSON.parse(jsonData);

const ulElement1 = document.querySelector(".movies-list");
const sectionElements = document.querySelectorAll("section");
ulElement1.innerHTML = getPosterImages();
function getPosterImages() {
   const arImages = moviesData.results.map(movie => 
        `<li class="movie-item"> <img class="movie-image" src="${httpPrefix}${movie.poster_path}">
        <ul>
        <li class="movie-description">
        <span class="movie-title">${movie.original_title}</span>
        <span class="movie-overview">${movie.overview}</span>
        </li>
        </ul>
        </li>`);
    return arImages.join('');
}
function show(index) {
    sectionElements.forEach(section => section.hidden = true);
    sectionElements[index].hidden = false;
}

const ulElement2 = document.querySelector(".best-movie");
ulElement2.innerHTML = getBestMovie();
function getBestMovie (){
    const bestMovie = moviesData.results.reduce((a, b) => a.vote_average > b.vote_average ? a : b);
    const movie =
    `<li class="movie-item"> <img class="movie-image" src="${httpPrefix}${bestMovie.poster_path}">
        <ul>
        <li class="movie-description">
        <span class="movie-title">${bestMovie.original_title}</span>
        <span class="movie-overview">${bestMovie.vote_average}</span>
        </li>
        </ul>
        </li>`;
        return movie;
}

const ulElement3 = document.querySelector(".worst-movie");
ulElement3.innerHTML = getWorstMovie();
function getWorstMovie (){
    const worstMovie = moviesData.results.reduce((a, b) => a.vote_average < b.vote_average ? a : b);
    const movie =
    `<li class="movie-item"> <img class="movie-image" src="${httpPrefix}${worstMovie.poster_path}">
        <ul>
        <li class="movie-description">
        <span class="movie-title">${worstMovie.original_title}</span>
        <span class="movie-overview">${worstMovie.vote_average}</span>
        </li>
        </ul>
        </li>`;
        return movie;
}