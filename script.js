let hours = document.querySelector(".hours");
let minutes = document.querySelector(".minutes");
let seconds = document.querySelector(".seconds");
let am = document.querySelector(".am");
let hr12 = document.querySelector(".hr12");
let hr24 = document.querySelector(".hr24");
let body = document.body;
let header = document.querySelector(".header");
let wish = ['Good Morning Champ!!⛅' , 'Good Afternoon Champ!!🌞' , 'Good Evening Champ!!🌄' , 'Good Night Champ!!🌛']
let  wishContainer = document.querySelector(".wish-container")
window.onload = () => {
   

  if (hour >= 19) {
    wishContainer.innerHTML = `<h2>${wish[3]}</h2>`
    am.innerText = "";
    am.innerText = "PM";
    header.style.color = "white"
    body.style.backgroundImage = `url("https://images.unsplash.com/photo-1726711340790-ccaa3ae7e0c9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
body.style.backgroundPosition = "bottom";
  }else if (hour >= 16){
    wishContainer.innerHTML = `<h2>${wish[2]}</h2>`


    body.style.backgroundImage = `url("https://images.unsplash.com/photo-1527846957740-2fe555bc8fc6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
    body.style.backgroundPosition = "top";
}else if (hour >= 12){
  wishContainer.innerHTML = `<h2>${wish[1]}</h2>`


  body.style.backgroundImage = `url("https://images.unsplash.com/photo-1724296603621-6cf1996c508b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D")`
  body.style.backgroundPosition = "bottom";
}else {
  wishContainer.innerHTML = `<h2>${wish[0]}</h2>`


    am.innerText = "";
    am.innerText = "AM";
    body.style.backgroundImage = `url("https://images.unsplash.com/photo-1499002238440-d264edd596ec?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80")`
    body.style.backgroundPosition = "center";
  }

  Clock24();
};

let hour = new Date().getHours();
let minute = new Date().getMinutes();
let second = new Date().getSeconds();
minutes.innerText = minute;
seconds.innerText = second;
hours.innerText = hour;

let Clock12Id;
let Clock24Id;

function Clock24() {
  am.style.visibility = "hidden";
  Clock24Id = setInterval(() => {
    if (second == 60) {
      second = 0;
      minute++;
    }

    if (minute == 60) {
      minute = 0;
      hour++;
    }
    if (hour == 24) {
      hour = 0;
    }
    hours.innerText = hour;
    minutes.innerText = minute;
    seconds.innerText = second;
    second++;
  }, 1000);
}

function Clock12() {
  let clock12Hr = hour;
  am.style.visibility = "visible";

  Clock12Id = setInterval(() => {
    clock12Hr = clock12Hr % 12;
    if (hour >= 12) {
      am.innerText = "";
      am.innerText = "PM";
    } else {
      am.innerText = "";
      am.innerText = "AM";
    }

    if (second == 60) {
      second = 0;
      minute++;
    }

    if (minute == 60) {
      minute = 0;
      clock12Hr++;
    }

    if (clock12Hr == 0) {
      clock12Hr = 12;
    }
    hours.innerText = clock12Hr;
    minutes.innerText = minute;
    seconds.innerText = second;
    second++;
  }, 1000);
}

document.addEventListener("click", (event) => {
  if (event.target.classList.contains("hr12")) {
    Clock12();
    clearInterval(Clock24Id);
  }

  if (event.target.classList.contains("hr24")) {
    Clock24();
    clearInterval(Clock12Id);
  }
});
