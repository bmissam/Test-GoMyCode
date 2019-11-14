import axios from 'axios'

export const AddUserAction = (user) => {
    return (dispatch) => {
        axios.post('/Users/add_User/', user).then(res => {
            dispatch(
                {
                    type: 'ADD_USER',
                    payload: res.data
                }
            )

        })
    }
}
export const getUserList = () => {
    return disaptch => {
        axios.get('/Users/').then(res => {
            disaptch({
                type: "GET_USER_LIST",
                payload: res.data

            })
        })
    }


}

export const EditUserAction = (user, id) => {
    return dispatch => {
        axios.put('/Users/Edit_User/' + id, user).then(res => {
            dispatch({

                type: "EDIT_USER",
                payload: res.data
            })
        })

    }
}
export const RemoveUserAction = (id) => {
    return dispatch => {
        axios.delete('/Users/User/' + id).then(res => {
            dispatch({
                type: "REMOVE_USER",
                payload: res.data
            })
        })
    }
}



//--------------------------------------------------------------------------------

export const getPhotoList = () => {
    return disaptch => {
        axios.get('/Photos/').then(res => {
            disaptch({
                type: "GET_PHOTO_LIST",
                payload: res.data

            })
        })
    }


}


export const AddPhotoAction = (photo) => {
    return (dispatch) => {
        axios.post('/Photos/add_Photo', photo).then(res => {
            dispatch(
                {
                    type: 'ADD_PHOTO',
                    payload: res.data
                }
            )

        })
    }
}



export const RemovePhotoAction = (id) => {
    return dispatch => {
        axios.delete('/Photos/Photo/' + id).then(res => {
            dispatch({
                type: "REMOVE_PHOTO",
                payload: res.data
            })
        })
    }
}


//-------------------------------------------------------------------------------------


