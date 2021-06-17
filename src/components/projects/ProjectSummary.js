import React from 'react'
import {getMonthByName} from "../../utils";

const ProjectSummary = ({ project }) => {
  const { title, createdAd } = project;
  const date = createdAd && new Date(createdAd.seconds);
  return (
    <div className="card z-depth-0 project-summary">
      <div className="card-content grey-text text-darken-3">
        <span className="card-title ">{title}</span>
        <p>Posted by The Net Ninja</p>
        {date && <p className="grey-text">{date.getDay()} {getMonthByName({
          month: date.getMonth(),
          isFullName: true
        })}, {date.getHours()}am</p>}
      </div>
    </div>
  )
}

export default ProjectSummary
