module.exports = {
  siteTitle: 'Nice to meet you, I am Gavin',
  siteDescription: `Create your online curriculum in just a few minutes with this starter`,
  keyWords: ['gatsbyjs', 'react', 'curriculum'],
  authorName: 'Gavin Wimalachandran',
  twitterUsername: '_franciscodf',
  githubUsername: 'GavinW93',
  authorAvatar: '/images/Gavin.jpeg',
  authorDescription: `Full-stack web developer with a background in
  game development and a life-long dedication to hard work and education. <br />
  Effective at combining creativity and problem solving to develop user-friendly applications.
  Known for perseverance and long term planning among colleagues. <br />`,
  // I currently work as a frontend developer and mainly work with <strong>Javascript, NodeJS e React.</strong>`,
  skills: [
    {
      name: 'HTML',
      level: 80
    },
    {
      name: 'CSS',
      level: 60
    },
    {
      name: 'Javascript',
      level: 70
    },
    {
      name: 'NodeJs',
      level: 40
    },
    {
      name: 'React',
      level: 50
    },
    {
      name: 'Git',
      level: 70
    },
    /* more skills here */
  ],
  jobs: [
    /* more portifolio items here */
    {
      company: "Ekkambyte",
      begin: {
        month: 'apr',
        year: '2017'
      },
      duration: null,
      occupation: "game designer",
      description: "Used Unity3d to Design and create gaming prototypes.<br /> Managed marketing, promotions, and publishing of products.<br /> Hiring and managing free-lancers.<br />"
  
    },  {
      company: "light heart labs",
      begin: {
        month: 'apr',
        year: '2018'
      },
      duration: '1 yr',
      occupation: "UI/UX Designer",
      description: " Used Photoshop and illustrator to create assets.<br /> Made rough prototypes of some UI elements.<br /> Debugging client’s software.<br />"
  
    }, {
      company: "Northern World Entertainment Software	",
      begin: {
        month: 'dec',
        year: '2016'
      },
      duration: '1 yr',
      occupation: "Game Developer",
      description: "Completed internship and employment positions to gain knowledge of the game industry.<br /> Utilized 3ds Max for 3dModelling and Unity for level design.<br /> Responsible for designing the level layout for the E3 demo<br />"
    }, 
  ],
  portifolio: [
    {
      image: "/images/post-up.png",
      description: "the virtual basketball card maker where you get to choose which players you have in your collection!",
      url: "https://postup-cards.herokuapp.com/"
    },
    {
      image: "/images/police.png",
      description: "Responsive grid for ReactJS",
      url: "https://github.com/santosfrancisco/react-awesome-styled-grid"
    },
    {
      image: "/images/huddle.png",
      description: "See events from your coach, who will be at the game or past games scores all in one convient place.",
      url: "https://lets-huddle.herokuapp.com/"
    },
    {
      image: "/images/wordgame.png",
      description: "a simple word guessing game with a timer and difficulty",
      url: "https://gavinw93.github.io/Gavin-s-Word-Guess/"
    },
    {
      image: "/images/note_taker.png",
      description: "create, edit, and delete notes, with an online note pad.",
      url: "https://note-taker-gavinw93.herokuapp.com/"
    },
    {
      image: "/images/question.png",
      description: "a 5 question quiz game, with a simple timer",
      url: "https://gavinw93.github.io/Code-Quiz/"
    },
    /* more portifolio items here */
  ],
  social: {
    twitter: "https://twitter.com/tamilshinobi",
    linkedin: "https://www.linkedin.com/in/gavin-wimalachandran/",
    github: "https://github.com/GavinW93",
    email: "gavinwim93@gmail.com"
  },
  siteUrl: 'https://santosfrancisco.github.io/gatsbystarter-cv',
  pathPrefix: '/gatsby-starter-cv', // Note: it must *not* have a trailing slash.
  siteCover: '/images/cover.jpeg',
  googleAnalyticsId: 'UA-000000000-1',
  background_color: '#ffffff',
  theme_color: '#25303B',
  display: 'minimal-ui',
  icon: 'src/assets/gatsby-icon.png',
  headerLinks: [
    {
      label: 'Home',
      url: '/',
    },
    {
      label: 'Portifolio',
      url: '/portifolio',
    }
  ]
}