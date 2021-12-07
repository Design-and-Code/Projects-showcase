
let fact_content = ['',
    "\" Hogwarts has a LOT of staircases – 142, in fact \"",
    "\" The portraits of Hogwarts all have their own life stories \"",
    "\" Peeves the poltergeist has haunted Hogwarts for many centuries \"",
    "\" Muggles cannot see Hogwarts \" - unknown",
    "\" An enchanted quill and book decide if you’re ready to go to Hogwarts \" ",
    "\" Rowling gave her characters names that reflect their roles in the series. ... \" ",
    "\" Not even the Hogwarts headmaster knows about everything that happens at Hogwarts \" ",
    "\" Each Hogwarts house common room has a different way of getting inside it \" ",
    "\" The Great Hall ceiling is bewitched to look like the sky \" ",
    "\" No matter what day of the week it falls on, the school year in Hogwarts always begins on September 1 \" ",
]

//I have use localStorage for storing value of i , When page will be reload we will see next consecutive fact.
let i = 0;
i = JSON.parse(localStorage.getItem('i'));

window.addEventListener('load', () => {
    i = i + 1;
    if (i == fact_content.length) {
        i = 0;
    }
    else {
        document.querySelector(".fact").innerHTML = `${fact_content[i]}`;
    }
    localStorage.setItem('i', i);
});
mybutton = document.getElementById("myBtn");
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}
function topFunction() {
    //   document.documentElement.scrollTop = 0; 
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth"
    })
    
}