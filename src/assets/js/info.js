

import "../css/style.css";

import $ from "jquery";
import "popper.js";
import "bootstrap";

import "./component/CustomFooter.js";


import icon from "../image/favicon.png";
import noposter from "../image/noposter.jpg";

$('.favicon').attr('href',icon);


$(document).ready(()=>{

    const data = id => {
        return fetch(`http://www.omdbapi.com/?apikey=c59dd01a&i=${id}`)
        .then(response => {
            return response.json();
        })
        .then(responseJson => {
            return Promise.resolve(responseJson);
        })
        .catch(error => {
            console.log(error);
        });
    };

    const result = hasil => {
        const srcImg = hasil.Poster != "N/A" ? hasil.Poster : noposter;
        $('title').html(hasil.Title);
        $('img').attr('src',srcImg);
        $('.judul_film').html(hasil.Title);
        $('.tahun').html(hasil.Year);
        $('.rilis').html(hasil.Released);
        $('.genre').html(hasil.Genre);
        $('.durasi').html(hasil.Runtime);
        $('.aktor').html(hasil.Actors);
        $('.sinopsis').html(hasil.Plot);

        $('.loading').addClass('sembunyi');
    };

    
    
    const url = window.location.href;
    const id = url.substr(url.indexOf('?') + 1);
    data(id).then(result);    

});