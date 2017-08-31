import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component {
  constructor(props, context) {
      super(props, context);

      this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
      this.onDeleteAuthor = this.onDeleteAuthor.bind(this);
  }

  redirectToAddAuthorPage() {
    browserHistory.push('/author');
  }

  onDeleteAuthor(author) {
    let that = this;
    return function (e) {
      e.preventDefault();

      that.props.actions.deleteAuthor(author.id);

      toastr.success('Author Deleted');
    };
  }

  render() {
    const {authors} = this.props;

    return (
      <div>
        <h1>Authors</h1>
        <input type="submit" className="btn btn-primary" value="Add Author" onClick={this.redirectToAddAuthorPage}/>
        <AuthorList authors={authors} onDelete={this.onDeleteAuthor}/>
      </div>
    );
  }
}

AuthorsPage.propTypes = {
    authors: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        authors: state.authors
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(authorActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsPage);
