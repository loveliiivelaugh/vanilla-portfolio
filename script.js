const projectsContainer = document.getElementById("projects");

const projects = [
  {
    image: './images/coffee-shop.jpg',
    link: 'https://coffee-shop-shopify-context.netlify.app/',
    github: '',
    name: 'Shopify Coffee Shop',
    description: 'Full stack React based Shopify integrated Coffee Shop featuring 10 plus pages, a dynamic cart accessible from multiple pages and custom design.'
  },
  {
    image: './images/todo.jpg',
    link: 'https://learnjs-todo.herokuapp.com/',
    github: '',
    name: 'To Do App',
    description: 'Full stack simple to do app, highlighting the use of CRUD operations, utilizing MongoDB for a database featuring simple design and deployed using Heroku.'
  },
  {
    image: './images/fictional-university.jpg',
    link: 'http://michaelw4.sgedu.site/',
    github: '',
    name: 'Fictional University',
    description: 'A Wordpress powered Fictional University website featuring 10 plus pages and a custom hand built theme. Also features custom post types and custom ...'
  },
  {
    image: './images/any-eats.jpg',
    link: 'https://kristin-serverless-store.netlify.app/',
    github: '',
    name: 'Any Eats',
    description: 'Gatsby powered Stripe integrated simple single page e-commerce website.'
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
    link: 'https://fire-react-employee-management.netlify.app/',
    github: '',
    name: 'Employee Management System',
    description: 'Employee management system built with React, MaterialUI, Firebase for auth and for the noSql Firestore database. This is an attempt to build this project ahead of having to build it as part of a coding bootcamp curriculum I am about to begin.'
  },
  {
    image: '',
    link: 'https://loveliiivelaugh.github.io/nu-javascript03-mini-project/',
    github: '',
    name: 'Rock Paper Scissors',
    description: "A vanilla JavaScript Rock Paper Scissor's game."
  },
];

let page = 1;
let pageCounter = 0;

const handlePrev = () => {
  //this logic here needs to be moved and deleted when theres more data working
  if (pageCounter > 0) {
    pageCounter -= 6;
    page -= 1;
    setProjects(page);
  }
};
const handleNext = () => {
  //this logic here needs to be moved and deleted when theres more data working
  if ((pageCounter + 6) < projects.length) {
    pageCounter += 6;
    page += 1;
    setProjects(page);
  }
};

const setProjects = page => {
  projectsContainer.innerHTML = `
    <div class="glass-container">
      <h3>Recent Work</h3>
      <center>
        <p>Page ${page+' / '+ Math.ceil(projects.length / 6)}</p>
        ${(page.length / 6) > 1 ? `<button>Next</button>` : ''}
        <button class="btn" onclick="handlePrev()">Prev</button>
        <button class="btn" onclick="handleNext()">Next</button>
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
            <h5>${project.name}</h5>
            <p><small>${project.description}</small></p>
          </div>
        `).join("")}
      </div>
      <center>
        ${(page.length / 6) > 1 ? `<button>Next</button>` : ''}
        <button class="btn" onclick="handlePrev()">Prev</button>
        <button class="btn" onclick="handleNext()">Next</button>
        <p>Page ${page+' / '+ Math.ceil(projects.length / 6)}</p>
      </center>
      <a href="https://www.michaelwoodward.dev/" target="blank"><button class="btn">Full Portfolio</button></a>
    </div>
  `;
};

setProjects(page);