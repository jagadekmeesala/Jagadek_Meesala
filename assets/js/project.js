AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  
  {
    title: "Students Profile - SCB",
    cardImage: "https://user-images.githubusercontent.com/85881386/219921715-eb4be750-7a70-4781-9377-25030aafda36.png",
    description: "Build a MERN website to store and display info of students as profiles",
    Previewlink: "https://youtu.be/tDbHUM54MMI?si=QOGr8rry_T8YryTV",
    Githublink: "https://youtu.be/tDbHUM54MMI?si=9sNYUzi7aciWGXw2",
  },
  {
    title: "Intelli Farm Tech",
    cardImage: "https://user-images.githubusercontent.com/85881386/285356471-75504267-6566-4988-88d9-122cdd88628a.jpg",
    description: "Machine Learning model integrated with Streamlit that helps to uderstand the situations for farming",
    Previewlink: "https://www.youtube.com/@MeesalaJagadek",
    Githublink: "https://github.com/jagadekmeesala",
  },
  {
    title: "Analyse water quality",
    cardImage: "https://camo.githubusercontent.com/a39b268a7a02a7fb2b4b760e935cae51b9616f6e8b981ee23d66021a0da5a372/68747470733a2f2f632e74656e6f722e636f6d2f73756b6478754165675f5141414141432f77617465722e676966",
    description: "This is a machine learning model built to analyse the quality of water.",
    Previewlink: "https://youtu.be/z49D3-bly1E?si=RNU5lZOMdMeGGQig",
    Githublink: "https://github.com/jagadekmeesala/Water-Quality-Analysis",
  },
  {
    title: "Get it Visualized",
    cardImage: "https://user-images.githubusercontent.com/85881386/285357379-f711fb51-9d0b-495e-b566-89dd7a82d0fb.jpg",
    description: "This is a MERN website that helps to turn your files into visualizations",
    Previewlink: "https://youtu.be/gVPLQE7IBfI?si=MOGESR80zwQLTq85",
    Githublink: "https://github.com/jagadekmeesala/Get-it-Visualized",
  },
  {
    title: "Shop4U",
    cardImage: "https://user-images.githubusercontent.com/85881386/285357815-7776042d-8df8-4542-86f4-cb568838b338.jpg",
    description: "Shop4U is a clone of a popular E-Commerce site Amazon.",
    Previewlink: "https://www.youtube.com/@MeesalaJagadek",
    Githublink: "https://github.com/jagadekmeesala/Shop4U-",
  },
  /*{
    title: "",
    cardImage: "assets/images/project-page/poker.jpg",
    description: "Poker game built using typescript.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "",
    cardImage: "assets/images/project-page/tic-tac-toe.png",
    description:
      "Tested a React Tic Tac Toe Game using Jest and React Testing Library.",
    Previewlink: "",
    Githublink: "",
  },
  {
    title: "Personal Book Library",
    cardImage: "assets/images/project-page/book.png",
    description: "Personal book library app built using JavaScript.",
    Previewlink: "",
    Githublink: "",
  },*/
  {
    title: "Calculator",
    cardImage: "https://user-images.githubusercontent.com/85881386/202843117-170ac07b-82e8-487e-9c4c-95eb7001396f.png",
    description:
      "Designed using HTML, This tool helps you to solve all your simple math problems",
    Previewlink: "https://www.youtube.com/watch?v=8Ofo0Pv-JAs",
    Githublink: "https://github.com/jagadekmeesala/Calculator-Tool",
  },
  {
    title: "Resume Builder",
    cardImage: "https://user-images.githubusercontent.com/85881386/285359024-78569559-84fc-43ed-bd02-0d8f5e7487b6.jpg",
    description: "Get a perfectly structured reusme with the resume builder from python",
    Previewlink: "https://youtu.be/6RbkZqolkL4?si=nTj6wcWQ6HUf5gBN",
    Githublink: "https://github.com/jagadekmeesala/CodeAlpha_Resume_Builder",
  },
  {
    title: "Rock, Paper, Scissors",
    cardImage: "https://user-images.githubusercontent.com/85881386/285358106-177af608-2311-427b-8d22-8708ec745b34.png",
    description: "This is a python code that makes your pass time more interesting with rock, paper and scissors game.",
    Previewlink: "https://www.youtube.com/@MeesalaJagadek",
    Githublink: "https://github.com/jagadekmeesala/GAME_RockPaperScissors",
  },
  {
    title: "Instagram Logo",
    cardImage: "https://user-images.githubusercontent.com/85881386/285358508-12b11534-dadf-47a0-b9e1-9473ed720e75.jpg",
    description: "Built using Python - tkinter module.",
    Previewlink: "https://www.youtube.com/@MeesalaJagadek",
    Githublink: "https://github.com/jagadekmeesala/INSTAGRAM-LOGO",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div">
                <h1 class="title"><a href="#">${title}</a></h1>
                </div>
            <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

function myFunction() {
  // Declare variables
  var input, button, i, skillcard, card, title;
  input = document.getElementById("myInput").value;
  input = input.toUpperCase();
  skillcard = document.getElementsByClassName("skill-card");
  card = document.getElementsByClassName("card");
  title = document.getElementsByClassName("title");

  // Loop through all list items, and hide those who don't match the search query
  for (i = 0; i < button.length; i++) {
    if (
      button[i].innerHTML.toUpperCase().includes(input) ||
      title[i].innerHTML.toUpperCase().includes(input)
    ) {
      skillcard[i].style.display = "";
      card[i].style.display = "";
    } else {
      skillcard[i].style.display = "none";
      card[i].style.display = "none";
    }
  }
}
