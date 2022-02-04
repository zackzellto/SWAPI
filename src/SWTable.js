import { Component } from "react";
import MaterialTable from "material-table";

// Import Material Icons
import { forwardRef } from 'react';
import AddBox from '@material-ui/icons/AddBox';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import Check from '@material-ui/icons/Check';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import ChevronRight from '@material-ui/icons/ChevronRight';
import Clear from '@material-ui/icons/Clear';
import DeleteOutline from '@material-ui/icons/DeleteOutline';
import Edit from '@material-ui/icons/Edit';
import FilterList from '@material-ui/icons/FilterList';
import FirstPage from '@material-ui/icons/FirstPage';
import LastPage from '@material-ui/icons/LastPage';
import Remove from '@material-ui/icons/Remove';
import SaveAlt from '@material-ui/icons/SaveAlt';
import Search from '@material-ui/icons/Search';
import ViewColumn from '@material-ui/icons/ViewColumn';

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => <ChevronLeft {...props} ref={ref} />),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />)
};

class SWTable extends Component {

  render() {

    // Material Table Columns
    const columns = [
      {
        title: 'Avatar',
        field: 'avatar',
        render: rowData => (
          <img
            style={{ height: 36, borderRadius: '50%' }}
            src={rowData.avatar} alt="row-data"
          />
        ),
      },
      
      { title: 'First Name', field: 'first_name' },
      { title: 'Birth Date', field: 'birth_date'},
      { title: 'Height', field: 'height'},
      { title: 'Mass', field: 'mass'},
      { title: 'Homeworld', field: 'homeworld'},
      { title: 'Species', field: 'species'},
    ];

    // Material Table Columns Rows
    const data = [
      {
         "id":1,
         "email":"george.bluth@reqres.in",
         "first_name":"George",
         "last_name":"Bluth",
         "avatar":"https://reqres.in/img/faces/1-image.jpg"
      },
      {
         "id":2,
         "email":"janet.weaver@reqres.in",
         "first_name":"Janet",
         "last_name":"Weaver",
         "avatar":"https://reqres.in/img/faces/2-image.jpg"
      },
      {
         "id":3,
         "email":"emma.wong@reqres.in",
         "first_name":"Emma",
         "last_name":"Wong",
         "avatar":"https://reqres.in/img/faces/3-image.jpg"
      }
   ]; 

    return (
      <div className="table-container">
      <div className="App wrapper">
        

        <MaterialTable
          title="Star Wars API Table"
          icons={tableIcons}
          columns={columns}
          data={data}
        />
        
      </div>
      </div>
    );
  }
}
export default SWTable;