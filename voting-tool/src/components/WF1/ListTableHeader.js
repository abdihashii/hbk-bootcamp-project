import React from 'react';

const ListTableHeader = (props) => {
  const { sortAscAction } = props;
  return (
    <tr>
      <th>delete</th>
      <th>id</th>
      <th onClick={() => sortAscAction('firstName')}>FirstName</th>
      <th onClick={() => sortAscAction('lastName')}>LastName</th>
      <th onClick={() => sortAscAction('address')}>Address</th>
      <th onClick={() => sortAscAction('city')}>City</th>
      <th onClick={() => sortAscAction('birthDate')}>BirthDate</th>
      <th onClick={() => sortAscAction('email')}>Email</th>
      <th onClick={() => sortAscAction('phone')}>Phone</th>
      <th>Actions</th>
    </tr>
  );
}

export default ListTableHeader;
