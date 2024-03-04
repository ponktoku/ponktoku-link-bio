import "./App.css";
import profileThumb from "./assets/images/danny.png";
import ring from "./assets/images/ring.png";

function App() {
  return (
    <div className="page">
      <div className="content">
        <img src={ring} alt="ring" className="ring" />
        <img src={profileThumb} alt="Danny Bao" className="profile" />
        <div className="name">Danny Bao</div>
      </div>
    </div>
  );
}

export default App;
