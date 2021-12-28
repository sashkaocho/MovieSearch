"use strict"
let base = document.getElementById('base');
let search = document.getElementById('search');
let resultEl = document.getElementById('result');
let movie = document.getElementById('movie');

const API_KEY = '9a59e573';

const API_URL = `http://www.omdbapi.com/?apikey=${API_KEY}`;


const getMovieRequest = async (title) => {
   let queryURL = API_URL + `&s=${title}`;
   const response = await fetch(queryURL);
   const moviesList = await response.json();

   return moviesList;
};

search.addEventListener('click', () => {
   let text = movie.value;
   if (text !== '') {
     getMovieRequest(text).then ((result) => {
      console.log(result.Search);
      resultEl.innerHTML = '';
      if (!result.Search) {
         alert('error');
         return false;
      }
      result.Search.map((movie, key) => {
         movie.Poster = movie.Poster !== 'N/A' ? movie.Poster: 'https://cdn-icons-png.flaticon.com/512/2748/2748558.png';
         resultEl.insertAdjacentHTML( 'afterbegin', `
         <div>
         <strong>${movie.Title}</strong>
         <img src="${movie.Poster}"> 
         </div>
         `);
      });
     });
     
   } else { 
      alert('Please, enter search query');
   }
   
});










 