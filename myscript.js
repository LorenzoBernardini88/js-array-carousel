const items = [
    'img/01.jpg',
    'img/02.jpg',
    'img/03.jpg',
    'img/04.jpg',
    'img/05.jpg'
];

const title = [
    'Svezia',
    'Svizzera',
    'Gran Bretagna',
    'Germania',
    'Paradise'
]

const text = [
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam, cumque provident totam omnis, magnam dolores dolorum corporis.',
    'Lorem ipsum',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
    'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
    'Et temporibus voluptatum suscipit tempore aliquid deleniti aut veniam inventore eligendi ex ad ullam,',
]

const rightImagesContainer = document.querySelector('.ms_container2');
const leftImagesContainer = document.querySelector('.ms_anteprima');

for(let count=0; count<items.length; count++)
{
    leftImagesContainer.innerHTML += `<div class=" ms_left_img " id="sx_img_${count}">
        <div class="img_testo">
            <h1>${title[count]}</h1>
            <p>${text[count]}</p>
        </div>
        <img src="${items[count]}">  
    </div>`
}

for( let count = 0; count < items.length; count++ )
{
    rightImagesContainer.innerHTML += `<div class="col p-0 ms_img_cont" id="dx_img_${count}">
            <img src="${items[count]}">          
    </div>`
}

let idIncrem = 0;
let imgActive = document.getElementById('sx_img_'+idIncrem);
imgActive.classList.add('active');

let imgBorder = document.getElementById('dx_img_'+idIncrem);
imgBorder.classList.add('border_active');



const prev = document.getElementById('up');
const next = document.getElementById('down');

next.addEventListener('click',function(){

    idIncrem++;

    if(idIncrem > 4){
        idIncrem = 0;
    }

    imgActive.classList.remove('active');
    imgActive = document.getElementById('sx_img_'+idIncrem);
    imgActive.classList.add('active');
    imgBorder.classList.remove('border_active');
    imgBorder = document.getElementById('dx_img_'+idIncrem);
    imgBorder.classList.add('border_active');
    
})

prev.addEventListener('click',function(){

    idIncrem--;

    if(idIncrem < 0){
        idIncrem = 4;
    }

    imgActive.classList.remove('active');
    imgActive = document.getElementById('sx_img_'+idIncrem);
    imgActive.classList.add('active');
    imgBorder.classList.remove('border_active');
    imgBorder = document.getElementById('dx_img_'+idIncrem);
    imgBorder.classList.add('border_active');
    
})







