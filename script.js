const projectsContainer = document.getElementById("projects");

const projects = [
  {
    image: './images/coffee-shop.jpg',
    link: 'https://coffee-shop-shopify-context.netlify.app/',
    github: '',
    name: 'Coffee Stop',
    description: 'Full stack React based Shopify integrated Coffee Shop featuring 10 plus pages, a dynamic cart accessible from multiple pages and custom design.'
  },
  {
    image: './images/rps.png',
    link: 'https://loveliiivelaugh.github.io/nu-javascript03-mini-project/',
    github: '',
    name: 'Rock Paper Scissors',
    description: "A vanilla JavaScript Rock Paper Scissor's game."
  },
  {
    image: './images/cli-employee-management.png',
    link: '',
    github: 'https://github.com/loveliiivelaugh/cli-employee-management-system',
    name: 'CLI Employee Management',
    description: "A command line application to manage employees in a MySQL database. Built with NodeJs. It uses the Inquirer package as well as MySQL to enable interacting with the command line as well as storing and retrieving information from the database. Utilizes OOP design."
  },
  {
    image: './images/ecommerce-backend.png',
    link: '',
    github: 'https://github.com/loveliiivelaugh/e-commerce-backend',
    name: 'E-Commerce Backend',
    description: "A sample build out of an ecommerce backend. Built using JavaScript, ExpressJS, MySQL, and Sequelize."
  },
  {
    image: '',
    link: 'https://sqlbars-tech-blog.herokuapp.com/',
    github: 'https://github.com/loveliiivelaugh/sqlbars-tech-blog',
    name: 'SQL Bars Tech Blog',
    description: ""
  },
  {
    image: '',
    link: 'https://spotify-community.herokuapp.com/',
    github: 'https://github.com/loveliiivelaugh/spotify-community',
    name: 'Spotify Community',
    description: ""
  },
  {
    image: './images/workday-scheduler.png',
    link: 'https://loveliiivelaugh.github.io/nu-hw5-daily-scheduler/',
    github: 'https://github.com/loveliiivelaugh/nu-hw5-daily-scheduler',
    name: 'Work Day Scheduler',
    description: 'A small daily scheduler app built with vanilla HTML, CSS, and JavaScript. Seperates the day into hourly time blocks that the user can store notes and appointments in. Data is persisted using local storage.'
  },
  {
    image: './images/exercise-tracker.png',
    link: 'https://fire-react-exercise-tracker.netlify.app/',
    github: 'https://github.com/loveliiivelaugh/exercise-tracker',
    name: 'React Material Exercise Tracker',
    description: 'A small React app to track exercise activity. Features user authentication and real time database storage to store daily activity data. Includes a chart to be used for data visualization.'
  },
  {
    image: './images/code-quiz.png',
    link: 'https://loveliiivelaugh.github.io/nu-hw4-coding-quiz/',
    github: 'https://github.com/loveliiivelaugh/nu-hw4-coding-quiz',
    name: 'Code Quiz',
    description: ' A small quiz application to repeatedly ask the user coding practice questions until either the time runs out or the questions run out and keeps track of the score and the time along the way.'
  },
  {
    image: './images/todo.jpg',
    link: 'https://learnjs-todo.herokuapp.com/',
    github: '',
    name: 'To Do List',
    description: 'Full stack simple to do app, highlighting the use of CRUD operations, utilizing MongoDB for a database featuring simple design and deployed using Heroku.'
  },
  {
    image: './images/bootstrap-weather-dashboard.png',
    link: 'loveliiivelaugh.github.io/nu-hw6-weather-dashboard/',
    github: 'https://github.com/loveliiivelaugh/nu-hw6-weather-dashboard',
    name: 'Weather Dashboard',
    description: 'A small weather application featuring the ability to find weather and 5-day forecasts for multiple cities of choosing. This application makes use of the OpenWeatherAPI for live weather data.'
  },
  {
    image: './images/employee-management-system-screenshot.png',
    link: 'https://fire-react-employee-management.netlify.app/',
    github: '',
    name: 'Employee Management System',
    description: 'Employee management system built with React, MaterialUI, Firebase for auth and for the noSql Firestore database. This is an attempt to build this project ahead of having to build it as part of a coding bootcamp curriculum I am about to begin.'
  },
  {
    image: './images/fictional-university.jpg',
    link: 'http://michaelw4.sgedu.site/',
    github: '',
    name: 'Fictional University',
    description: 'A Wordpress powered Fictional University website featuring 10 plus pages and a custom hand built theme. Also features custom post types and custom ...'
  },
  {
    image: './images/react-weather.png',
    link: 'adoring-mcclintock-6017c8.netlify.app/',
    github: 'https://github.com/loveliiivelaugh/react-weather-app',
    name: 'React Weather App',
    description: 'A small weather app built with React and OpenWeather API.'
  },
  {
    image: './images/any-eats.jpg',
    link: 'https://kristin-serverless-store.netlify.app/',
    github: '',
    name: 'Any Eats',
    description: 'Gatsby powered Stripe integrated simple single page e-commerce website.'
  },
  {
    image: './images/2020-election-api.png',
    link: 'https://6fmcve298d.execute-api.us-east-1.amazonaws.com/api/',
    github: '#',
    name: '2020 Presidential Election Results by county API',
    description: 'An API to find out the results of the 2020 presidential election by county. Built to be used in data science to study what the voter turn out outcome was in each county to measure or analyze correlations between votes, demographics, and geographical influence.'
  },
  {
    image: './images/meal-finder.jpg',
    link: 'https://loveliiivelaugh.github.io/mealFinderJS/',
    github: '',
    name: 'Meal Finder App',
    description: 'Meal finder web app using a meal search API built in vanilla JavaScript.'
  },
  {
    image: './images/lyrics-search.jpg',
    link: 'https://loveliiivelaugh.github.io/lyricsSearchJS/',
    github: '',
    name: 'Lyrics Search App',
    description: 'Lyrics searching web app using a lyrics search API built in vanilla JavaScript.'
  },
  {
    image: '',
    link: 'https://lyrics-search-react.netlify.app/',
    github: 'https://lyrics-search-react.netlify.app/',
    name: 'React Lyrics Search',
    description: 'A vanilla project converted to a small React app to search for lyrics of any songs using a lyrics searching API.'
  },
  {
    image: './images/meal-finder-app.png',
    link: 'https://smart-menu-react.netlify.app/',
    github: 'https://github.com/loveliiivelaugh/react-smart-menu',
    name: 'React Smart Menu',
    description: 'An old revisited vanilla javascript project rewritten in React and with a new API -> Tasty by Dojo APIs. Small project to find meal ideas complete with nutritional facts, recipe, and instructions based on key word search or by multiple ingredients.'
  },
  {
    image: '',
    link: 'https://loveliiivelaugh.github.io/typingGameJS/',
    github: 'https://github.com/loveliiivelaugh/typingGameJS',
    name: 'Typing Game',
    description: 'This one is a typing game.'
  },
];

