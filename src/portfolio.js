/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Ajay Kumar",
  title: "Hi all, I'm Ajay",
  subTitle: emoji(
    "Experienced Full Stack Developer skilled in HTML, CSS, JavaScript, React.js, Node.js, and SQL, seeking to leverage technical expertise in both front-end and back-end development. npm "

  ),
  resumeLink:
    "https://drive.google.com/file/d/1RqrUFqB6feMRRbNh_V0ZsSZDN-Wq4vuq/view?usp=drivesdk ", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/ajaykuduvan",
  linkedin: "https://www.linkedin.com/in/ajay-kumar-balamurugan/",
  gmail: "ajaydv1263@gmail.com",

  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FullStack Developer WHO WANTS TO EXPLORE EVERY TECH STACK",
  skills: [
    
    emoji(
      "⚡  I  have a broad knowledge on Front End and Backend Development"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [        
    
    
    {
      skillName: "github",
      fontAwesomeClassname: "fab fa-github"
    },
    
    
           
    {
      skillName: "html-5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "css3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },    
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Velammal Institute of Technology",
      logo: require("./assets/images/VelammalLogo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science Engineering",
      duration: "June 2020 - May 2024",
      desc: "Worked in 3 projects, conducted 1 workshop and published 1 journal",
      descBullets: [
        "CGPA :  8.76",
        "Anna University"
      ]

    },
    {
      schoolName: "Velammal Matric higher secondary  School",
      
      subHeader: "HSC",
      duration: "June 2019 - May 2020",
      descBullets: [
        "Percentage :  79%",
        "State Board"
      ]

    },
    {
      schoolName: "Unity Matriculation School",
      
      subHeader: "SSLC",
      duration: "June 2017 - May 2018",
      descBullets: [
        "Percentage :  93%",
        "State Board"
      ]

    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    
    {
      Stack: "Fullstack Development",
      progressPercentage: "70%"
    },
    {
      Stack: "Competitive Programming",
      progressPercentage: "50%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    
    {
      role: "Web Development Intern",
      
      company: "Spiro prime tech services",
      link:"http://www.spiroprojects.com/",
      
      date: "january 2024 – March 2024 ",
      desc: "Working with Real time projects",
      descBullets: [
        "Gained practical experience in developing web applications using HTML, CSS, and JavaScript."

      ]
    },
    {
      role: "FullStack Developer Intern",
      link:"https://flipopay.com/",
      company: "Flipopay Technologies Private Limited",
      
      date: "April 2024 – June 2024 ",
      desc: "Worked as a Full Stack Web Developer",
      descBullets: [
        "Gained practical experience in developing web applications using HTML, CSS, and JavaScript Developed and maintained dynamic front-end features using React js enhanching User interface  responsiveness and Interactivity"
        
        
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some devops projects you have worked on

const devopsProjects = {
  title: "Domain Projects",
  subtitle: "I have mentioned the projects with their names or techstacks I have used to in them to showcase my knowledge on those techstacks",
  projects: [
    {
      image: require("./assets/images/devops.png"),
      projectName: "DevOps",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/aids.jpg"),
      projectName: "AI and Data Science",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/web.jpg"),
      projectName: "Web Development",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/embedded.png"),
      projectName: "Embedded Systems",
      projectDesc: "I am devOps enthusiatic and build various to show my interest in devOps",
      footerLink: [
        {
          name: "Project Repo",
          url: "https://github.com/JatinKishore/MSME_Project.git"
        }
        //  you can add extra buttons here.
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};
// Some big projects you have worked on

const bigProjects = {
  title: "AWARD WINNING PROJECTS",
  subtitle: "Projects that are recognized in stages",
  projects: [
    
    {
      image: require("./assets/images/VelammalLogo.jpg"),
      projectName: "Efficient Detection of Smishing attacks on End Users using Neural Network",
      projectDesc: "Winner of Innovate Tech Expo 2024 ",
      footerLink: [
        {
          name: "Innovate Tech Expo 2024",
          url: ""
        },
       
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Certifications 📜 & Achievements🏆"),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    
    {
      title: "NPTEL",
      subtitle:
        "I have taken 1 certification related to Machine Le and now a way close to a Domain certification",
      image: require("./assets/images/nptel.png"),
      imageAlt: "NPTEL",
      footerLink: [
        
        {
          name: "Introduction to Machine Learning",
          url: "https://drive.google.com/file/d/1XyhukEfV-Wz1hMjX8Hq1Qiw5QEain-Me/view?usp=drivesdk"
        },
      ]
    },
    {
      title: "GOOGLE",
      subtitle:
        "I have completed 1 professional Certificate of Google",
      image: require("./assets/images/google.png"),
      imageAlt: "Google",
      footerLink: [
        {
          name: "Data Analytics",
          url: "https://coursera.org/verify/professional-cert/CHVDGUUAJ2FZ"
        },
       
      ]
    }

    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://www.linkedin.com/posts/jatinkishore-m_hand-written-notes-activity-7196213828999602176-L5oJ?utm_source=share&utm_medium=member_desktop",
      title: "My Notes on DevOps",
      description:
        "This has my complete notes and review over the DevOps Zero to Hero Course by Abhishek Veeramalla"
    },
    
    {
      url: "https://www.linkedin.com/posts/jatinkishore-m_docker-handwritten-notes-activity-7183514047047237633-f9c1?utm_source=share&utm_medium=member_desktop",
      title: "My Notes on Docker",
      description:
        "This covers my Experience with Zero to Hero Docker Course of Abhishek Veeramalla"
    }
    
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "LECTURES BY ME",
  subtitle: emoji(
    "I LOVE TO CONTRIBUTE TO THE TECH SOCIETY BY TEACHING WHATEVER I HAVE LEARNT"
  ),

  talks: [
    {
      title: "Docker & K8s ",
      subtitle: "Container vs VM | MultiStage Docker | Docker vs K8s | KOPS",
      slides_url: "https://docs.google.com/presentation/d/1VeLTTB15rrp8iKLGrZZwFrk9ABzK4ZSJB4qu8SHrl8Q/edit?usp=sharing",
      event_url: ""
    },
    {
      title: "Crack Coding Rounds",
      subtitle: "Patterns | Arrays | Recursion | LinkedList",
      slides_url: "https://docs.google.com/presentation/d/1fwCrjjpu4PfFYdmtDhjug4QtDaXhGHNERCPWhPosBaY/edit?usp=sharing",
      event_url: ""
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",
  url:"https://drive.google.com/file/d/1RqrUFqB6feMRRbNh_V0ZsSZDN-Wq4vuq/view?usp=drivesdk",
  


  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91 8248463513",
  email_address: "ajaydv1263@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  devopsProjects,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
