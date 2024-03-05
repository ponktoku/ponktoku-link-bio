import "./App.css";
import profileThumb from "./assets/images/danny.png";
import ring from "./assets/images/ring.png";
import { FaHome } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Button from "./components/Button";

function App() {
  return (
    <div id="page">
      <div className="flex flex-col items-center justify-center">
        <header
          className="flex flex-col items-center justify-center"
          id="part-one"
        >
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

        <main className="mt-20 font-bold flex flex-col gap-5 justify-center items-center">
          {/* <div>
            <a className="bg-[#2B2B2B] opacity-90 px-40 py-3 rounded-full border-white border-2 hover:text-[#2B2B2B] hover:border-[#E1E05B] hover:bg-[#E1E05B]">
              <FaHome className="inline-block mr-2"></FaHome>
              <button>Official Website</button>
            </a>
          </div> */}
          <Button
            buttonText="Official Website"
            href="https://www.ponktoku.dev/"
            icon={<FaHome />}
          />
          <Button
            buttonText="Github"
            href="https://github.com/DannyBoy5930"
            icon={<FaGithub />}
          />
        </main>
      </div>
    </div>
  );
}

export default App;
