import React, { Component } from 'react';
import { RemovePhotoAction } from '../../Store/Actions'
import { connect } from 'react-redux'
import {Link} from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'

class RemovePhoto extends Component {
    constructor(props) {
        super(props);
        this.state = { 
      
         }
    }
    static propTypes = {
        message: PropTypes.string.isRequired,
        handleHide: PropTypes.func.isRequired
      };
    


    RemovePhoto = (id) => {
        this.props.RemovePhotoAction(id)
    }



    render() { 
        const { show, handleHide} = this.props

    
        return ( <div className="all-composant">
            <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button onClick={handleHide}><Link className="linko-qw" to="/Photos/">Cancel  </Link></Button>
          <Button bsStyle="primary" onClick={()=>{this.RemovePhoto(this.props.id)
             setTimeout(()=>{  document.location.reload(true)},20)}}> <Link className="linko-qw" to="/Photos/">Ok  </Link></Button>
        </Modal.Footer>
      </Modal>
        </div> );
    }
}


const mapDispatchtToProps = (dispatch) => ({

  RemovePhotoAction: (id) => {
        dispatch(RemovePhotoAction(id))
    }


})

const RemovePhotoContainer = connect(null, mapDispatchtToProps)(RemovePhoto);




 
export default connectModal({ name: 'RemovePhotoModal' })(RemovePhotoContainer)


