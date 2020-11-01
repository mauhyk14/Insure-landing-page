var openMenubutton = document.getElementById('open-menu');
var closeMenubutton = document.getElementById('close-menu');
var mobileRighpattern = document.getElementById('adjustable-pattern');

closeMenubutton.style.display = 'none';

openMenubutton.addEventListener('click', function(){

    openMenubutton.style.display = 'none';

    closeMenubutton.style.display = 'unset';

    mobileRighpattern.style.top = '45%';

})


closeMenubutton.addEventListener('click', function(){

    closeMenubutton.style.display = 'none';

    openMenubutton.style.display = 'unset';

    mobileRighpattern.style.top = '33%';
})


