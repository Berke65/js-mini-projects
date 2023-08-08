// rewiev dataları

const reviews = [
{
    id: 1,
    name: 'ayse düsmez',
    job: 'boss',
    img: 'https://www.course-api.com/images/people/person-1.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur',
},
{
    id: 2,
    name: 'şule sakız',
    job: 'web designer',
    img: 'https://www.course-api.com/images/people/person-2.jpeg',
    text: 'Lorem ipsum dolor sit amet consectetur acdsf dfmlsdf lfdsflsdf',
},
{
    id: 3,
    name:'anderson talisca',
    job:'football player',
    img: 'https://www.course-api.com/images/people/person-4.jpeg',
    text: 'Lorem ipsum dolor',
},
];

// burada itemleri seciyoruz

const img = document.getElementById('person-img');
const author = document.getElementById('author');
const job = document.getElementById('job');
const info = document.getElementById('info');

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const randomBtn = document.querySelector('.random-btn');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function () {
    const item = reviews[currentItem];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
});


function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.text;
}

nextBtn.addEventListener('click', () => {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
      }
      showPerson(currentItem);
    });

    prevBtn.addEventListener('click', () => {
        currentItem--;
        if (currentItem < 0) {
          currentItem = reviews.length - 1;
        }
        showPerson(currentItem);
      });

      randomBtn.addEventListener('click', () => {
        console.log('hello');

    currentItem = Math.floor(Math.random() * reviews.length);
        showPerson(currentItem);
      });