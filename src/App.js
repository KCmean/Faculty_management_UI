import React from 'react';
import DropdownButton from './DropdownButton';




const Table = () => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>SUBJECTS</th>
          <th>DOWNLOAD</th>
          <th>SELECT</th>
          <th><DropdownButton /></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>SUBJECT 1</td>
          <td>DOWNLOAD</td>
          <td>Data 2</td>
          <td><DropdownButton /></td>          
        </tr>
        <tr>
          <td>SUBJECT 2</td>
          <td>DOWNLOAD</td>
          <td>Data 2</td>
          <td><DropdownButton /></td>
        </tr>
        <tr>
          <td>SUBJECT 3</td>
          <td>DOWNLOAD</td>
          <td>Data 2</td>
          <td><DropdownButton /></td>                  
        </tr>
        <tr>
          <td>SUBJECT 4</td>
          <td>DOWNLOAD</td>
          <td>Data 2</td>
          <td><DropdownButton /></td>
        </tr>
        <tr>
          <td>SUBJECT 5</td>
          <td>DOWNLOAD</td>
          <td>Data 2</td>
          <td><DropdownButton /></td>         
        </tr>
        <tr>
          <td>SUBJECT 6</td>
          <td>DOWNLOAD</td>
          <td>Data 2</td>
          <td><DropdownButton /></td>
        </tr>
      </tbody>
    </table>
  );
};
export default Table;


