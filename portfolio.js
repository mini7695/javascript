// Address
const Address = {
  title: "Address",
  value: "NO A2 Old housing board Central theatre opposite Krishnagiri 635001",
};
const Detail = [
  {
    title: "Phone No",
    value: "7695908312",
  },
  {
    title: "Email Id",
    value: "minithasrik5622@gmail.com",
  },
];
const link = {
  title: "LinkedIn",
  value: "https://www.linkedin.com/in/minithasri-k-099963248",
};
// Objective
var Objective = {
  title: "Professional Summary",
  value:
    "Recent graduate seeking a challenging role as a Software Developer to leverage my programming skills and contribute to innovative projects",
};

// Qualification
const qTitle = {
  title: "Educational Qualification",
};
const Qualification = [
  {
    course: "B.Tech IT",
    institute: "PSV College of Engineering & Technology",
    place: "Krishnagiri",
    percentage: "8.5 CGPA",
    period: "2019-2023",
  },
  {
    course: "HSC",
    institute: "Govt Girls Higher Sec School",
    place: "Krishnagiri",
    percentage: "61%",
    period: "2018-2019",
  },
  {
    course: "SSLC",
    institute: "Govt High School",
    place: "Jangalapuram",
    percentage: "87.4%",
    period: "2016-2017",
  },
];

const ProjectTile = {
  projectTitle: "Project",
};

const Project = [
  {
    title: "Live Project",
    list: ` I worked hands on project the name is Rio-fin Investment Company.
      I learned more about ReactJS. Using Hooks concepts like a Use state etc.`,
  },
  {
    title: "Individual Project",
    list: `I have Developed a website, "Mini Cafe" using HTML, CSS and
      Javascript. I have developed web pages using ReactJs and Express Js
      for frontend to backend connectivity.`,
  },

  {
    title: "College Project",
    list: `Developed mini project on “Leave Management System” at PSV college
      of engineering technology.The project consists of two modules
      namely student and admin. Leave approval is made by the admin.`,
  },
];

// Certified
const cerTitle = {
  title: "Certification",
};
const Certified = [
  {
    value: "MERN-Full stack Development in WHY TAP.",
  },
  {
    value: `Presented a Project “Leave Management System” at National level
    conference which is held at PSV college of engineering &
    technology.`,
  },
];

// Qualified

const TechTitle = {
  TechSkill: "Technical Skills",
};
const skills = [
  {
    title: "Front end",
    list: ["HTML", "CSS", "Javascript"],
  },
  {
    title: "Back end",
    list: [`Basic-Python`, "Java", "Nodejs-Express js"],
  },
  {
    title: "Libraries",
    list: ["Bootstrap", "React js"],
  },
  {
    title: "Data base",
    list: ["SQL", "MongoDb"],
  },
];

//  Courses
const Courses = {
  title: "Internship",

  value: "Frontend Developer -Worked hands on project Rio-fin",
};

//Strength
const titleStrength = {
  title: "Strength",
};
const Strength = [
  {
    list: [
      "Self-Motivated",
      "Decision making",
      "Problem solving",
      "Ability to work  independently",
      "Active Listening",
    ],
  },
];

// BioData
const title = {
  deTitle: "Personal Details",
};

const bioData = [
  {
    title: "DOB",
    value: "05/06/2002",
  },
  {
    title: "Marital Status",
    value: "Unmarried",
  },
  {
    title: "Nationality",
    value: "Indian",
  },
  {
    title: "Gender",
    value: "Female",
  },
];

// Declaration

const conclusion = [
  {
    title: "Declaration",
    value:
      "I hereby declare that all the information given above is true to the best of my knowledge and belief",
  },
];

function nameHead() {
  // Name
  const page = document.getElementById("page");
  let Name = document.getElementById("Name");
  Name.textContent = "Minithasri Krishnan";
  Name.className = "Name";
  page.className = "page";
}

function address() {
  // Address
  let place = document.getElementById("Details");
  let address = document.createElement("address");
  address.textContent = Address.value;
  address.className = "Address";
  place.appendChild(address);
}

function mobile() {
  //   mobile number
  let phoneTitle = document.getElementById("Contact");

  for (i = 0; i < Detail.length; i++) {
    let numberValue = document.createElement("p");
    numberValue.textContent = `${Detail[i].title}: ${Detail[i].value}`;
    numberValue.className = "Contact";
    phoneTitle.appendChild(numberValue);
  }
}

let lineDiv = document.getElementById("link");
let lin = document.createElement("a");
lin.setAttribute("href", "https://www.linkedin.com/in/minithasri-k-099963248");
lin.textContent = link.title + ":" + link.value;
lin.className = "Contact";
lineDiv.appendChild(lin);

//line
let line = document.getElementById("div");
line.className = "line";

function summary() {
  // //Objective
  let section = document.getElementById("Summary");
  let summaryTitle = document.createElement("h2");
  let summaryText = document.createElement("p");
  summaryTitle.textContent = Objective.title;
  summaryText.textContent = Objective.value;
  summaryTitle.className = "Font";
  summaryText.className = "Paragraph1";
  section.appendChild(summaryTitle);
  section.appendChild(summaryText);
}
//  line
let line1 = document.getElementById("div1");
line1.className = "line";
function eligible() {
  let div = document.getElementById("eduTitle");
  let educationTitle = document.createElement("h2");
  educationTitle.textContent = qTitle.title;
  educationTitle.className = "Font";
  div.appendChild(educationTitle);
  let education = document.getElementById("list");
  for (li in Qualification) {
    let listA = document.createElement("li");
    listA.innerHTML = `<p>${Qualification[li].course}-\u00A0${Qualification[li].institute},\u00A0 ${Qualification[li].place}.\u00A0(${Qualification[li].percentage})\u00A0\u00A0 ${Qualification[li].period}</p>`;
    listA.className = "list";
    listA.style.listStyle = "none";
    education.append(listA);
    div.append(educationTitle);
  }
}

