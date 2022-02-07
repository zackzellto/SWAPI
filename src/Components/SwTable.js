import { Table } from "react-bootstrap"

function StarWarsTable(){
    return(
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
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
      <td>@mdo</td>
    </tr>
    
  </tbody>
</Table>

)}

export default StarWarsTable;
