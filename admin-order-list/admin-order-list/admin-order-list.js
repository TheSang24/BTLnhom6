/*The button opens more rows that are hidden*/
let seeMoreBTN = document.getElementById("seeMoreBTN");

/*hidrow = all rows that have the class .tableRow1*/
let hidrow = document.querySelectorAll('.tableRow1')

seeMoreBTN.addEventListener("click", seeMore);

/*The function to show up the hidden rows*/
function seeMore(){
    hidrow.forEach(function(hidrow) {
        hidrow.style.display = 'table-row';
        hidrow.style.visibility = 'visible';
        })
}