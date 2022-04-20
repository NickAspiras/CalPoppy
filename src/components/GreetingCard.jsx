/** @jsxImportSource @emotion/react */
import '../style/greetingCard.css';

export default function GreetingCard() {
  const titleText = "Welcome to Swanton Poppy Chat!";
  const descriptionText = `Ask anything you want to know about the ranch!
  Check out some commonly asked questions by clicking the question mark above.`;
  const logoSrc = `/logo512.png`;
  const logoAltText = `Swanton Poppy Logo`;

  const description = descriptionText.split("\n").map((text, i) => (
    <p key={i} className="descriptionStyle">
      {text}
    </p>
  ));

  return (
    <div className="cardStyles">
      <img className="logoStyle" src={logoSrc} alt={logoAltText} />
      <h2 className="titleStyle">{titleText}</h2>
      {description}
    </div>
  );
}
