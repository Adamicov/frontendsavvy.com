import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: 'Adam Weber | Software Developer',
  lang: 'en',
  description: '',
};

// HERO DATA
export const heroData = {
  subtitle: 'Frontend Developer',
  cta: 'About me',
};

// ABOUT DATA
export const aboutData = {
  img: 'profile.jpg',
  paragraphOne:
    "Just ambitious Software Developer and human being. Crafting applications using Angular, interested in clean architecture and testing. Software Craftmanship evangelist, that care about the product he's involved in, code quality and ownership.",
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio',
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/adam-w-55ab14170/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/Adamicov',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: false, // set to false to disable the GitHub stars/fork buttons
};
