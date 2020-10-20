const btnTop = document.getElementById('btnTop');
const topUl = document.querySelector('.topUl');
const leftNav = document.querySelector('.leftNav');
const arrowLeft=document.getElementById('arrowLeft');
const leftX =document.getElementById('leftX');

btnTop.addEventListener('click', () =>{
topUl.classList.toggle('showTopUl');
});

leftX.addEventListener('click', () =>{
leftNav.classList.remove('showLeftNav');
});

arrowLeft.addEventListener('click', () =>{
leftNav.classList.add('showLeftNav');
});

window.addEventListener('click',(e)=>{
    if(e.target === leftNav){
    	 leftNav.classList.remove('showLeftNav')
}
    }
   
)

// window.addEventListener('click', (e)=>{
// const quelew = e.target;
// console.log(quelew);
// })
