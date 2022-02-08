import { Table } from "react-bootstrap";

const StarWarsTable = ({ charArr }) => {
  return (
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
        
          <th>#</th>
          <th>Name</th>
          <th>Birth Year</th>
          <th>Height</th>
          <th>Mass</th>
          <th>Homeworld</th>
          <th>Species</th>
        </tr>
      </thead>
      <tbody>
        {charArr.map((char, index) => {
          return (
            <tr>
              <td hidden key={char.name}></td>
              <td>{index + 1}</td>
              <td>{char.name}</td>
              <td>{char.birth_year}</td>
              <td>{char.height}</td>
              <td>{char.mass}</td>
              <td>{char.homeworld}</td>
              <td>{char.species}</td>
            </tr>
          );
        })} 
      </tbody>
    </Table>
  );
};

export default StarWarsTable;
