import "./App.css";
import profileThumb from "./assets/images/danny.png";

function App() {
  return (
    <div className="page">
      <div className="content">
        <div className="ring"></div>
        <img src={profileThumb} alt="Danny Bao" className="profile" />
        <div className="name">Danny Bao</div>
      </div>
    </div>
  );
}

export default App;
