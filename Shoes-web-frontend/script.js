console.log('starting script')
const product1 = document.getElementById('product1')
const wrapper = document.getElementById('wrapper')
const newBox = document.getElementById('newBox')
const home = document.getElementById('home')
const header = document.getElementById('header') 
const productBox1= document.getElementById('productBox1')
const productBox2= document.getElementById('productBox2')
const productBox3= document.getElementById('productBox3')
const productBox4= document.getElementById('productBox4')
const productBox5= document.getElementById('productBox5')
const productBox6= document.getElementById('productBox6')

function getDetail(nomor) {
    console.log('produk: ', nomor)
    newBox.style.display = "block"
    wrapper.style.display = "none"
    home.style.display = "none"
    header.style.display = "none"

    switch (nomor) {
        case 1:
            productBox1.style.display ="flex"
            break;

        case 2:
            productBox2.style.display ="flex"
            break;

        case 3:
            productBox3.style.display ="flex"
            break;

        case 4:
            productBox4.style.display ="flex"
            break;

        case 5:
            productBox5.style.display ="flex"
            break;     
                            
        case 6:
            productBox6.style.display ="flex"
            break;    
        default:
            break;
    }
}

function back(nomor){
    console.log('back: wrapper ')
    newBox.style.display = "none"
    wrapper.style.display = "block"
    header.style.display = "flex"
    btn1.style.display ="flex"

    switch (nomor) {
        
        case 1:
            productBox1.style.display = "none"
            break;
    
        case 2:
            productBox2.style.display = "none"
            break;
    
        case 3:
            productBox3.style.display = "none"
            break;
    
        case 4:
            productBox4.style.display = "none"
            break;
    
        case 5:
            productBox5.style.display = "none"
            break;     
                            
        case 6:
            productBox6.style.display = "none"
            break;    
        default:
            break;
    }

}


let slides = document.querySelectorAll('.slide-container');
let index = 0;

function next(){
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

function prev(){
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}


function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
  }
  
  function fadeOut(){
    setInterval(loader, 3000);
  }
  
  window.onload = fadeOut;

