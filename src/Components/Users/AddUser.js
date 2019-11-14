import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { AddUserAction } from '../../Store/Actions'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'



class AddUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Name: "",
      Surname: "",
      BirthPlace: "",
      BirthYear: "",
      
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    this.props.AddUserAction(this.state)


  }

  static propTypes = {
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };






  render() {
    const { show, handleHide } = this.props

    return (<div className="all-composant " >
      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add User</Modal.Title>
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
          <Link className="linko-qw" to='/'>
            <Button onClick={handleHide}>Close</Button> </Link>
          <Button bsStyle="primary" onClick={() => {
            this.props.AddUserAction(this.state)
            setTimeout(() => { document.location.reload(true) }, 20)
          }}
          ><i class="fas fa-user-plus"></i> <Link className="linko-qw" to='/'> ADD User   </Link> </Button>
        </Modal.Footer>
      </Modal>


    </div>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddUserAction: (user) => dispatch(AddUserAction(user))
  }

}

const AddUserContainer = connect(null, mapDispatchToProps)(AddUser)

export default connectModal({ name: 'AddUserModal' })(AddUserContainer)








