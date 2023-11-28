AOS.init();

//  Tech Stacks cards

const techStackCards = document.querySelector(".techstack-box");
const techStack = [
  {
    langImage: "assets/images/techstack-page/python.png",
    langName: "Python",
    langDesc: "<li>Python is an interpreted high-level general-purpose programming language</li>",
  },
  {
    langImage:"assets/images/techstack-page/c.png",
    langName:"C",
    langDesc:"<li>C is a general-purpose, procedural computer programming language supporting structured programming, lexical variable scope, and recursion, with a static type system</li>"
  },
  {
    langImage: "assets/images/techstack-page/git.png",
    langName: "Git",
    langDesc: "<li>Git is software for tracking changes in any set of files, usually used for coordinating work among programmers collaboratively developing source code during software development.</li>",
  },
  {
    langImage: "assets/images/techstack-page/react.png",
    langName: "React",
    langDesc: "<li>React is a free and open-source front-end JavaScript library for building user interfaces based on UI components</li>",
  },
  {
    langImage: "assets/images/techstack-page/MERN.jpg",
    langName: "MERN",
    langDesc: "<li>The MERN stack is a JavaScript-based technology stack used to build modern web applications.</li>",
  },
  {
    langImage: "assets/images/techstack-page/javascript.png",
    langName: "JavaScript",
    langDesc: "<li>JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS</li>",
  },
  {
    langImage: "assets/images/techstack-page/MongoDB.png",
    langName: "Mongo DB",
    langDesc: "<li>Mongo DB is a no relational database that is primarily used for storing large amounts of data</li>",
  },
  {
    langImage: "assets/images/techstack-page/postgresql.png",
    langName: "PostgreSQL",
    langDesc: "<li>Postgres is a realtional database that stores the data in form of row and columns i.e tables</li>",
  },
  {
    langImage: "assets/images/techstack-page/node.png",
    langName: "Node",
    langDesc: "<li>Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser</li>",
  },
  {
    langImage: "assets/images/techstack-page/fastapi.png",
    langName: "FastAPI",
    langDesc: "<li>FastAPI is a Python web framework for building APIs. It's designed to make it easy to build APIs quickly and efficiently. FastAPI is a popular choice for building web services and microservices.</li>",
  },
  {
    langImage: "assets/images/techstack-page/DataScience.jpg",
    langName: "Data Science",
    langDesc: "<li>Data science is the study of data to extract meaningful insights for business. It's an interdisciplinary field that combines principles and practices from: Mathematics, Statistics, Artificial intelligence, Computer engineering, Scientific computing, Scientific methods, Processes, Algorithms, Systems.</li>",
  },
  {
    langImage: "assets/images/techstack-page/MachineLearning.jpg",
    langName: "Machine Learning",
    langDesc: "<li>Machine learning is a type of artificial intelligence (AI) that allows software applications to become more accurate in predicting outcomes without being explicitly programmed to do so</li>",
  },
];

const displayTechStacksCards = () => {
  const entireCardTemplate =
  techStack.map((stack)=> {
      return `        
    <div class="row page-content techstackcards" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="0" data-aos-duration="400"> 
        <div class="tech_card">
            <div class="card_img">
                <img src ="${stack.langImage}" class="featured_image">
            </div>
            <div class="card_header">
                <header>
                    <div class="text-center langName">
                        <h4>${stack.langName}</h4>
                    </div>
                </header>
                <ul class="description">
                ${stack.langDesc}
            </ul>
            </div>
        </div>
    </div>
      `}).join('');
  techStackCards.innerHTML = entireCardTemplate;
};
// displayTechStacksCards(techStack)
document.addEventListener("DOMContentLoaded", displayTechStacksCards);
