const toggler =document.getElementById('darkmood');
const body =document.querySelector('body');
const content =document.querySelector('h5');
const h6 =document.querySelector('h6');
const a =document.querySelector('a');
toggler.addEventListener('click', function(){
    toggler.classList.toggle('fa-moon');
    if(toggler.classList.toggle('fa-sun'))
    {
        body.style.backgroundColor='white';
        body.style.color='black';
        body.style.transition='1s';
        content.style.color='black';
        a.style.color='blue';
        h6.style.color='black';
    }
    else{
        {
            body.style.backgroundColor='black';
            body.style.color='white';
            body.style.transition='1s';
            content.style.color='white';
            a.style.color='white';
            h6.style.color='white';
        }
    }
})