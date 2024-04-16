import "./difficulties.css";
import "../colors/colors.css";
import Background from "../../assets/background/background.png";

function Difficulties() {
  // const categoryByID = [
  //  { all: 9,
  //   music: 12,
  //   nature: 17,
  //   mythology: 20,
  //   sport: 21,
  //   geography: 22,
  //   history: 23,
  //   art: 25,
  //   }
  // ]

  return (
    <section
      className="difficultiesSection"
      style={{ backgroundImage: `url(${Background})` }}
    >
      <h1>Choose your difficulty</h1>
      <div className="buttons">
        <button type="button">Easy</button>
        <button type="button">Medium</button>
        <button type="button">Hard</button>
        <button type="button">All difficulties</button>
      </div>
    </section>
  );
}

// put id in props
// Difficulties.propTypes = {
//   id: PropTypes.string.isRequired,
// };

export default Difficulties;
