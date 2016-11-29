import React, {PropTypes, Component} from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import * as actions from '../actions/entryAction';
import {bindActionCreators} from 'redux';
import CourseComponent from '../components/course';

class EntryPage extends Component {
  constructor(props, context){
    super(props,context);
    this.state = {
    data : {title : ""}
    };
    this.getData = this.getData.bind(this);
    this.setData = this.setData.bind(this);
  }
  componentWillMount(){
  	this.props.actions.homePageData();
  }
  componentDidMount(){
  	this.props.actions.loadCourse();
    this.props.actions.loadCategory();
  }
  getData(){
    this.props.actions.entryAction(this.state.data);
  }
  setData(e){
    const data = this.state.data;
    data.title = e.target.value;
    this.setState({data:data})
  }
  displayRow(data,index){
    return <div id={index}>{data.title}</div>;
  }

  render() {
    const {courses} = this.props;
    return (<div>
      <h1>Create a story</h1>
      <CourseComponent data={courses}/>
      {this.props.data.map(this.displayRow)}
      <input type="text" name= "title" value={this.state.data.title} onChange={this.setData}  />
      <button onClick={this.getData}>click here</button>
    </div>)
  }
}

EntryPage.PropTypes ={
	actions: PropTypes.object.isRequired,
	data: PropTypes.array.isRequired,
  courses: PropTypes.array.isRequired
}

function mapStateToProps(state,ownProps){
	debugger;
	return {
		data: state.entryReducer,
		courses: state.courseReducer
	}
}

function mapDispatchToProps(dispatch){
	return {
		actions: bindActionCreators(actions, dispatch)
	}
}

export default connect(mapStateToProps,mapDispatchToProps)(EntryPage);
