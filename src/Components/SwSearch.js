import { Button, FormControl } from "react-bootstrap";
import InputGroup from "react-bootstrap/InputGroup";

const SearchBar = () => {
  return (
    <InputGroup className="mb-3">
      <FormControl
        placeholder="Search for a Star Wars character!"
        aria-label="character search"
        aria-describedby="basic-addon2"
      />
      <Button variant="primary" id="button-addon2">
        Search
      </Button>
    </InputGroup>
  );
};

export default SearchBar;