let page = 1;
let pageCounter = 0;

const handlePrev = () => {
  pageCounter -= 6;
  page -= 1;
  setProjects(page);
};

const handleNext = () => {
  pageCounter += 6;
  page += 1;
  setProjects(page);
};

const setProjects = page => {
  projectsContainer.innerHTML = `
    <div class="glass-container">
      <h3>Projects</h3>
      <center>
        <p>Page ${page+' / '+ Math.ceil(projects.length / 6)}</p>
        ${page > 1 ? `<button class="btn" onclick="handlePrev()">Prev</button>` : '' }
        ${Math.ceil(projects.length / 6) > 1 && 
          Math.ceil(projects.length / 6) != page ?
          `<button class="btn" onclick="handleNext()">Next</button>` : ''
        }
      </center>
      <div class="container">
        ${projects.slice(pageCounter, pageCounter + 6).map(project => `
          <div class="grid-items">
            <div class="image-container">
            <img class="grid-image" src="${project.image}" alt="Thumnail of my project" />
              <div class="middle">
                <a href=${project.link}" target="blank"><button class="btn">Learn More</button></a>
              </div>
            </div>
            <a id="repo-link" href=${project.github} target="blank">
              <i class="fa fa-github" aria-hidden="true"></i>
            </a>
            <div style="display: inline;">
              <h5>${project.name}</h5>
            </div>
            <p><small>${project.description}</small></p>
          </div>
        `).join("")}
      </div>
      <center>
      ${page > 1 ? `<button class="btn" onclick="handlePrev()">Prev</button>` : ''}
      ${Math.ceil(projects.length / 6) > 1 && 
        Math.ceil(projects.length / 6) != page ?
        `<button class="btn" onclick="handleNext()">Next</button>` : ''
      }
        <p>Page ${page+' / '+ Math.ceil(projects.length / 6)}</p>
      </center>
      <a href="https://www.michaelwoodward.dev/" target="blank"><button class="btn">Full Portfolio</button></a>
    </div>
  `;
};

setProjects(page);