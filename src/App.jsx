import Header from "./componenets/Header";
import Players from "./componenets/Players";

import "./styles/golbal.css";
import "./styles/container.css";
import "./styles/header.css";
import "./styles/buttons.css";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <Header />
        <p>Hidden in the middle of text</p>
      </div>
      <div>
        <div className="first">
          <h2>John Cena</h2>
          <div className="players">
            <Players />
          </div>
        </div>
      </div>
      {/* <button></button> */}
    </div>
  );
}

// const [score1, setScore1] = useState(0);
// const [score2, setScore2] = useState(0);
// const [score3, setScore3] = useState(0);

//   function setScore1X(value) {
//     if (score1 > 0) {
//       return setScore1(value);
//     }
//   }
// return (
//   <div className="container">
//     <div className="header">
//       <Header />
//       <p>Hidden in the middle of text</p>
//     </div>
//     <div>
//       <div className="first">
//         <h2>John Cena</h2>
//         <div className="buttons">
//           <button onClick={() => setScore1X(score1 - 1)}>-</button>
//           <Score value={score1} />
//           <button onClick={() => setScore1(score1 + 1)}>+</button>
//         </div>
//       </div>
//     </div>
//     {/* <button></button> */}
//   </div>
// );
