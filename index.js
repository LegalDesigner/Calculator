var equalto = document.getElementById('equalto'); 
var show = document.getElementById('show');
var answer = document.getElementById('answer');
var display;
var answer;

function myClick(clicked_item){
    switch (clicked_item) {
        case 'one': 
            display = 1;
            break;
        case 'two': 
            display = 2;
            break;
        case 'three': 
            display = 3;
            break;
        case 'four':
            display = 4;
            break;
        case 'five':
            display = 5;
            break;
        case 'six':
            display = 6;
            break;
        case 'seven':
            display = 7;
            break;
        case 'eight':
            display = 8;
            break;
        case 'nine':
            display = 9;
            break;
        case 'zero':
            display = 0;
            break;
        case 'dot':
            display = '.';
            break;
        case 'plus':
            display = '+';
            break;
        case 'minus':
            display = '-';
            break;
        case 'divide':
            display = '/';
            break;
        case 'percent':
            display = '%';
            break;
        case 'multiply':
            display = '*';
            break;
        case 'bracet_open':
            display = '(';
            break;
        case 'bracet_close':
            display = ')';
            break;
        default:
            display = '';
    }

    show_work = show.innerHTML += display;

    if(clicked_item == 'equalto'){
        answer.innerHTML = eval(show_work);
        show.innerHTML = '';
    }

    if(clicked_item == 'c'){
        show.innerHTML = '';
        answer.innerHTML = '0';
    }

    if(clicked_item == 'ac'){
        show.innerHTML = '';
    }

    if(clicked_item == 'del'){
        show.innerHTML = show.innerHTML.slice(0, -1);
    }
}