//line
let line2 = document.getElementById("div2");
line2.className = "line";

function project() {
  let project = document.getElementById("project");
  let projectTitle = document.createElement("h2");
  projectTitle.textContent = ProjectTile.projectTitle;
  project.appendChild(projectTitle);

  for (work in Project) {
    let projectLive = document.createElement("p");
    projectLive.innerHTML = `<p>${Project[work].title}:${Project[work].list}</p>`;
    projectLive.className = "list";
    project.append(projectLive);
  }
}

let line3 = document.getElementById("div3");
line3.className = "line";

function certificate() {
  // certificate
  let certificate = document.getElementById("certificate");
  let certifyTitle = document.createElement("h2");
  certifyTitle.textContent = cerTitle.title;
  certificate.appendChild(certifyTitle);

  for (i = 0; i < Certified.length; i++) {
    let certifyValue = document.createElement("p");
    certifyValue.textContent = `${Certified[i].value}`;
    certificate.appendChild(certifyValue);
  }
}

let line4 = document.getElementById("div4");
line4.className = "line";

function course() {
  // course
  let course = document.getElementById("internship");

  let courseTitle = document.createElement("h2");

  let courseList = document.createElement("p");

  courseTitle.textContent = Courses.title;
  courseList.textContent = Courses.value;

  course.appendChild(courseTitle);
  course.appendChild(courseList);
}

//line
let line5 = document.getElementById("div5");
line5.className = "line";
skill();
let line6 = document.getElementById("div6");
line6.className = "line";

function strength() {
  let strength = document.getElementById("strength");
  let strengthTitle = document.createElement("h2");
  strengthTitle.textContent = titleStrength.title;
  strength.innerHTML = "";
  strength.append(strengthTitle);

  for (i = 0; i < Strength.length; i++) {
    let strengthPara = document.createElement("p");
    strengthPara.textContent = `${Strength[i].list}`;
    strength.append(strengthPara);
  }

  // btn.setAttribute = ("onclick", "action()");

  // btn.addEventListener("click()", action());
}

const action = () => {
  // div.innerHTML = "";
  const doc = prompt("check strength");
  for (i = 0; i < Strength.length; i++) {
    if (Strength[i].list !== doc) {
      let add = prompt("enter strength");
      Strength[i].list.push(add);
      break;
    } else {
      alert("Nill");
    }
  }
  strength();
};

let line7 = document.getElementById("div7");
line7.className = "line";

function bio() {
  let personalDetails = document.getElementById("PersonalDetails");
  let PersonalTitle = document.createElement("h2");
  PersonalTitle.textContent = title.deTitle;
  personalDetails.appendChild(PersonalTitle);

  let ulValue = document.createElement("ul");
  for (data in bioData) {
    let statusValue = document.createElement("li");
    statusValue.innerText = `${bioData[data].title} : ${bioData[data].value}`;
    PersonalTitle.className = "Font";
    statusValue.className = "list";
    ulValue.style.marginTop = "-15px";
    statusValue.className = "font";
    ulValue.appendChild(statusValue);
    personalDetails.appendChild(ulValue);
  }
}

let line8 = document.getElementById("div8");
line8.className = "line";

function declaration() {
  //declaration

  let declaration = document.getElementById("Declaration");
  let decTitle = document.createElement("h2");
  let decValue = document.createElement("p");
  decTitle.textContent = conclusion[0].title;
  decValue.textContent = conclusion[0].value;
  decTitle.className = "Font";
  decValue.className = "Paragraph";
  declaration.appendChild(decTitle);
  declaration.appendChild(decValue);
}

function skill() {
  let skill = document.getElementById("qualification");
  let skillTitle = document.createElement("h2");

  skillTitle.textContent = TechTitle.TechSkill;
  let unOrder = document.createElement("ul");
  skill.innerHTML = "";

  skill.appendChild(skillTitle);
  for (i = 0; i < skills.length; i++) {
    // const tech = skills[i];
    let list = document.createElement("li");

    list.className = "list";
    list.className = "Font";

    // list.innerText = `${tech.title}: ${tech.list}`;
    list.innerText = `${skills[i].title} : ${skills[i].list}`;

    skill.appendChild(unOrder);
    unOrder.appendChild(list);
  }
}
function add() {
  const addValue = prompt("Check the Title");

  // debugger;

  for (i = 0; i < skills.length; i++) {
    // debugger;

    if (skills[i].title === addValue) {
      let newSkills = prompt("enter new skill");

      skills[i].list.push(newSkills);
      // console.log(skills[i].list);
      break;
    } else {
      alert("nill");
    }
  }
  // debugger;
  skill();
}

nameHead();
address();
mobile();
summary();
eligible();
project();
certificate();
course();
strength();
bio();
declaration();
let div = document.getElementById("but");
let btn = document.createElement("button");

btn.setAttribute("onclick", "action()");
btn.textContent = "add strength";
btn.style.color = "green";
div.appendChild(btn);
let diva1 = document.getElementById("but1");
const but = document.createElement("button");
but.setAttribute("onclick", "add()");

let set = document.createTextNode("add Tech Skill");
but.appendChild(set);
console.log(but);

but.style.backgroundColor = "green";
but.style.display = "inline";

diva1.appendChild(but);
