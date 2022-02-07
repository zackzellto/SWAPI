import "./App.css";
import { Image } from "react-bootstrap";
import StarWarsTable from "./Components/SwTable";
import Logo from "./starwars-logo.png"
import SwPagination from "./Components/SwPagnation";


function App() {
  return (
    <div className="App">
      <div className="container">
        <Image fluid src={Logo} className="sw-logo" alt="Logo"></Image>
        <div className='sw-table'>
          <StarWarsTable />
          <SwPagination />
        </div>
      </div>
    </div>
  );
}

export default App;
