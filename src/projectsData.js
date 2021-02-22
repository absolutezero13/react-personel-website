import quiz from "./images/quizPic.PNG";
import decision from "./images/Decision.PNG";

import calculator from "./images/calculator.PNG";
import meerkast from "./images/meer.PNG";
const projects = [
  {
    title: "Meerkast",
    desc:
      "Meerkast is a wannabe streaming service built with React. This project includes many different technologies such as Typescript, Redux, Unit testing. I advise you to take a look at source code.",
    src: meerkast,
  },
  {
    title: "Javascript Quiz",
    desc:
      "A javascript fundamentals quiz app, written with vanilla javascript. Single page and fully responsive. Questions are also written by me. The app is dynamic which means you can add as many questions as you want to. All the elements are gonna shape according to question count. Go ahead and try it out from live view button!",
    src: quiz,
  },
  {
    title: "Decision Maker",
    desc:
      "If you want to put your fate in the hands of Math.random(), this project is for you. Decision Maker is built with React. It picks one of the options you provide and decides what to do in life for you. Also has a local storage so you don't forget your dilemma. You can try it from Live View button.",
    src: decision,
  },
  {
    title: "Calculator",
    desc:
      "A basic calculator project to try React skills such as state management and dealing with props. It is trickier than it looks and great exercise for React developers.",
    src: calculator,
  },
];

export default projects;
