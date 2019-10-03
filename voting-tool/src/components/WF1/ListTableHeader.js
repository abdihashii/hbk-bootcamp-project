import React from 'react';

const ListTableHeader = (props) => {
  return (
    <tr>
      <th>id</th>
      <th>FirstName</th>
      <th>LastName</th>
      <th>Address</th>
      <th>City</th>
      <th>BirthDate</th>
      <th>Email</th>
      <th>Phone</th>
      <th>Actions</th>
    </tr>
  );
}

export default ListTableHeader;
