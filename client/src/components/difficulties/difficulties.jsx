import "./difficulties.css";
import "../colors/colors.css";
import Background from "../../assets/background/background.png";

function Difficulties() {

  return (
    <section className="difficultiesSection"
    style={{backgroundImage: `url(${Background})`}}>
      <h1>Choose your difficulty</h1>
      <div className="buttons">
        <button className="difficulty-btn" type="button">Easy</button>
        <button className="difficulty-btn" type="button">Medium</button>
        <button className="difficulty-btn" type="button">Hard</button>
        <button className="difficulty-btn" type="button">All difficulties</button>
      </div>
    </section>
    
  );
}

export default Difficulties;
