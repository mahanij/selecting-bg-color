let body = document.getElementsByTagName("body")[0];

let form = document.getElementsByTagName("form")[0];

form.addEventListener("submit", (e) => {
    let selectiedColor = e.target.select.value
    if(selectiedColor == 'red'){
        body.classList.add('red')
        body.classList.remove('blue')
        body.classList.remove('green')
    }
    else if(selectiedColor == 'blue'){
        body.classList.add('blue')
        body.classList.remove('red')
        body.classList.remove('green')
    }
    else if(selectiedColor == 'green'){
        body.classList.add('green')
        body.classList.remove('blue')
        body.classList.remove('red')
    }
  e.preventDefault();
});
