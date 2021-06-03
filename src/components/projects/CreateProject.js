import React, {useState} from 'react'
import { connect } from 'react-redux';
import { createProject as createProjectAction } from '../../store/actions/projectActions';

const CreateProject = ({createProject}) => {

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    createProject({ title, content });
  }

  return (
    <div className="container">
      <form className="white" onSubmit={handleSubmit}>
        <h5 className="grey-text text-darken-3">Create a New Project</h5>
        <div className="input-field">
          <input type="text" id='title' value={title} onChange={(e) => setTitle(e.target.value)}/>
          <label htmlFor="title">Project Title</label>
        </div>
        <div className="input-field">
          <textarea id="content" className="materialize-textarea" value={content} onChange={(e) => setContent(e.target.value)}/>
          <label htmlFor="content">Project Content</label>
        </div>
        <div className="input-field">
          <button className="btn pink lighten-1">Create</button>
        </div>
      </form>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (project) => dispatch(createProjectAction(project))
  }
}

export default connect(null, mapDispatchToProps)(CreateProject);
