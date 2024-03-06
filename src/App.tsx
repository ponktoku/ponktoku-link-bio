import "./App.css";
import profileThumb from "./assets/images/danny.png";
import ring from "./assets/images/ring.png";
import { FaHome, FaGithub, FaLinkedin } from "react-icons/fa";
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
            id="greenRing"
            src={ring}
            alt="ring"
            className="absolute max-w-fit top-0.5 -z-10 w-[600px] md:w-[800px]"
          />
          <img
            id="profileThumb"
            src={profileThumb}
            alt="Danny Bao"
            className="mt-40 md:mt-60 relative"
            height={200}
            width={200}
          />
          <h1 id="name" className="text-4xl md:text-5xl my-6">
            Danny Bao
          </h1>
          <h3 id="usernames" className="text-gray-600 -z-20">
            DannyBoy5930 / ponktoku / Listless / ?
          </h3>
        </header>

        <main className="mt-20 font-bold flex flex-col gap-5 justify-center items-center">
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
          <Button
            buttonText="Linkedin"
            href="https://www.linkedin.com/in/danny-bao/"
            icon={<FaLinkedin />}
          ></Button>
        </main>
        <div id="dashes" className="mt-40">
          <div className="text-9xl">--</div>
        </div>
        <footer className="absolute bottom-5 text-gray-200">
          <p>
            &#169; 2024 Danny Bao. Made with{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e1e05b]"
            >
              React
            </a>{" "}
            and{" "}
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e1e05b]"
            >
              Tailwind
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
