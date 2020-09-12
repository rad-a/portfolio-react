import passwordGenerator from "../pages/ProjectsPage/images/RPG-vn.jpg";
import burgerApp from "../pages/ProjectsPage/images/burger-app-vn.jpg";
import dogDate from "../pages/ProjectsPage/images/dog-date-project.jpg";
import weatherDashboard from "../pages/ProjectsPage/images/weather-dashboard.png";
import workdayScheduler from "../pages/ProjectsPage/images/workday-scheduler.jpg";
import rosterGenerator from "../pages/ProjectsPage/images/TRG-output-HTML.jpg";

export default [
  {
    id: 1,
    name: "Dog Date",
    image: dogDate,
    url: "https://rad-a.github.io/dog-date/",
    repository: "https://github.com/rad-a/dog-date/",
    description: "Find nearby parks to take your dog!",
    role: "",
  },
  {
    id: 2,
    name: "Eat-Da-Burger",
    image: burgerApp,
    url: "https://shrouded-beyond-01705.herokuapp.com/burgers",
    repository: "https://github.com/rad-a/burger_picker/",
    description: "Input and save burgers to eat.",
    role: "",
  },
  {
    id: 3,
    name: "Weather Dashbord",
    image: weatherDashboard,
    url: "https://rad-a.github.io/weather-dashboard/",
    repository: "https://github.com/rad-a/work-day-scheduler/",
    description: "A handy weather forecast application.",
    role: "",
  },
  {
    id: 4,
    name: "Work Day Scheduler",
    image: workdayScheduler,
    url: "https://rad-a.github.io/work-day-scheduler/",
    repository: "https://rad-a.github.io/work-day-scheduler/",
    description: "A simple workday planner.",
    role: "",
  },
  {
    id: 5,
    name: "Dog Date",
    image: rosterGenerator,
    url: "",
    repository: "https://github.com/rad-a/team-roster-generator",
    description:
      "A CLI application that generates a well-formatted team roster HTML based on user input.-",
    role: "",
  },
  {
    id: 6,
    name: "Password Generator",
    image: passwordGenerator,
    url: "https://rad-a.github.io/password_generator/",
    repository: "https://github.com/rad-a/password_generator/",
    description: "Generate random secure passwords.",
    role: "",
  },
];
