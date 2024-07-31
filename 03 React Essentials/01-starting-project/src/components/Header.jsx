import reactImg from '../assets/react-core-concepts.png';

//Dynamic content
const reactDescriptions = ["Fundamental", "Crucial", "Core"];

//Random function for Dynamic Content Display
function genRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
  //Dynamic changing Description
  const description = reactDescriptions[genRandomInt(2)];

  return (
    <header>
      <img src={reactImg} alt="Stylized atom" />
      <h1>React Essentials</h1>
      <p>
        {description} React concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}