{

let navMobile = document.querySelector('.mobile__list.closed'),
    btn = document.querySelector('.mobile__button');

btn.addEventListener('click', function() {
    if ( navMobile.classList.contains('closed') ) {  
    navMobile.classList.remove('closed');
    }
    else {
        navMobile.classList.add('closed');   
    }
});

}