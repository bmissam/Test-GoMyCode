import React, { Component } from 'react';
import { RemoveUserAction } from '../../Store/Actions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Button, Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'


class RemoveUser extends Component {
    constructor(props) {
        super(props);
        this.state = { 
      
         }
    }
    static propTypes = {
        message: PropTypes.string.isRequired,
        handleHide: PropTypes.func.isRequired
      };
    


    RemoveUser = (id) => {
        this.props.RemoveUserAction(id)
    }



    render() { 
        const { show, handleHide} = this.props

    
        return ( <div className="all-composant">
                  <Modal show={show}>
        <Modal.Header>
          <Modal.Title>Delete</Modal.Title>
        </Modal.Header>

        <Modal.Footer>
          <Button onClick={handleHide}><Link className="linko-qw" to='/'> Cancel  </Link></Button>
          <Button bsStyle="primary" onClick={()=>{this.RemoveUser(this.props.id)
          setTimeout(() => { document.location.reload(true) }, 20)}}> <Link className="linko-qw" to='/'>Ok</Link>  </Button>
        </Modal.Footer>
      </Modal>
        </div> );
    }
}


const mapDispatchtToProps = (dispatch) => ({

  RemoveUserAction: (id) => {
        dispatch(RemoveUserAction(id))
    }


})



const RemoveUserContainer= connect(null, mapDispatchtToProps)(RemoveUser);

export default connectModal({ name: 'RemoveUserModal' })(RemoveUserContainer)



