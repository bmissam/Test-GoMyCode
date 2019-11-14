import React, { Component } from 'react';
import { connect } from 'react-redux'
import { AddPhotoAction } from '../../Store/Actions'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'


class AddPhoto extends Component {
  constructor(props) {
    super(props);
    this.state = {
    Title :'', 
    src :''
    }
  }
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }
  handleSubmit = (event) => {
    event.preventDefault()
    console.log(this.state)
    this.props.AddPhotoAction(this.state)


  }
  static propTypes = {
    message: PropTypes.string.isRequired,
    handleHide: PropTypes.func.isRequired
  };







  render() {
    const { show, handleHide } = this.props
    return (<div div className="all-composant" >

      <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Add New Photo</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <form /*className="new-profile-form-qw"*/ >
            <div>
              <label htmlFor="Title">
                <input className='input-form-qw' onChange={this.handleChange} placeholder="Title" type="text" name="Title" />
              </label>
            </div>

            <div>
              <label htmlFor="src"></label>
              <input className='input-form-qw' onChange={this.handleChange} placeholder="src Photo" type="text" name="src" />
            </div>

          </form>
        </Modal.Body>

        <Modal.Footer>
          <Link className="linko-qw" to="/Photos/">
          <Button onClick={handleHide}>Close</Button></Link>
          <Button bsStyle="primary" onClick={() => {
              this.props.AddPhotoAction(this.state)
            
              setTimeout(() => { document.location.reload(true) }, 20)
            }}> <Link className="linko-qw" to="/Photos/">ADD </Link> </Button>
        </Modal.Footer>
      </Modal>



    </div>);
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    AddPhotoAction: (photo) => dispatch(AddPhotoAction(photo))
  }

}

const AddPhotoContainer = connect(null, mapDispatchToProps)(AddPhoto)

export default connectModal({ name: 'AddPhotoModal' })(AddPhotoContainer)
;






