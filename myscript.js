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
let contatore = 0;
const rightImagesContainer = document.querySelector('.ms_container2');
const leftImagesContainer = document.querySelector('.ms_anteprima');

for(let count=0; count<items.length; count++)
{
    leftImagesContainer.innerHTML += `<div class=" ms_left_img " id="sx_img_${count}">
        <img src="${items[count]}">  
    </div>`
}

for( let count = 0; count < items.length; count++ )
{
    rightImagesContainer.innerHTML += `<div class="col p-0 ms_img_cont right_image_${items[count]}">
            <img src="${items[count]}">          
    </div>`
}

let idIncrem = 0;
let imgActive = document.getElementById('sx_img_'+idIncrem);
imgActive.classList.add('active');

const prev = document.getElementById('up');
const next = document.getElementById('down');

next.addEventListener('click',function(){

    idIncrem++;
    imgActive.classList.remove('active');
    imgActive = document.getElementById('sx_img_'+idIncrem);
    imgActive.classList.add('active');
    
})

prev.addEventListener('click',function(){

    idIncrem--;
    imgActive.classList.remove('active');
    imgActive = document.getElementById('sx_img_'+idIncrem);
    imgActive.classList.add('active');
    
})







