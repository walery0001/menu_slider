const btnTop = document.getElementById('btnTop');
const topUl = document.querySelector('.topUl');
const leftUl = document.querySelector('.leftNav');

btnTop.addEventListener('click', () =>{
topUl.classList.toggle('showTopUl');
});

window.addEventListener('click',(e)=>{
    if(e.target === leftUl)
    leftUl.classList.toggle('showLeftNav')
console.log(e.target)
})
// window.addEventListener('click', (e)=>{
// const quelew = e.target;
// console.log(quelew);
// })


