/**
 * Created by vuonglinh on 8/20/17.
 */
import React, {PropTypes} from 'react';
import {Link} from 'react-router';

const AuthorListRow = ({author}) => {
  return (
    <tr>
      <td>{author.firstName}</td>
      <td>{author.lastName}</td>
      <td>
        <Link className="btn btn-primary" to={'/author/' + author.id}>Edit</Link>
      </td>
    </tr>
  );
};

AuthorListRow.propTypes = {
  author: PropTypes.object.isRequired
};

export default AuthorListRow;

