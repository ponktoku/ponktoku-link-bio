import "./App.css";
import profileThumb from "./assets/images/danny.png";
import ring from "./assets/images/ring.png";

function App() {
  return (
    <div className="page">
      <div className="">
        <header className="flex flex-col items-center justify-center">
          <img
            src={ring}
            alt="ring"
            className="absolute max-w-fit top-0.5 -z-10"
            width={"100%"}
          />
          <img
            src={profileThumb}
            alt="Danny Bao"
            className="mt-40 md:mt-60 relative"
            height={200}
            width={200}
          />
          <h1 className="name text-4xl md:text-5xl my-6">Danny Bao</h1>
          <h3 className="usernames text-gray-600 -z-20">
            DannyBoy5930 / ponktoku / Listless / ?
          </h3>
        </header>
      </div>
    </div>
  );
}

export default App;
