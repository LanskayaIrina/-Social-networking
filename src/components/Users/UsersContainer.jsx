import React from 'react';
import {connect} from "react-redux";
import {
  follow,
  toggleisFetching,
  setCurrentPage,
  setTotalCount,
  setUsers,
  unfollow
} from "../../redax/users-reducer";
import * as axios from "axios";
import Users from "./Users";
import Preloader from "../common/preloader/Preloader";

class UsersContainer extends React.Component {
  constructor(props) {
    super(props);

  };

  componentDidMount() {
    this.props.toggleisFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`,
        {withCredentials: true})
        .then(response => {
          this.props.toggleisFetching(false);
          this.props.setUsers(response.data.items);
          this.props.setTotalCount(response.data.totalCount)
        });
  };

  onPageChange = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleisFetching(true);
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`,
        {withCredentials: true})
        .then(response => {
          this.props.toggleisFetching(false);
          this.props.setUsers(response.data.items)
        });
  };

  render() {
    return <>
      {this.props.isFetching ? <Preloader/> : null}
      <Users totalUsersCount={this.props.totalUsersCount}
             pageSize={this.props.pageSize}
             users={this.props.users}
             onPageChange={this.onPageChange}
             unfollow={this.props.unfollow}
             follow={this.props.follow}
      />
    </>
  }
};


let mapStateToProps = (state) => {
  return {
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
  }
};

// let mapDispatchToProps = (dispatch) => {
//   return {
//     follow: (userId) => dispatch(followAC(userId)),
//     unfollow: (userId) => dispatch(unfollowAC(userId)),
//     setUsers: (users) => dispatch(setUsersAC(users)),
//     setCurrentPage: (currentPage) => dispatch(setCurrentPageAC(currentPage)),
//     setTotalUsersCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
//     toggleisFetching: (isFetching) => dispatch(isFetchingAC(isFetching)),
//   }
// };
export default connect(mapStateToProps, {
  follow, unfollow, setUsers, setCurrentPage, setTotalCount,
  toggleisFetching,
})(UsersContainer);
