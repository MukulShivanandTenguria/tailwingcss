import "./App.css";
import LandingPage from "./components/LandingPage";

function App() {
  return (
    <div>
      {/* <nav className=" bg-blue-900 text-white container">
        <ul className="flex">
          <li className="py-3 px-3 cursor-pointer hover:bg-blue-800">Home</li>
          <li className="py-3 px-3 cursor-pointer hover:bg-blue-800">About Us</li>
          <li className="py-3 px-3 cursor-pointer hover:bg-blue-800">Contact</li>
        </ul>
      </nav> */}
      <LandingPage/>
    </div>
  );
}

export default App;
