import "../css/style.css";

import $ from "jquery";
import "popper.js";
import "bootstrap";

import "./component/CustomFooter.js";


import icon from "../image/favicon.png";
import noposter from "../image/noposter.jpg";

$('.favicon').attr('href', icon);

const Data = {
    baseUrl: "http://www.omdbapi.com/?apikey=c59dd01a",
    getData: keyword => {
        $('#daftar').html('');
        $('.loading').removeClass('sembunyi');
        fetch(`${Data.baseUrl}&s=${keyword}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.Response == 'False') {
                    alert('Film tidak ditemukan');
                } else {
                    Data.render(responseJson.Search);
                }

            })
            .catch(error => {
                console.log(error);
            });
    },
    getDataFilter: (keyword, year, type) => {
        $('#daftar').html('');
        $('.loading').removeClass('sembunyi');
        fetch(`${Data.baseUrl}&s=${keyword}&y=${year}&type=${type}`)
            .then(response => {
                return response.json();
            })
            .then(responseJson => {
                if (responseJson.Response == 'False') {
                    alert('Film tidak ditemukan');
                } else {
                    Data.render(responseJson.Search);
                }

            })
            .catch(error => {
                console.log(error);
            });
    },
    render: data => {
        data.forEach(dt => {
            const srcImg = dt.Poster != "N/A" ? dt.Poster : noposter;
            const element = document.createElement('div');
            $(element).addClass('col-sm-4');
            $(element).addClass('mb-5');
            element.innerHTML = `
                <div class="card" style="width: 10rem;">
                    <img src="${srcImg} " class="card-img-top" alt="...">
                    <div class="card-body text-center">
                        <h5 class="card-title">${dt.Title}</h5>
                        <a href="info.html?${dt.imdbID} " class="btn btn-primary"><i class="fas fa-arrow-right"></i></a>
                    </div>
                </div>
                `;

            $('#daftar').append(element);
            $('.loading').addClass('sembunyi');
        });
    }
}

$(document).ready(() => {
    $('#search-button').click((e) => {
        e.preventDefault();
        if ($('#input-keyword').val() == '') {
            alert('Mohon Masukan Kata Kunci');
            return;
        }
        Data.getData($("#input-keyword").val());
    });

    $('#search-button-filter').click((e) => {
        e.preventDefault();
        if ($('#input-keyword-filter').val() == '') {
            alert('Mohon Masukan Kata Kunci');
            return;
        }
        Data.getDataFilter($("#input-keyword-filter").val(), $("#input-year").val(), $("#input-type").val());
    });

    $('#filter-button').click((e) => {
        e.preventDefault();
        $('.form-row').addClass('sembunyi');
        $('.form').removeClass('sembunyi');
    });
    $('#filter-button-filter').click((e) => {
        e.preventDefault();
        $('.form').addClass('sembunyi');
        $('.form-row').removeClass('sembunyi');

    });
});