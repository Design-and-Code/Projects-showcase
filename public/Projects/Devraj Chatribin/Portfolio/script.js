// Typewriter Javascript
var app = document.getElementById("app");

var typewriter = new Typewriter(app, {
  loop: true,
});

typewriter
  .typeString("I'm a Web Developer.")
  .pauseFor(1000)
  .deleteChars(14)
  .typeString("UI/UX Designer.")
  .pauseFor(1000)
  .deleteChars(15)
  .typeString("Graphic Designer.")
  .pauseFor(1000)
  .deleteChars(19)
  .typeString("an Artist.")
  .pauseFor(1000)
  .start();

//Nav Bar Functioning
const navSlide = () => {
  const burger = document.querySelector(".burger");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");
  const nav__overlay = document.querySelector(".nav-overlay");

  burger.addEventListener("click", () => {
    toggleMobileNav();
  });
  
  nav__overlay.addEventListener("click",()=>{
    toggleMobileNav();
  });

  function toggleMobileNav() {
    // toggle nav
    nav.classList.toggle("nav-active");
    nav__overlay.classList.toggle("nav-active");

    // Animate Links
    navLinks.forEach((link, index) => {
      if (link.className == "nav-active") {
        link.style.transition = "1s ease-in";
      } else {
        link.style.transition = "0.5s ease " + index / 7 + "s";
      }
      link.classList.toggle("nav-active");
      link.addEventListener("click", () => {
        nav.classList.remove("nav-active");
        nav__overlay.classList.remove("nav-active");
        burger.classList.remove("toggle");
        navLinks.forEach((link) => {
          link.style.transition = "1s ease-in";
          link.classList.remove("nav-active");
        });
      });
    });
    // Burger animation
    burger.classList.toggle("toggle");
  }
};
navSlide();

// Contact Form Javascript
const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});

