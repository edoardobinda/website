var projects = [
    {projectName: "Tribute Page",
    imgSrc:"images0/tribute.jpg",
    projectLink: "https://codepen.io/edoardobinda/full/PoWrWMx",
    sourceRepo: "https://codepen.io/edoardobinda/pen/PoWrWMx"
    },
    {projectName: "Survey Form",
    imgSrc:"images0/survey.jpg",
    projectLink: "https://codepen.io/edoardobinda/full/RwKzJXG",
    sourceRepo: "https://codepen.io/edoardobinda/pen/RwKzJXG"
    },
    {projectName: "Product Landing Page",
    imgSrc:"images0/product.jpg",
    projectLink: "https://codepen.io/edoardobinda/full/abJoyOv",
    sourceRepo: "https://codepen.io/edoardobinda/pen/abJoyOv"
    },
    {projectName: "Technical Documentation Page",
    imgSrc:"images0/technical.jpg",
    projectLink: "https://codepen.io/edoardobinda/full/ZEeEYoY",
    sourceRepo: "https://codepen.io/edoardobinda/pen/ZEeEYoY"
    },
    {projectName: "Increase and Lower the count",
    imgSrc:"images0/addlower.jpg",
    projectLink: "https://edoardobinda.github.io/Add-Count-Lower-Count/",
    sourceRepo: "https://github.com/edoardobinda/Add-Count-Lower-Count"
    },
    {projectName: "Mortgage Calculator",
    imgSrc:"images0/mortgage.jpg",
    projectLink: "https://edoardobinda.github.io/Mortgage_Calculator/",
    sourceRepo: "https://github.com/edoardobinda/Mortgage_Calculator"
    },
    {projectName: "To Do List",
    imgSrc:"images0/todo.jpg",
    projectLink: "https://edoardobinda.github.io/To_Do_List/",
    sourceRepo: "https://github.com/edoardobinda/To_Do_List"
    },
    {projectName: "Tips Calculator",
    imgSrc:"images0/tips.jpg",
    projectLink: "https://edoardobinda.github.io/Tips_Calculator/",
    sourceRepo: "https://github.com/edoardobinda/Tips_Calculator"
    },
    {projectName: "Color Art Picker",
    imgSrc:"images0/pixel.jpg",
    projectLink: "https://edoardobinda.github.io/Color-Art-Picker/",
    sourceRepo: "https://github.com/edoardobinda/Color-Art-Picker"
    }
]


for (let i = 0; i < projects.length; i++) {

    let divProject = document.createElement("div");
    /*divProject.setAttribute("id", "div"+[i]);*/
    divProject.setAttribute("class", "project");

    let projectTitle = document.createElement("h3");
    projectTitle.setAttribute("id", "projectTitle");
    projectTitle.innerHTML = projects[i].projectName;
    console.log(projectTitle);

    let projectAnchorLive = document.createElement("a");
    projectAnchorLive.setAttribute("id", "projectAnchorImage");
    projectAnchorLive.href = projects[i].projectLink;
    projectAnchorLive.target = "_blank";


    let projectImage = document.createElement("img");
    projectImage.src = projects[i].imgSrc;
    projectImage.setAttribute("class", "imageclass");



    let projectAnchorRepo = document.createElement("a");
    projectAnchorRepo.setAttribute("id", "projectAnchorRepo");
    projectAnchorRepo.innerHTML = "Link Repository";
    projectAnchorRepo.setAttribute("class", "button");
    projectAnchorRepo.href = projects[i].sourceRepo;
    projectAnchorRepo.target = "_blank";

    //Appending childs
    let prov1 = document.getElementById("prov1");
    prov1.appendChild(divProject);
    divProject.appendChild(projectTitle);

    divProject.appendChild(projectAnchorLive);
    projectAnchorLive.appendChild(projectImage);

    divProject.appendChild(projectAnchorRepo);
}

