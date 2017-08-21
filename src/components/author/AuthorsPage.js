import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {browserHistory} from 'react-router';

import * as authorActions from '../../actions/authorActions';
import AuthorList from './AuthorList';

class AuthorsPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.redirectToAddAuthorPage = this.redirectToAddAuthorPage.bind(this);
    }

    redirectToAddAuthorPage() {
      browserHistory.push('/author');
    }

    render() {
        const {authors} = this.props;

        return (
          <div>
            <h1>Authors</h1>
            <input type="submit" className="btn btn-primary" value="Add Author" onClick={this.redirectToAddAuthorPage}/>
            <AuthorList authors={authors} />
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
