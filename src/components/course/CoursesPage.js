import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as courseActions from '../../actions/courseActions';
import CourseList from './CourseList';
import {browserHistory} from 'react-router';
import toastr from 'toastr';

class CoursesPage extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.redirectToAddCoursePage = this.redirectToAddCoursePage.bind(this);
    this.onDeleteCourse = this.onDeleteCourse.bind(this);
  }

  redirectToAddCoursePage() {
    browserHistory.push('/course');
  }

  onDeleteCourse(course) {
    let that = this;
    return function (e) {
      e.preventDefault();

      that.props.actions.deleteCourse(course.id);
      toastr.success('Course Deleted');
    };
  }

  render() {
    const {courses} = this.props;
    return (<div>
      <h1>Courses</h1>
      <input type="submit" className="btn btn-primary" value="Add Course" onClick={this.redirectToAddCoursePage}/>
      <CourseList courses={courses} onDeleteCourse={this.onDeleteCourse} />
    </div>);
  }
}

CoursesPage.propTypes = {
  courses: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

CoursesPage.contextTypes = {
  router: PropTypes.object
};


function mapStateToProps(state, ownProps) {
  return {
    courses: state.courses
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(courseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursesPage);
