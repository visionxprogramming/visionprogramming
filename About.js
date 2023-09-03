const drop_btn=document.querySelector('#drop-btn')
const drop_menu=document.querySelector('#drop-unev')

drop_btn.addEventListener('click',()=>{
    drop_menu.classList.toggle('hidden');
})


const mobile_btn=document.querySelector('#mobile-btn')
const mobile_menu=document.querySelector('#mobile-menu')

mobile_btn.addEventListener('click',() => {
    mobile_menu.classList.toggle('hidden');
})

const drop_btn2=document.querySelector('#drop2-btn')
const drop_menu2=document.querySelector('#drop2-unev')

drop_btn2.addEventListener('click',()=>{
    drop_menu2.classList.toggle('hidden');
})


 
 

const up2 =document.querySelector("#up2");

window.onscroll= () => {
    if(this.scrollY >= 800){
        up2.classList.add('show')
    }
    else {
        up2.classList.remove("show")
    }
}

up2.onclick=() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


const mon =document.getElementById('mon') 
 const btn_d =document.getElementById('btn-d') 
 const bg=document.querySelectorAll('.bg')
 const g=document.querySelectorAll('.g')


mon.addEventListener('click',() =>{
    document.getElementById('mon').classList.toggle('fa-sun')
    if(document.getElementById('mon').classList.toggle('fa-moon')){

        document.getElementById('logo-f').setAttribute('src','image/png.png')
        for(let i=0;i<=g.length;i++){
            bg[i].style.backgroundColor='#242424'
            bg[i].style.transition='2s'
            g[i].style.color ='white'
            g[i].style.transition='2s'
        }
        
         

    }
    else {
       document.getElementById('logo-f').setAttribute('src','image/لوغو دهبي2.png')
        
       
       for(let i=0;i<=g.length;i++){
            bg[i].style.backgroundColor='white'
            bg[i].style.transition='2s'
            g[i].style.color ='#efbe07'
            g[i].style.transition='2s'
            
        } 
       
        
       
    }
})  
  
 



 function shear(){
    let shearData ={
        title:document.title,
        text:'VISION',
        url:document.location.href
    }
    if(navigator.canShare(shearData)){
        navigator.share(shearData)
    }

  }

  function color()
{

         if(document.getElementById('mon').classList.toggle('fa-moon')){
    for(let i=0;i<=g.length;i++){
        g[i].style.color='#efbe07'
        g[i].style.transition='2s'
    } 

         }
}