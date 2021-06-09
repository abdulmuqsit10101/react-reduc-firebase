import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import Loader from "../loader/Loader";

const ProjectDetails = ({project}) => {
  if(project){
    const { title, content, authorFirstName, authorLastName } = project;
    return (
      <div className="container section project-details">
        <div className="card z-depth-0">
          <div className="card-content">
            <span className="card-title">{title}</span>
            <p>{content}</p>
          </div>
          <div className="card-action grey lighten-4 grey-text">
            <div>Posted by The {authorFirstName + ' ' + authorLastName}</div>
            <div>2nd September, 2am</div>
          </div>
        </div>
      </div>
    )
  }
  else{
    return <div className='container center section'><Loader/></div>
  }

}

const mapStateToProps = ({ firestore: { data } }, ownProps) => {
  const id = ownProps.match.params.id;
  const projects = data && data.projects;
  const project = projects ? projects[id] : null;
  return {
    project: project
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(
    [{collection: 'projects'}]
  )
)(ProjectDetails)
