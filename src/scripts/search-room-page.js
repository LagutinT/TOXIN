import '../styles/search-room-page-styles/search-room-page.scss';
import './guests-dropdown.js';

/* additional_facilities */

document.getElementsByClassName('additional_facilities_dropdown_button')[0].onclick = visibleList;

function visibleList() {

    if (document.getElementsByClassName('additional_facilities_dropdown_button')[0].classList.contains('rotate')) {
        document.getElementsByClassName('additional_facilities_dropdown_button')[0].classList.remove('rotate');
        document.getElementsByClassName('additional_facilities_dropdown_list')[0].style.display = 'none';
    } else {
        document.getElementsByClassName('additional_facilities_dropdown_button')[0].classList.add('rotate');
        document.getElementsByClassName('additional_facilities_dropdown_list')[0].style.display = 'flex';
    }

}

/* rooms_rating */

document.getElementsByClassName('number_comfort_level')[0].innerHTML = 'люкс';
document.getElementsByClassName('number_comfort_level')[2].innerHTML = 'люкс';
    
for (let i = 0; i < document.getElementsByClassName('rating').length; i++) {

    if (document.getElementsByClassName('rating')[i].id == '5') {
        
        for (let j = 0; j < document.getElementsByClassName('rating')[i].children.length; j++) {
            document.getElementsByClassName('rating')[i].children[j].style.background = " url(../src/img/star.png) no-repeat center center";
        }

    } else if (document.getElementsByClassName('rating')[i].id == '4') {

        for (let j = 0; j < document.getElementsByClassName('rating')[i].children.length - 1; j++) {
            document.getElementsByClassName('rating')[i].children[j].style.background = " url(../src/img/star.png) no-repeat center center";
        }

        document.getElementsByClassName('rating')[i].children[4].style.background = " url(../src/img/star_border.png) no-repeat center center";

    } else if (document.getElementsByClassName('rating')[i].id == '3') {
        
        for (let j = 0; j < document.getElementsByClassName('rating')[i].children.length - 1; j++) {
            document.getElementsByClassName('rating')[i].children[j].style.background = " url(../src/img/star.png) no-repeat center center";
        }

        document.getElementsByClassName('rating')[i].children[3].style.background = " url(../src/img/star_border.png) no-repeat center center";
        document.getElementsByClassName('rating')[i].children[4].style.background = " url(../src/img/star_border.png) no-repeat center center";

    }

}