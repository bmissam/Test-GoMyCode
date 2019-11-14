import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


import { getUserList } from '../../Store/Actions'

import { bindActionCreators } from "redux";
import { show } from "redux-modal";





class UserList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            search: "",
            

        }

    }

   

    componentDidMount() {
        this.props.getUserList()

    }

    handleOpen = name => () => {
        this.props.show(name, { message: `This is a ${name} modal` });
    };


    render() {
        // let userlist = this.props.users.user && this.props.users.user.filter(el => el.Name.toLowerCase().includes(this.props.Search.toLowerCase().trim()) || el.LastName.toLowerCase().includes(this.props.Search.toLowerCase().trim()))
        return (
            <div className="all-composant ">
                
                    <h1>User List</h1>
                  

                <span style={{ cursor: "pointer" }} onClick={this.handleOpen("AddUserModal")}>  
                
                 <Link to="/add_User/"> <i class="fas fa-plus-circle add-emo-qw"></i> Users</Link> 
                 </span>


            
                <hr />

             
                <table className='table '>

                    <tr>
                        <th> Name</th>
                        <th>SurName</th>
                        <th>BirthPlace</th>
                        <th>BirthYear</th>
                        <th >Action</th>
                     

                    </tr>

                    {this.props.user.users && this.props.user.users.map((el, i) => {
                        return (


                            <tr className="tab-line-qw" key={i}>  
                               <td > {el.Name} </td>
                                <td >{el.Surname} </td>
                                <td >{el.BirthPlace}</td>
                                <td >{el.BirthYear} </td>
                               

                                <td >       <Link className="emo-link-qw" to={`/Edit_User/${el._id}`}>
                                    <i onClick={this.handleOpen("EditUserModal")} class="fas fa-pen" ></i>
                                </Link>
                             
                         
                                    <Link className="emo-link-qw" to={`/Remove_User/${el._id}`}>
                                        <i onClick={this.handleOpen("RemoveUserModal")} class="fas fa-trash"></i>
                                    </Link> 
                                    <Link className ="emo-link-qw" to='/Photos'>
                                       <i class="fas fa-images "></i>
                                    </Link>
                                 </td>
                               
                            </tr>


                        )
                    })}

                </table>

            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
  user: state.users


    }
}

const mapDispatchtToProps = (dispatch) => ({

    getUserList: () => {
        dispatch(getUserList())
    }
   

})


const UserListContainer=connect(mapStateToProps, mapDispatchtToProps)(UserList)



export default connect(null, dispatch =>
    bindActionCreators({ show }, dispatch)
  )(UserListContainer);



  