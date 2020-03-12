// Need classes to hide, set opacity to zero
// on-click, the relevant content is revealed in the middle, all the rest is hid. 
var imageChosen = document.getElementById("imageChosen");
var title = document.getElementById("title");
var dLink = document.getElementById("dLink");
var ghRepo = document.getElementById("ghRepo");
var description = document.getElementById("description");


docReady(function () {
    // USE JQUERY
    // var toClick = document.getElementsByClassName(".toClick");
    // console.log("toClick: " + JSON.stringify(toClick));

    // document.querySelector(".toClick").addEventListener("click", showCase);

    document.getElementById("mixerupper").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("mixerupper clicked");
        imageChosen.innerHTML = `<img src="./assets/images/mixeruppersquare.jpg" class="rounded float-left zoom img-fluid" alt="Mixer Upper">`;
        title.innerHTML = `<h2>Mixer Upper</h2>`;
        dLink.innerHTML = `<a href="https://jeqp.github.io/mixer-upper/index.html" target="_blank">Deployed Link</a>`;
        ghRepo.innerHTML = `<a href="https://github.com/JEQP/mixer-upper" target="_blank">GitHub Repo</a>`;
        description.innerHTML = `<p>A dynamic webpage allowing users to search for cocktails and receive an image, ingredients list and instructions. Constructed in a team with Takuji Okubo and Tonnette Stanford. It uses Materialize, jQuery, and the Montserrat font from Google Fonts. The details for the cocktails are drawn from <a href="http://www.thecoctaildb.com target="_blank" alt="The Cocktail Database">The Cocktail Database</a>. My main responsibilities were to construct the API calls and link them via Javascript with the HTML elements.</p>`;

    });

    document.getElementById("weathereye").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("weathereye clicked");
        imageChosen.innerHTML = `<img src="./assets/images/weathereyesquare.jpg" class="rounded float-left zoom img-fluid" alt="Mixer Upper">`;
        title.innerHTML = `<h2>The Weather Eye</h2>`;
        dLink.innerHTML = `<a href="https://jeqp.github.io/the-weather-eye/" target="_blank">Deployed Link</a>`;
        ghRepo.innerHTML = `<a href="https://github.com/JEQP/the-weather-eye" target="_blank">GitHub Repo</a>`;
        description.innerHTML = `<p>A weather app that detects the users location and displays local weather, browser permitting. The user can search for cities, with the searches saved in a list, and delete items from the list. Current weather displays location, date, temperature, humidity, windspeed, and UV Index, with the last one colour-coded for severity. The weather forecast is shown as an icon, and a five day forecast appears below. <br> The app uses jQuery and Bootstrap, and obtains the weather from the <a href="https://openweathermap.org/" target="_blank" alt="Open Weather Map">Open Weather Map API</a>. </p>`;
    });

    document.getElementById("workSched").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("workSched clicked");
        imageChosen.innerHTML = `<img src="./assets/images/workschedsquare.jpg" class="rounded float-left zoom img-fluid" alt="Mixer Upper">`;
        title.innerHTML = `<h2>Work Day Scheduler</h2>`;
        dLink.innerHTML = `<a href="https://jeqp.github.io/day-planner/" target="_blank">Deployed Link</a>`;
        ghRepo.innerHTML = `<a href="https://github.com/JEQP/day-planner" target="_blank">GitHub Repo</a>`;
        description.innerHTML = `<p>This web based app displays segments representing the work day, and allows users to enter and store activites for each hour. The current hour is coloured red, while hours that have passed are gray and hours in the future are green. The time blocks automatically change colour based on the current time. The current date is displayed at the top of the page. The drop down menu allows the user to select any date and display the schedule for that date, including entering, storing, and retrieving activities. It runs on jQuery and Bootstrap.</p>`;
    });

    document.getElementById("opm").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("opm");
        imageChosen.innerHTML = `<img src="./assets/images/opmsquare.jpg" class="rounded float-left zoom img-fluid" alt="Mixer Upper">`;
        title.innerHTML = `<h2>One Page Man</h2>`;
        dLink.innerHTML = `<a href="https://thawing-inlet-42364.herokuapp.com/" target="_blank">Deployed Link</a>`;
        ghRepo.innerHTML = `<a href="https://github.com/SiJBC/project2" target="_blank">GitHub Repo</a>`;
        description.innerHTML = `<p>A full stack application that lets users easily create a customised website. They can choose a theme, upload four images and create three sub-sections with title and text. The iamges are saved on third-party site Cloudinary, and the information is stored in a MySQL database. Layout uses Materialize, and the site uses Sequelize, Express, Handlebars and jQuery.</p>`;
    });

    document.getElementById("eatBurger").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("eatBurger");
        imageChosen.innerHTML = `<img src="./assets/images/burgersquare.jpg" class="rounded float-left zoom img-fluid" alt="Mixer Upper">`;
        title.innerHTML = `<h2>Eat Da Burger</h2>`;
        dLink.innerHTML = `<a href="https://quiet-eyrie-21871.herokuapp.com/" target="_blank">Deployed Link</a>`;
        ghRepo.innerHTML = `<a href="https://github.com/JEQP/burger" target="_blank">GitHub Repo</a>`;
        description.innerHTML = `<p>Allows people to create hamburgers and then devour them cybernetically. The program uses an MVC architecture (model, view, controller), and utilises jQuery, Bootstrap, Handlebars, Express,and MySQL.</p>`;
    });

    document.getElementById("empTrack").addEventListener("click", function (event) {
        event.preventDefault();
        event.stopPropagation();
        console.log("empTrack");
        imageChosen.innerHTML = `<img src="./assets/images/employeetrackersquare.jpg" class="rounded float-left zoom img-fluid" alt="Mixer Upper">`;
        title.innerHTML = `<h2>Employee Tracker CMS</h2>`;
        dLink.innerHTML = `<a href="https://github.com/JEQP/Employee_Tracker" target="_blank">CLI program</a>`;
        ghRepo.innerHTML = `<a href="https://github.com/JEQP/Employee_Tracker" target="_blank">GitHub Repo</a>`;
        description.innerHTML = `<p>This is a command line interface to allow users to interact with an employee database to view, create and update files. In the initial screen users choose to add, view, update a file, or leave the system. Uses Node.js and MySQL.</p>`;
    });
});

// hamburger menu
// var topMenuButton = document.querySelector(".navbar-toggler");
// var topMenuClassName = document.querySelector(".navbar-toggler-icon");
// var activeModificator = "--nav-item";

// topMenuButton.addEventListener('click', topMenuButtonChange);


//     function topMenuButtonChange() {
//         toggleClass(topMenuClassName, topMenuButton);
//         topMenuShow();
//     }

//     function topMenuShow() {
//         topMenuWindow.style.display = (topMenuWindow.style.display === "block") ? "none": "block";
//     }
//     function toggleClass(className, elem, active) {
//         var activeName = (active === undefined) ? activeModificator : active;
//         var element = (elem === undefined) ? className : elem;
//         element.classList.toggle(className);
//         element.classList.toggle(className + activeName);
//     }



// This function ensures the page is loaded before Javascript is run.
function docReady(fn) {
    // see if DOM is already available
    if (document.readyState === "complete" || document.readyState === "interactive") {
        // call on next available tick
        setTimeout(fn, 1);
    } else {
        document.addEventListener("DOMContentLoaded", fn);
    }
} 