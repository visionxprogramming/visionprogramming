const drop_btn=document.querySelector('#drop-btn')
const drop_menu=document.querySelector('#drop-unev')

drop_btn.addEventListener('click',()=>{
    drop_menu.classList.toggle('hidden');
})


const clya_btn=document.querySelector('#clya-btn')
const drop_clya=document.querySelector('#drop-clya')

clya_btn.addEventListener('click',()=>{
    drop_clya.classList.toggle('hidden');
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


const clya2_btn=document.querySelector('#clya2-btn')
const drop_clya2=document.querySelector('#drop-clya2')

clya2_btn.addEventListener('click',()=>{
    drop_clya2.classList.toggle('hidden');
})







const btn = document.querySelector('#btn')
const d1= document.getElementById('d1')
const d2= document.getElementById('d2')
const d3= document.getElementById('d3')
const logo = document.getElementById('logo')

btn.onclick=() =>
{    
    document.getElementById("d1").classList.toggle('hidden')
    document.getElementById("d2").classList.toggle('hidden')
    document.getElementById("d3").classList.toggle('hidden')
    document.getElementById("logo").setAttribute("width","100%")
    document.getElementById("logo").setAttribute("height","100%")
    document.getElementById("logo").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo").style.left="0px"
    document.getElementById("close").classList.toggle('hidden')
    const close =document.querySelector("#close");
    close.onclick= ()=> 
    {
    document.getElementById("close").classList.toggle('hidden')
    document.getElementById("logo").setAttribute("width","100px")
    document.getElementById("logo").style.borderRadius="50px  0 "
    document.getElementById("logo").style.left="-20px"
    document.getElementById("d1").classList.toggle('hidden')
    document.getElementById("d2").classList.toggle('hidden')
    document.getElementById("d3").classList.toggle('hidden')

    }
}




const btn2 = document.querySelector('#btn2')
const d21= document.getElementById('d21')
const d22= document.getElementById('d22')
const d23= document.getElementById('d23')
const logo2 = document.getElementById('logo2')

btn2.onclick=() =>
{    
    document.getElementById("d21").classList.toggle('hidden')
    document.getElementById("d22").classList.toggle('hidden')
    document.getElementById("d23").classList.toggle('hidden')
    document.getElementById("logo2").setAttribute("width","100%")
    document.getElementById("logo2").setAttribute("height","100%")
    document.getElementById("logo2").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo2").style.left="0px"
    document.getElementById("close2").classList.toggle('hidden')
    const close2 =document.querySelector("#close2");
    close2.onclick= ()=> 
    {
    document.getElementById("close2").classList.toggle('hidden')
    document.getElementById("logo2").setAttribute("width","100px")
    document.getElementById("logo2").style.borderRadius="50px  0 "
    document.getElementById("logo2").style.left="-25px"
    document.getElementById("d21").classList.toggle('hidden')
    document.getElementById("d22").classList.toggle('hidden')
    document.getElementById("d23").classList.toggle('hidden')

    }
}



const btn3 = document.querySelector('#btn3')
const d31= document.getElementById('d31')
const d32= document.getElementById('d32')
const d33= document.getElementById('d33')
const logo3 = document.getElementById('logo3')

btn3.onclick=() =>
{    
    document.getElementById("d31").classList.toggle('hidden')
    document.getElementById("d32").classList.toggle('hidden')
    document.getElementById("d33").classList.toggle('hidden')
    document.getElementById("logo3").setAttribute("width","100%")
    document.getElementById("logo3").setAttribute("height","100%")
    document.getElementById("logo3").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo3").style.left="0px"
    document.getElementById("close3").classList.toggle('hidden')
    const close3 =document.querySelector("#close3");
    close3.onclick= ()=> 
    {
    document.getElementById("close3").classList.toggle('hidden')
    document.getElementById("logo3").setAttribute("width","100px")
    document.getElementById("logo3").style.borderRadius="50px  0 "
    document.getElementById("logo3").style.left="-25px"
    document.getElementById("d31").classList.toggle('hidden')
    document.getElementById("d32").classList.toggle('hidden')
    document.getElementById("d33").classList.toggle('hidden')

    }
}



const btn4 = document.querySelector('#btn4')
const d41= document.getElementById('d41')
const d42= document.getElementById('d42')
const d43= document.getElementById('d43')
const logo4 = document.getElementById('logo4')

btn4.onclick=() =>
{    
    document.getElementById("d41").classList.toggle('hidden')
    document.getElementById("d42").classList.toggle('hidden')
    document.getElementById("d43").classList.toggle('hidden')
    document.getElementById("logo4").setAttribute("width","100%")
    document.getElementById("logo4").setAttribute("height","100%")
    document.getElementById("logo4").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo4").style.left="0px"
    document.getElementById("close4").classList.toggle('hidden')
    const close4 =document.querySelector("#close4" );
    close4.onclick= ()=> 
    {
    document.getElementById("close4").classList.toggle('hidden')
    document.getElementById("logo4").setAttribute("width","100px")
    document.getElementById("logo4").style.borderRadius="50px  0 "
    document.getElementById("logo4").style.left="-25px"
    document.getElementById("d41").classList.toggle('hidden')
    document.getElementById("d42").classList.toggle('hidden')
    document.getElementById("d43").classList.toggle('hidden')

    }
}



const btn5 = document.querySelector('#btn5')
const d51= document.getElementById('d51')
const d52= document.getElementById('d52')
const d53= document.getElementById('d53')
const logo5 = document.getElementById('logo5')

btn5.onclick=() =>
{    
    document.getElementById("d51").classList.toggle('hidden')
    document.getElementById("d52").classList.toggle('hidden')
    document.getElementById("d53").classList.toggle('hidden')
    document.getElementById("logo5").setAttribute("width","100%")
    document.getElementById("logo5").setAttribute("height","100%")
    document.getElementById("logo5").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo5").style.left="0px"
    document.getElementById("close5").classList.toggle('hidden')
    const close5 =document.querySelector("#close5");
    close5.onclick= ()=> 
    {
    document.getElementById("close5").classList.toggle('hidden')
    document.getElementById("logo5").setAttribute("width","100px")
    document.getElementById("logo5").style.borderRadius="50px  0 "
    document.getElementById("logo5").style.left="-25px"
    document.getElementById("d51").classList.toggle('hidden')
    document.getElementById("d52").classList.toggle('hidden')
    document.getElementById("d53").classList.toggle('hidden')

    }
}



const btn6 = document.querySelector('#btn6')
const d61= document.getElementById('d61')
const d62= document.getElementById('d62')
const d63= document.getElementById('d63')
const logo6 = document.getElementById('logo6')

btn6.onclick=() =>
{    
    document.getElementById("d61").classList.toggle('hidden')
    document.getElementById("d62").classList.toggle('hidden')
    document.getElementById("d63").classList.toggle('hidden')
    document.getElementById("logo6").setAttribute("width","100%")
    document.getElementById("logo6").setAttribute("height","100%")
    document.getElementById("logo6").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo6").style.left="0px"
    document.getElementById("close6").classList.toggle('hidden')
    const close6 =document.querySelector("#close6");
    close6.onclick= ()=> 
    {
    document.getElementById("close6").classList.toggle('hidden')
    document.getElementById("logo6").setAttribute("width","100px")
    document.getElementById("logo6").style.borderRadius="50px  0 "
    document.getElementById("logo6").style.left="-25px"
    document.getElementById("d61").classList.toggle('hidden')
    document.getElementById("d62").classList.toggle('hidden')
    document.getElementById("d63").classList.toggle('hidden')

    }
}



const btn7 = document.querySelector('#btn7')
const d71= document.getElementById('d71')
const d72= document.getElementById('d72')
const d73= document.getElementById('d73')
const logo7 = document.getElementById('logo7')

btn7.onclick=() =>
{    
    document.getElementById("d71").classList.toggle('hidden')
    document.getElementById("d72").classList.toggle('hidden')
    document.getElementById("d73").classList.toggle('hidden')
    document.getElementById("logo7").setAttribute("width","100%")
    document.getElementById("logo7").setAttribute("height","100%")
    document.getElementById("logo7").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo7").style.left="0px"
    document.getElementById("close7").classList.toggle('hidden')
    const close7 =document.querySelector("#close7");
    close7.onclick= ()=> 
    {
    document.getElementById("close7").classList.toggle('hidden')
    document.getElementById("logo7").setAttribute("width","100px")
    document.getElementById("logo7").style.borderRadius="50px  0 "
    document.getElementById("logo7").style.left="-25px"
    document.getElementById("d71").classList.toggle('hidden')
    document.getElementById("d72").classList.toggle('hidden')
    document.getElementById("d73").classList.toggle('hidden')

    }
}


const btn8 = document.querySelector('#btn8')
const d81= document.getElementById('d81')
const d82= document.getElementById('d82')
const d83= document.getElementById('d83')
const logo8 = document.getElementById('logo8')

btn8.onclick=() =>
{    
    document.getElementById("d81").classList.toggle('hidden')
    document.getElementById("d82").classList.toggle('hidden')
    document.getElementById("d83").classList.toggle('hidden')
    document.getElementById("logo8").setAttribute("width","100%")
    document.getElementById("logo8").setAttribute("height","100%")
    document.getElementById("logo8").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo8").style.left="0px"
    document.getElementById("close8").classList.toggle('hidden')
    const close8 =document.querySelector("#close8");
    close8.onclick= ()=> 
    {
    document.getElementById("close8").classList.toggle('hidden')
    document.getElementById("logo8").setAttribute("width","100px")
    document.getElementById("logo8").style.borderRadius="50px  0 "
    document.getElementById("logo8").style.left="-25px"
    document.getElementById("d81").classList.toggle('hidden')
    document.getElementById("d82").classList.toggle('hidden')
    document.getElementById("d83").classList.toggle('hidden')

    }
}


const btn9 = document.querySelector('#btn9')
const d91= document.getElementById('d1')
const d92= document.getElementById('d2')
const d93= document.getElementById('d3')
const logo9 = document.getElementById('logo9')

btn9.onclick=() =>
{    
    document.getElementById("d91").classList.toggle('hidden')
    document.getElementById("d92").classList.toggle('hidden')
    document.getElementById("d93").classList.toggle('hidden')
    document.getElementById("logo9").setAttribute("width","100%")
    document.getElementById("logo9").setAttribute("height","100%")
    document.getElementById("logo9").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo9").style.left="0px"
    document.getElementById("close9").classList.toggle('hidden')
    const close9 =document.querySelector("#close9");
    close9.onclick= ()=> 
    {
    document.getElementById("close9").classList.toggle('hidden')
    document.getElementById("logo9").setAttribute("width","100px")
    document.getElementById("logo9").style.borderRadius="50px  0 "
    document.getElementById("logo9").style.left="-25px"
    document.getElementById("d91").classList.toggle('hidden')
    document.getElementById("d92").classList.toggle('hidden')
    document.getElementById("d93").classList.toggle('hidden')

    }
}



const btn10 = document.querySelector('#btn10')
const d101= document.getElementById('d1')
const d102= document.getElementById('d2')
const d103= document.getElementById('d3')
const logo10 = document.getElementById('logo10')

btn10.onclick=() =>
{    
    document.getElementById("d101").classList.toggle('hidden')
    document.getElementById("d102").classList.toggle('hidden')
    document.getElementById("d103").classList.toggle('hidden')
    document.getElementById("logo10").setAttribute("width","100%")
    document.getElementById("logo10").setAttribute("height","100%")
    document.getElementById("logo10").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo10").style.left="0px"
    document.getElementById("close10").classList.toggle('hidden')
    const close10 =document.querySelector("#close10");
    close10.onclick= ()=> 
    {
    document.getElementById("close10").classList.toggle('hidden')
    document.getElementById("logo10").setAttribute("width","100px")
    document.getElementById("logo10").style.borderRadius="50px  0 "
    document.getElementById("logo10").style.left="-25px"
    document.getElementById("d101").classList.toggle('hidden')
    document.getElementById("d102").classList.toggle('hidden')
    document.getElementById("d103").classList.toggle('hidden')

    }
}



const btn11 = document.querySelector('#btn11')
const d111= document.getElementById('d1')
const d112= document.getElementById('d2')
const d113= document.getElementById('d3')
const logo11 = document.getElementById('logo11')

btn11.onclick=() =>
{    
    document.getElementById("d111").classList.toggle('hidden')
    document.getElementById("d112").classList.toggle('hidden')
    document.getElementById("d113").classList.toggle('hidden')
    document.getElementById("logo11").setAttribute("width","100%")
    document.getElementById("logo11").setAttribute("height","100%")
    document.getElementById("logo11").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo11").style.left="0px"
    document.getElementById("close11").classList.toggle('hidden')
    const close11 =document.querySelector("#close11");
    close11.onclick= ()=> 
    {
    document.getElementById("close11").classList.toggle('hidden')
    document.getElementById("logo11").setAttribute("width","100px")
    document.getElementById("logo11").style.borderRadius="50px  0 "
    document.getElementById("logo11").style.left="-25px"
    document.getElementById("d111").classList.toggle('hidden')
    document.getElementById("d112").classList.toggle('hidden')
    document.getElementById("d113").classList.toggle('hidden')

    }
}




const btn12 = document.querySelector('#btn12')
const d121= document.getElementById('d1')
const d122= document.getElementById('d2')
const d123= document.getElementById('d3')
const logo12 = document.getElementById('logo12')

btn12.onclick=() =>
{    
    document.getElementById("d121").classList.toggle('hidden')
    document.getElementById("d122").classList.toggle('hidden')
    document.getElementById("d123").classList.toggle('hidden')
    document.getElementById("logo12").setAttribute("width","100%")
    document.getElementById("logo12").setAttribute("height","100%")
    document.getElementById("logo12").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo12").style.left="0px"
    document.getElementById("close12").classList.toggle('hidden')
    const close12 =document.querySelector("#close12");
    close12.onclick= ()=> 
    {
    document.getElementById("close12").classList.toggle('hidden')
    document.getElementById("logo12").setAttribute("width","100px")
    document.getElementById("logo12").style.borderRadius="50px  0 "
    document.getElementById("logo12").style.left="-25px"
    document.getElementById("d121").classList.toggle('hidden')
    document.getElementById("d122").classList.toggle('hidden')
    document.getElementById("d123").classList.toggle('hidden')

    }
}





const btn13 = document.querySelector('#btn13')
const d131= document.getElementById('d1')
const d132= document.getElementById('d2')
const d133= document.getElementById('d3')
const logo13 = document.getElementById('logo13')

btn13.onclick=() =>
{    
    document.getElementById("d131").classList.toggle('hidden')
    document.getElementById("d132").classList.toggle('hidden')
    document.getElementById("d133").classList.toggle('hidden')
    document.getElementById("logo13").setAttribute("width","100%")
    document.getElementById("logo13").setAttribute("height","100%")
    document.getElementById("logo13").style.borderRadius="50px 0 0 0 "
    document.getElementById("logo13").style.left="0px"
    document.getElementById("close13").classList.toggle('hidden')
    const close13 =document.querySelector("#close13");
    close13.onclick= ()=> 
    {
    document.getElementById("close13").classList.toggle('hidden')
    document.getElementById("logo13").setAttribute("width","100px")
    document.getElementById("logo13").style.borderRadius="50px  0 "
    document.getElementById("logo13").style.left="-25px"
    document.getElementById("d131").classList.toggle('hidden')
    document.getElementById("d132").classList.toggle('hidden')
    document.getElementById("d133").classList.toggle('hidden')

    }
}


 

const up =document.querySelector("#up");

window.onscroll= () => {
    if(this.scrollY >= 1000){
        up.classList.add('show')
    }
    else {
        up.classList.remove("show")
    }
}

up.onclick=() => {
    window.scrollTo({
        top:0,
        behavior:"smooth"
    })
}


const moon =document.getElementById('moon')
const btn_dark =document.getElementById('btn-dark')
const body =document.getElementById('body')
const logo_f =document.getElementById('logo-f')
const bg =document.querySelectorAll('.bg')

moon.addEventListener('click', () => {
    document.getElementById('moon').classList.toggle('fa-sun')
    if(    document.getElementById('moon').classList.toggle('fa-moon')){
        body.style.transition='2s'
        body.style.backgroundColor='#242424'
        document.getElementById('logo-f').setAttribute('src','image/png.png')
        for(let count=0 ; count<=bg.length ; count++ ){
            bg[count].style.backgroundColor='#242424'
            bg[count].style.transition='2s'
   
        }
       

    }else{
        body.style.transition='2s'
        body.style.backgroundColor='white'
        document.getElementById('logo-f').setAttribute('src','image/لوغو دهبي2.png')
        for(let count=0 ; count<=bg.length ; count++ ){
            bg[count].style.backgroundColor='white'
            bg[count].style.transition='2s'

        }document.getElementById('f').style.color= '#efbe07'

      
    }
})

//زر مشاركة الموقع
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

const btn_advice =document.querySelector('#btn-advice')

btn_advice.addEventListener('click',() =>{
    document.getElementById('advice').classList.toggle('hidden')
})