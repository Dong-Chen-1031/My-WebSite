AOS.init();
/* Project Cards */

const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Python Programming Auto Tester",
    cardImage: "assets/images/project-page/Tester.png",
    description: "一個簡單的 Python 程式自動化測試系統，可適用於日常程式解題、演算法學習、程式練習等。",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Dong-Chen-1031/Python-Programming-Auto-Tester",
  },
  {
    title: "Discord.py Cogs Bot Template",
    cardImage: "assets/images/project-page/Template.png",
    description: "一個基於 discord.py 的模組化 Discord 機器人模板，採用 Cogs 架構設計，支援熱重載和開發者工具。",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "",
    Githublink: "https://github.com/Dong-Chen-1031/Discord.py-Cogs-Bot-Template",
  },
];

// function for calculating actual text lines
const calculateTextLines = (text, containerWidth, fontSize = 16, fontFamily = 'Arial') => {
  // Create a temporary element to measure text
  const tempElement = document.createElement('div');
  tempElement.style.position = 'absolute';
  tempElement.style.visibility = 'hidden';
  tempElement.style.width = containerWidth + 'px';
  tempElement.style.fontSize = fontSize + 'px';
  tempElement.style.fontFamily = fontFamily;
  tempElement.style.lineHeight = '1.2';
  tempElement.style.wordWrap = 'break-word';
  tempElement.innerHTML = text;
  
  document.body.appendChild(tempElement);
  const lines = Math.ceil(tempElement.scrollHeight / (fontSize * 1.2));
  document.body.removeChild(tempElement);
  
  return lines;
};

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink, description }) => {
    // Calculate actual lines (assuming card width is around 300px)
    const titleLines = calculateTextLines(title, 408, 38.4, 'Arial'); // Adjust font size as needed
    const descLines = calculateTextLines(description, 408, 16, 'Arial');
    
    output += `       
        <div class="column skill-card card" style="margin: 15px"data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600" >
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
              <div class="title-div" style="padding-bottom: ${50-(titleLines-1)*40}px;">
                <h1 class="title" style="padding-bottom: 0px"><a href="#">${title}</a></h1>
                </div>
              <p class="description" style="padding-bottom: ${80-(descLines-1)*30}px;">${description}</p>
              <ul class="menu-content"><br>
                  <!-- <li><a href="${Previewlink}" class="social-icon" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li> -->
                  <li><a href="${Githublink}" class="social-icon" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
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