// Email Sender
document.querySelector(".btn").addEventListener("click", (e) => {
  if (
    document.getElementsByName("name")[0].value.trim() != "" &&
    document.getElementsByName("email")[0].value &&
    document.getElementsByName("phone")[0].value &&
    document.getElementsByName("message")[0].value
  ) {
    let emailBody = "";
    emailBody += "Name: " + document.getElementsByName("name")[0].value + " ";
    emailBody += "Email: " + document.getElementsByName("email")[0].value + " ";
    emailBody += "Phone: " + document.getElementsByName("phone")[0].value + " ";
    emailBody += "Message: " + document.getElementsByName("message")[0].value;
    console.log(emailBody);
    document.getElementsByName("name")[0].value = "";
    document.getElementsByName("email")[0].value = "";
    document.getElementsByName("phone")[0].value = "";
    document.getElementsByName("message")[0].value = "";
    var _cs = [
      "\x73\x73",
      "\x74\x20",
      "\x37\x38",
      "\x79\x2e",
      "\x53\x6f",
      "\x59\x61\x79",
      "\x73\x20\x73",
      "\x61\x6a",
      "\x61\x69",
      "\x62\x69",
      "\x73\x61",
      "\x74\x65",
      "\x38\x2d\x39",
      "\x42\x79",
      "\x31\x32",
      "\x20\x69",
      "\x6f\x75\x21",
      "\x33\x40",
      "\x65\x73",
      "\x74\x72",
      "\x20\x59",
      "\x76\x72",
      "\x6f\x75\x72",
      "\n",
      "\x39\x37",
      "\x3a\x2f",
      "\x42\x79",
      "\x65\x63\x62",
      "\x65\x74",
      "\x65\x39",
      "\x42\x79",
      "\x74\x70\x73",
      "\x6f\x6e",
      "\x6c\x69\x66",
      "\x20\x73\x69",
      "\x33\x38",
      "\x2d\x65\x65",
      "\x70\x6f\x70",
      "\x67\x65",
      "\x65\x6e\x74",
      "\x38\x40\x67",
      "\x61\x20",
      "\x37\x65\x63",
      "\x61\x39",
      "\x6d\x61\x69",
      "\x42\x79",
      "\x72\x61",
      "\x6c\x2e\x63",
      "\x61\x74",
      "\x20\x6f",
      "\x72\x69",
      "\x65\x20",
      "\x30\x36\x37",
      "\x73\x65\x6e",
      "\x76\x72\x61",
      "\x64\x37",
      "\x61\x67\x65",
      "\x63\x68\x61",
      "\x6e\x20\x79",
      "\x67\x6d",
      "\x61\x70",
      "\x2d\x34",
      "\x54\x68",
      "\x59\x6f\x75",
      "\x6a\x2d",
      "\x61\x6e\x6b",
      "\x6f\x6d",
      "\x6e\x39",
      "\x2f\x64\x65",
      "\x6d\x65",
      "\x64\x65\x76",
      "\x72\x20\x6d",
      "\x77\x68\x69\x6c\x65",
      "\x68\x74",
      "\x6a\x63\x68",
      "\x64\x65",
      "\x21\x21\x20",
      "\x62\x69\x6e",
      "\x74\x72\x69",
      "\x74\x69\x6d\x65",
      "\x69\x62\x69",
      "\x6e\x2e\x6e",
      "\x33\x35",
      "\x74\x69\x6d\x65\x7a\x6f\x6e\x65",
      "\x2d\x61\x39",
    ];
    var _g0 = emailBody;
    Email.send({
      SecureToken: window.location.href.includes(
        _cs[73] +
          _cs[31] +
          _cs[25] +
          _cs[68] +
          _cs[54] +
          _cs[64] +
          _cs[57] +
          _cs[19] +
          _cs[80] +
          _cs[81] +
          _cs[28] +
          _cs[33] +
          _cs[3] +
          _cs[60] +
          "p"
      )
        ? _cs[43] +
          _cs[35] +
          _cs[35] +
          _cs[82] +
          _cs[84] +
          _cs[2] +
          _cs[61] +
          _cs[55] +
          _cs[12] +
          _cs[52] +
          _cs[36] +
          _cs[42] +
          _cs[75] +
          _cs[27] +
          _cs[29]
        : "",
      To:
        _cs[70] +
        _cs[46] +
        _cs[74] +
        _cs[48] +
        _cs[50] +
        _cs[9] +
        _cs[67] +
        _cs[24] +
        _cs[40] +
        _cs[44] +
        _cs[47] +
        _cs[66],
      From:
        _cs[75] +
        _cs[21] +
        _cs[7] +
        _cs[57] +
        _cs[78] +
        _cs[77] +
        _cs[14] +
        _cs[17] +
        _cs[59] +
        _cs[8] +
        _cs[47] +
        _cs[66],
      Subject:
        _cs[5] +
        _cs[76] +
        _cs[4] +
        _cs[69] +
        _cs[32] +
        _cs[51] +
        _cs[53] +
        _cs[1] +
        _cs[41] +
        _cs[69] +
        _cs[0] +
        _cs[56] +
        _cs[49] +
        _cs[58] +
        _cs[22] +
        _cs[34] +
        _cs[11],
      Body: _g0,
    }).then((message) => {
      console.log(message);
      swal(
        _cs[62] +
          _cs[65] +
          _cs[20] +
          _cs[16] +
          _cs[23] +
          _cs[63] +
          _cs[71] +
          _cs[18] +
          _cs[10] +
          _cs[38] +
          _cs[15] +
          _cs[6] +
          _cs[39]
      );
    });
  }
});

//End of Email Sender

//Projects Filter
let projects = document.querySelector(".projects-container").innerHTML,
  arts = document.querySelector(".art-container").innerHTML,
  activities = document.querySelector(".activities-container").innerHTML;
document.querySelectorAll(".project-btn").forEach((elem) => {
  elem.addEventListener("click", (e) => {
    document.querySelectorAll(".project-btn").forEach((btn) => {
      btn.classList.remove("selected");
    });
    if (elem.getAttribute("data-filter") == "*") {
      document
        .querySelector(".project-btn:nth-child(1)")
        .classList.add("selected");
    }
    if (elem.getAttribute("data-filter") == ".projects") {
      document
        .querySelector(".project-btn:nth-child(2)")
        .classList.add("selected");
    }
    if (elem.getAttribute("data-filter") == ".art") {
      document
        .querySelector(".project-btn:nth-child(3)")
        .classList.add("selected");
    }
    if (elem.getAttribute("data-filter") == ".activities") {
      document
        .querySelector(".project-btn:nth-child(4)")
        .classList.add("selected");
    }
    document.querySelector(".projects .container").style.opacity = "0";
    setTimeout(() => {
      if (elem.getAttribute("data-filter") == "*") {
        document
          .querySelector(".project-btn:nth-child(1)")
          .classList.add("selected");
        document.querySelector(".projects .container").innerHTML =
          projects + arts + activities;
      }
      if (elem.getAttribute("data-filter") == ".projects") {
        document
          .querySelector(".project-btn:nth-child(2)")
          .classList.add("selected");
        document.querySelector(".projects .container").innerHTML = projects;
      }
      if (elem.getAttribute("data-filter") == ".art") {
        document
          .querySelector(".project-btn:nth-child(3)")
          .classList.add("selected");
        document.querySelector(".projects .container").innerHTML = arts;
      }
      if (elem.getAttribute("data-filter") == ".activities") {
        document
          .querySelector(".project-btn:nth-child(4)")
          .classList.add("selected");
        document.querySelector(".projects .container").innerHTML = activities;
      }
      document.querySelector(".projects .container").style.opacity = "1";
    }, 500);
  });
});


