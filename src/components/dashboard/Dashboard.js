import React from 'react'
import ProjectList from '../projects/ProjectList'
import Notifications from './Notifications'
import {connect} from 'react-redux';

const Dashboard = ({ projects }) => {
  return (
    <div className="dashboard container">
      <div className="row">
        <div className="col s12 m6">
          <ProjectList projects={projects} />
        </div>
        <div className="col s12 m5 offset-m1">
          <Notifications/>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = ({ project }) => {
  return {
    projects: project.projects
  }
}

export default connect(mapStateToProps)(Dashboard);
