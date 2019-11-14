import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { getPhotoList } from '../../Store/Actions'

import { bindActionCreators } from "redux";
import { show } from "redux-modal";




class PhotoList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        }

    }

    componentDidMount() {
        this.props.getPhotoList()

    }

    handleOpen = name => () => {
        this.props.show(name, { message: `This is a ${name} modal` });
    };


    render() {
        let PhotoList = this.props.photo.photos && this.props.photo.photos.filter(el => el.Title.toLowerCase().includes(this.props.Search.toLowerCase()))
        return (
            <div className="all-composant ">
                <div className='search-div-qw'>
                    <h1>Photos</h1>
                    <div className='input'>

                        <input className="input-search-qw" type="text" placeholder="Search" value={this.props.Search} onChange={(event) => this.props.searchAction(event.target.value)} name="search" />
                        <span ><i class="fas fa-search"></i></span>
                    </div>
                </div>

                <span style={{ cursor: "pointer" }} onClick={this.handleOpen("AddPhotoModal")}>

                    <Link to="/Photos/add_Photo/"><i class="fas fa-plus-circle add-emo-qw"></i> Photos</Link>
                </span>

                <hr />
                <div className='List'>
                    {PhotoList && PhotoList.map((el, i) => {
                        return (

                            <div className="Picture_box">
                                <img className="Picture" src={el.src} />
                                <div className='Picture_Footer'>
                                    <p className="Picture-title">{el.Title} </p>
                                    <span key={i}>

                                        <div className='Picture-token'>
                                            <Link className="emo-link-qw" to={`/Photos/Remove_Photo/${el._id}`}>
                                                <i style={{ marginRight: "10px" }} onClick={this.handleOpen("RemovePhotoModal")} class="fas fa-trash"></i>
                                            </Link>
                                            <Link className="emo-link-qw" to={`/Photos/${el._id}`}>
                                                <i onClick={this.handleOpen('PictureModal')} class="far fa-eye"></i>
                                            </Link>
                                        </div>
                                    </span>
                                </div>
                            </div>
                        )
                    })}
                </div>

            </div >
        )
    }
}
const mapStateToProps = (state) => {
    return {

        photo: state.photos,
        Search: state.Search

    }
}

const mapDispatchtToProps = (dispatch) => ({
    getPhotoList: () => {
        dispatch(getPhotoList())
    }
    ,
    searchAction: (event) => {
        dispatch({
            type: "SET_NAME",
            payload: event
        })
    }
})
const PhotoListContainer = connect(mapStateToProps, mapDispatchtToProps)(PhotoList)


export default connect(null, dispatch =>
    bindActionCreators({ show }, dispatch)
)(PhotoListContainer);

