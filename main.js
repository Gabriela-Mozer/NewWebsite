
// $('.portfolio-item-wrapper')
const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper');
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () =>{
        // console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.add('img-darken');
    })
    portfolioItem.addEventListener('mouseoout', () =>{
        // console.log(portfolioItem.childNodes[1].classList);
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })

})

// const portfolioItems = document.getElementById('.portfolio-img-background');

// portfolioItems.addEventListener('mouseover', function() { 
//     portfolioItems.setAttribute('style','-webkit-filter: brightness(1.5)'); 
// }, false);

// portfolioItems.addEventListener('mouseout', function() { 
//     portfolioItems.setAttribute('style','-webkit-filter: brightness(1.0)'); 
// }, false);