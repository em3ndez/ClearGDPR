import React from 'react';
import PropTypes from 'prop-types';
import format from 'helpers/date-formatter';

import TableCard from 'components/core/cards/dashboard/TableCard';

const SubjectsList = ({ subjects, isLoading, errorState }) => {
  const columns = {
    id: { title: 'ID' },
    firstname: { title: 'First Name' },
    email: { title: 'Email' },
    consented_on: { title: 'Consented' }
  };

  // TODO: loading?1

  // Once we start reaching into data here, this code becomes janky since data is not ours
  const rows = subjects.map(subject => {
    return {
      id: subject.id,
      consented_on: format(subject.createdAt),
      firstname: subject.data.firstname,
      email: subject.data.email
    };
  });

  return (
    <React.Fragment>
      <TableCard columns={columns} rows={rows} title="Subjects" />
    </React.Fragment>
  );
};

SubjectsList.propTypes = {
  subjects: PropTypes.array,
  isLoading: PropTypes.bool,
  errorState: PropTypes.bool
};

export default SubjectsList;
