var tablinks = document.getElementsByClassName("tab-links");
var tabcontent = document.getElementsByClassName("tab-content");

function OpenTab(tabName, event) { 
    for(let link of tablinks) {
        link.classList.remove("active-links");
    }
    
    for(let content of tabcontent) { 
        content.classList.remove("active-tab");
    }
    
    event.currentTarget.classList.add("active-links");
    document.getElementById(tabName).classList.add("active-tab");
}





const workList = document.querySelector('.work-list');
const seeMoreBtn = document.querySelector('.btn');

const additionalWorks = [
    {
        imgSrc: "images/Screenshot 2025-02-14 at 2.27.14 PM.png",
        title: "Maths Quiz Application",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
        link: "https://maths-quiz2.vercel.app/"

    },
    {
        imgSrc: "images/Screenshot 2024-12-13 at 11.30.49 PM.png",
        title: "GITHUB Profile Founder",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
        link: "https://git-profile-fetching.vercel.app"
    },
    {
        imgSrc: "images/Screenshot 2024-12-13 at 11.30.13 PM.png",
        title: "Mark Calculator",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quibusdam, magni.",
        link: "https://marks-cal.vercel.app/"
    }
];

seeMoreBtn.addEventListener('click', function(e) {
    e.preventDefault();
    
    // Add all new work items at once
    additionalWorks.forEach(work => {
        const newWork = document.createElement('div');
        newWork.className = 'work';
        
        newWork.innerHTML = `
        
            <img src="${work.imgSrc}" alt="">
            <div class="layer">
                <h3>${work.title}</h3>
                <p>${work.description}</p>
                <a href="${work.link}" target="_blank">
                    <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </a>
            </div>
        `;
        
        workList.appendChild(newWork);
    });
    
    // Hide the button after adding all items
    seeMoreBtn.style.display = 'none';
});



const sidemenu = document.getElementById("sidemenu");
const menuBtn = document.getElementById("menuBtn");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}

menuBtn.addEventListener("click", openmenu);

// Close menu when clicking a link
document.querySelectorAll('#sidemenu li a').forEach(link => {
    link.addEventListener('click', closemenu);
});