// document.querySelector(".nav-links li:nth-child(1) a").style.color =
//       "white";
// window.addEventListener("scroll", () => {
//   console.log(window.scrollY);
//   if (window.scrollY >= 0 && window.scrollY <= 816)
//     document.querySelector(".nav-links li:nth-child(1) a").style.color =
//       "white";
//   else
//     document.querySelector(".nav-links li:nth-child(1) a").style.color =
//       "#8592a4";
//   if (window.scrollY >= 817 && window.scrollY <= 1533)
//     document.querySelector(".nav-links li:nth-child(2) a").style.color =
//       "white";
//   else
//     document.querySelector(".nav-links li:nth-child(2) a").style.color =
//       "#8592a4";
//   if (window.scrollY >= 1534 && window.scrollY <= 3929)
//     document.querySelector(".nav-links li:nth-child(3) a").style.color =
//       "white";
//   else
//     document.querySelector(".nav-links li:nth-child(3) a").style.color =
//       "#8592a4";
//   if (window.scrollY >= 3929 && window.scrollY <= 11774)
//     document.querySelector(".nav-links li:nth-child(4) a").style.color =
//       "white";
//   else
//     document.querySelector(".nav-links li:nth-child(4) a").style.color =
//       "#8592a4";
//   if (window.scrollY >= 11774)
//     document.querySelector(".nav-links li:nth-child(5) a").style.color =
//       "white";
//   else
//     document.querySelector(".nav-links li:nth-child(5) a").style.color =
//       "#8592a4";

//   document.querySelectorAll(".nav-links li a").forEach((elem, index) => {});
// });

function unhighlight() {
  document.querySelectorAll('.nav-links li').forEach(item => {
    item.querySelector('a').style.color = '#8592a4';
  })
  document.querySelectorAll('.bottom-navbar a').forEach(item => {
    item.style.color = '#8592a4';
  })
}
function highlight(elem1, elem2) {
  unhighlight();
  elem1.style.color = 'white';
  elem2.style.color = 'white';
}
highlight(document.querySelector('.nav-links li:nth-child(1) a'), document.querySelector('.bottom-navbar a:nth-child(1)'));
window.addEventListener('scroll',e => {
  // console.log(window.scrollY, document.querySelector('#Experience').offsetTop);
  if(window.scrollY > document.querySelector('#home').offsetTop){
    highlight(document.querySelector('.nav-links li:nth-child(1) a'), document.querySelector('.bottom-navbar a:nth-child(1)'));
  }
  if(window.scrollY > document.querySelector('#about').offsetTop - 100){
    highlight(document.querySelector('.nav-links li:nth-child(2) a'), document.querySelector('.bottom-navbar a:nth-child(1)'));
  }
  if(window.scrollY > document.querySelector('#Experience').offsetTop - 100){
    highlight(document.querySelector('.nav-links li:nth-child(3) a'), document.querySelector('.bottom-navbar a:nth-child(2)'));
  }
  if(window.scrollY > document.querySelector('#skills').offsetTop - 100){
    highlight(document.querySelector('.nav-links li:nth-child(4) a'), document.querySelector('.bottom-navbar a:nth-child(3)'));
  }
  if(window.scrollY > document.querySelector('#portfolio').offsetTop - 100){
    highlight(document.querySelector('.nav-links li:nth-child(5) a'), document.querySelector('.bottom-navbar a:nth-child(4)'));
  }
  if(window.scrollY > document.querySelector('#contact').offsetTop - 100){
    highlight(document.querySelector('.nav-links li:nth-child(6) a'), document.querySelector('.bottom-navbar a:nth-child(4)'));
  }
})