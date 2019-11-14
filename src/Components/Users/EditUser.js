import React, { Component } from 'react';
import { connect } from 'react-redux'
import { EditUserAction } from '../../Store/Actions'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class EditUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Surname: "",
      BirthPlace: "",
      BirthYear: "",
    }
  }

  static propTypes = {
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };



  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value

    })
  }
  handleSubmit = (id) => {

    this.props.EditUserAction(this.state, id)
  }


  render() {
    const { show, handleHide } = this.props

    return (<div className="all-composant">
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Edit User</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form /*className="new-profile-form-qw"*/>

            <div>
              <label htmlFor="Name">
                <input className='input-form-qw' onChange={this.handleChange} placeholder="Name" type="text" name="Name" />
              </label>
            </div>

            <div>
              <label htmlFor="Surname"></label>
              <input className='input-form-qw' onChange={this.handleChange} placeholder="Surname" type="text" name="Surname" />
            </div>

            <div>
              <label htmlFor="BirthPlace"></label>
              <input className='input-form-qw' onChange={this.handleChange} placeholder="BirthPlace" type="text" name="BirthPlace" />
            </div>

            <div>
              <label htmlFor="BirthYear"></label>
              <input className='input-form-qw' onChange={this.handleChange} placeholder="BirthYear" type="text" name="BirthYear" />
            </div>



          </form>
        </Modal.Body>

        <Modal.Footer>
          <Button onClick={handleHide}><Link className="linko-qw" to='/'>  Cancel</Link></Button>
          <Button bsStyle="primary" onClick={() => {
            this.handleSubmit(this.props.id)
            setTimeout(() => { document.location.reload(true) }, 20)
          }}><Link className="linko-qw" to='/'> Edit Profile  </Link></Button>
        </Modal.Footer>
      </Modal>
    </div>);
  }
}
const mapDispatchToProps = (dispatch) => {
  return {

    EditUserAction: (user, id) => dispatch(EditUserAction(user, id))
  }
}

const EditUserContainer = connect(null, mapDispatchToProps)(EditUser)




export default connectModal({ name: 'EditUserModal' })(EditUserContainer)

