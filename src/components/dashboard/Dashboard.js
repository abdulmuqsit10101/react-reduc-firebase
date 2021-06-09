import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import Loader from '../loader/Loader'
import {connect} from 'react-redux';
import {firestoreConnect, isLoaded} from 'react-redux-firebase';
import {compose} from 'redux';

const Dashboard = ({projects}) => {

  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          {
            !isLoaded(projects) ?
              <div className='center section'><Loader/></div> :
              <ProjectList projects={projects}/>
          }
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({firestore: {ordered}}) => {
  return {
    projects: ordered.projects
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect([
    {collection: 'projects'}
  ])
)(Dashboard);
