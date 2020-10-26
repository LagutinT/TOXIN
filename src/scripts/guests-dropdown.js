document.getElementsByClassName('field_button')[0].onclick = function() {
    console.log('hi')
    if (document.getElementsByClassName('guests_dropdown_list')[0].classList.contains('visible')) {
        document.getElementsByClassName('guests_dropdown_list')[0].classList.remove('visible');
        document.getElementsByClassName('field_button')[0].classList.remove('transform');
    } else {
        document.getElementsByClassName('guests_dropdown_list')[0].classList.add('visible');
        document.getElementsByClassName('field_button')[0].classList.add('transform');
    }

}

/* adults_count */

document.getElementsByClassName('calculator_minus')[0].onclick = function() {

    if (+document.getElementsByClassName('calculator_value')[0].innerHTML != 0) {
        let value = +document.getElementsByClassName('calculator_value')[0].innerHTML;
        value--;
        document.getElementsByClassName('calculator_value')[0].innerHTML = `${value}`;
    }

    guestsCalculator();
}

document.getElementsByClassName('calculator_plus')[0].onclick = function() {
    let value = +document.getElementsByClassName('calculator_value')[0].innerHTML;
    value++;
    document.getElementsByClassName('calculator_value')[0].innerHTML = `${value}`;
    guestsCalculator();
}

/* children_count */

document.getElementsByClassName('calculator_minus')[1].onclick = function() {
    
    if (+document.getElementsByClassName('calculator_value')[1].innerHTML != 0) {
        let value = +document.getElementsByClassName('calculator_value')[1].innerHTML;
        value--;
        document.getElementsByClassName('calculator_value')[1].innerHTML = `${value}`;
    }

    guestsCalculator();
}

document.getElementsByClassName('calculator_plus')[1].onclick = function() {
    let value = +document.getElementsByClassName('calculator_value')[1].innerHTML;
    value++;
    document.getElementsByClassName('calculator_value')[1].innerHTML = `${value}`;
    guestsCalculator();
}

/* babies_count */

document.getElementsByClassName('calculator_minus')[2].onclick = function() {
    
    if (+document.getElementsByClassName('calculator_value')[2].innerHTML != 0) {
        let value = +document.getElementsByClassName('calculator_value')[2].innerHTML;
        value--;
        document.getElementsByClassName('calculator_value')[2].innerHTML = `${value}`;
    }

    guestsCalculator();
}

document.getElementsByClassName('calculator_plus')[2].onclick = function() {
    let value = +document.getElementsByClassName('calculator_value')[2].innerHTML;
    value++;
    document.getElementsByClassName('calculator_value')[2].innerHTML = `${value}`;
    guestsCalculator();
}

/* guests_calculator */

function guestsCalculator() {
    let adultsCount = +document.getElementsByClassName('calculator_value')[0].innerHTML;
    let childrenCount = +document.getElementsByClassName('calculator_value')[1].innerHTML;
    let babiesCount = +document.getElementsByClassName('calculator_value')[2].innerHTML;
    let sum = adultsCount + childrenCount;

    if (sum == 0 && babiesCount == 0) {
        document.getElementsByClassName('guests_count')[0].innerHTML = 'Сколько гостей';
    } else if(sum == 0 && babiesCount != 0) {

        if (babiesCount == 1) {
            document.getElementsByClassName('guests_count')[0].innerHTML = `${babiesCount} младенец`;
        } else if (babiesCount > 1 && babiesCount < 5) {
            document.getElementsByClassName('guests_count')[0].innerHTML = `${babiesCount} младенецa`;
        } else {
            document.getElementsByClassName('guests_count')[0].innerHTML = `${babiesCount} младенецев`;
        }
        
    } else if (sum == 1) {
        document.getElementsByClassName('guests_count')[0].innerHTML = `${sum} гость`;

        if (babiesCount > 0) {

            if (babiesCount == 1) {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенец`;
            } else if (babiesCount > 1 && babiesCount < 5) {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенецa`;
            } else {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенецев`;
            } 

        }

    } else if (sum > 1 && sum < 5) {
        document.getElementsByClassName('guests_count')[0].innerHTML = `${sum} гостя`;

        if (babiesCount > 0) {

            if (babiesCount == 1) {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенец`;
            } else if (babiesCount > 1 && babiesCount < 5) {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенецa`;
            } else {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенецев`;
            } 

        }

    } else  {
        document.getElementsByClassName('guests_count')[0].innerHTML = `${sum} гостей`;

        if (babiesCount > 0) {

            if (babiesCount == 1) {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенец`;
            } else if (babiesCount > 1 && babiesCount < 5) {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенецa`;
            } else {
                document.getElementsByClassName('guests_count')[0].innerHTML += `, ${babiesCount} младенецев`;
            } 

        }
        
    }
    
}

document.getElementsByClassName('footer_button_clear')[0].onclick = function() {
    document.getElementsByClassName('calculator_value')[0].innerHTML = '0';
    document.getElementsByClassName('calculator_value')[1].innerHTML = '0';
    document.getElementsByClassName('calculator_value')[2].innerHTML = '0';
    document.getElementsByClassName('guests_count')[0].innerHTML = 'Сколько гостей';
}

document.getElementsByClassName('footer_button_apply')[0].onclick = function() {
    document.getElementsByClassName('guests_dropdown_list')[0].classList.remove('visible');
    document.getElementsByClassName('field_button')[0].classList.remove('transform');
}