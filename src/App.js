import "./App.css";
import { Image } from "react-bootstrap";
import StarWarsTable from "./Components/SwTable";
import Logo from "./starwars-logo.png"
import SwPagination from "./Components/SwPagnation";
import { useState, useEffect } from "react";
import axios from "axios";
import { FormControl, Button, InputGroup } from "react-bootstrap";

function App() {

const [pageNumber, setPageNumber] = useState(1);
const [pageCount, setPageCount] = useState("");
const [charName, setCharName] = useState("");
const [charArr, setCharArr] = useState([]);


const SWAPI_URL = "https://swapi.dev/api/people"

useEffect(() => {
  fetchChars();
}, [pageNumber]);


 async function getChars(chars) {
  for (const char of chars) {
    await getHomeworld(char);
    await getSpecies(char);
  }
  setCharArr(chars);
}
async function fetchChars() {
  let url;
  if (charName === "") {
    url = `${SWAPI_URL}?page=${pageNumber}`;
  } else {
    url = `${SWAPI_URL}?search=${charName}&page=${pageNumber}`;
  }
  const { data } = await axios.get(url);
  setPageCount(Math.ceil(data.count / 10));
  getChars(data.results);
}

async function searchChar(e) {
  e.preventDefault();
  setPageNumber(1);
  const url = `${SWAPI_URL}?search=${charName}`;
  const { data } = await axios.get(url);
  setPageCount(Math.ceil(data.count / 10));
  getChars(data.results);
}

async function getSpecies(char) {
  if (!char.species.length) {
    char.species = "Human";
  } else {
    const { data } = await axios.get(char.species[0]);
    char.species = data.name;
  }
}

async function getHomeworld(char) {
  const { data } = await axios.get(char.homeworld);
  char.homeworld = data.name;
}

async function paginationClicks(buttonName) {
  if (buttonName === "Next" && pageNumber < pageCount) {
    setPageNumber(pageNumber + 1);
  }

  if (buttonName === "Prev" && pageNumber > 1) {
    setPageNumber(pageNumber - 1);
  }
}

async function paginate(pageNum) {
  let url;
  if (charName === "") {
    url = `${SWAPI_URL}?page=${pageNum}`;
  } else {
    url = `${SWAPI_URL}?search=${charName}&page=${pageNum}`;
  }
  const { data } = await axios.get(url);
  getChars(data.results);
}



  return (
    <div className="App">
      <div className="popout">
      <div className="container">
        <Image fluid src={Logo} className="sw-logo" alt="Logo"></Image>
        <div className="search-bar">
        <InputGroup className="mb-3">
      <FormControl
        placeholder="Search for a Star Wars character!"
        aria-label="character search"
        aria-describedby="basic-addon2"
        type="text"
        onChange={(e) => setCharName(e.target.value)}
        value={charName}
      />
      <Button variant="primary" id="button-addon2" onClick={searchChar}>
        Search
      </Button>
    </InputGroup></div>
        <div className='sw-table'>
          <StarWarsTable charArr={charArr}/>
          <SwPagination 
          pageCount={pageCount}
          paginate={paginate}
          paginationClicks={paginationClicks}
          setPageNumber={setPageNumber}/>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
