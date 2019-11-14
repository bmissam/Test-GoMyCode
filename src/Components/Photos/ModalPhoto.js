import React, { Component } from 'react';
import axios from 'axios';


import { Link } from 'react-router-dom'

import { Modal } from 'react-bootstrap'
import { connectModal } from 'redux-modal'
class ModalPicture extends Component {
    constructor(props) {
        super(props);
        this.state = {
            photo: []
        }
    }


    componentDidMount() {
        axios.get("/Photo/" + this.props.id).then(res => this.setState({ photo: [res.data] }))
    }

    render() {
        const { show, handleHide } = this.props
        console.log(this.state.photo)
        return (
            <div>
                <Modal show={show}>


                    {this.state.photo.map(el =>
                        <div className="Modal-box">
                            <Link className="Exit" to='/Photos'>
                                <p>X</p>
                            </Link>
                            <img  src={el.src} />
                        </div>
                    )}

                </Modal>


            </div>);
    }
}





export default connectModal({ name: 'PictureModal' })(ModalPicture)
