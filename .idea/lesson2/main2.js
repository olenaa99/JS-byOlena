//перше завдання
let с = +prompt('enter number')
if (с != 0){
    console.log('true')
} else {
    console.log('false')
}

//друге завдання
let time = +prompt('what part of time?')
if (time >=0 && time <15) {
    console.log('first part');
} else if (time >14 && time <30) {
    console.log('second part');
} else if ( time >29 && time <45) {
    console.log('third part');
}else if ( time >44 && time <=59) {
    console.log('fourth part');
}else {
    console.log('error');
}

//третє завдання
let day = +prompt('which decade?')
 if (day >0 && day <11) {
     console.log('first decade');
 } else if ( day >10 && day <20) {
     console.log('second decade');
 } else if (day >19 && day <32 ) {
     console.log('third decade');
 } else {
     console.log ('error');
 }


//четверте завдання
let days = prompt('what do i plan')
switch (days) {
     case 'one':
        console.log('monday');
        break;
    case 'two':
        console.log('tuesday');
        break;
    case 'three':
        console.log('wednesday');
        break;
    case 'four':
        console.log('thursday');
        break;
    case 'five':
        console.log('friday');
        break;
    case 'six':
        console.log('saturday');
        break;
    case 'seven':
        console.log('sunday')
        break;
    default:
        console.log('no plans for u')
}

//п'яте завдання
let a = +prompt ('first number');
let b = +prompt ('second number');

 if (a > b) {
     console.log(a);
 } else if  (a < b) {
     console.log(b);
} else {
     console.log('error')
}


// //шосте завдання
let x = null || 'default';
console.log(x)