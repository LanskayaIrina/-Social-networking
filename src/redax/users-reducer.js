const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENTPAGE = 'SET_CURRENTPAGE';
const TOTAL_COUNT = 'TOTAL_COUNT';
const IS_FETCHING = 'IS_FETCHING';


let initialState = {

  users:
      [
        /*
                    {
                      id: 1, photoUlr: 'https://whatsism.com/uploads/posts/2018-07/1530544023_n6fgwzftnvg.jpg',
                      followed: true,
                      fullName: 'Dmitry',
                      status: 'I am boss',
                      location: {city: 'Minsk', country: 'Belarus'}
                    },
                    {
                      id: 2,
                      photoUlr: 'https://trikky.ru/wp-content/blogs.dir/1/files/2016/12/Avatar_1481048766783.png',
                      followed: false,
                      fullName: 'Anastasia',
                      status: 'I am waitress',
                      location: {city: 'Kiev', country: 'Ukraine'}
                    },
                    {
                      id: 3,
                      photoUlr: 'https://skajnet.ru/wp-content/uploads/2018/07/avatarka-prikolnaya.jpg',
                      followed: true,
                      fullName: 'Elena',
                      status: 'I am programmer',
                      location: {city: 'Kharkov', country: 'Ukraine'}
                    },
                    {
                      id: 4,
                      photoUlr: 'http://cdn01.ru/files/users/images/32/c4/32c4cb047498da9301d64986ee0a646b.jpeg',
                      followed: true,
                      fullName: 'Stepan',
                      status: 'I am boss too',
                      location: {city: 'Moscow', country: 'Russia'}
                    },
                    {
                      id: 5,
                      photoUlr: 'http://gloria-mur.ru/wp-content/uploads/2017/05/avatar1-740x463.jpg',
                      followed: false,
                      fullName: 'Anna',
                      status: 'I am translator',
                      location: {city: 'Boston', country: 'USA'}
                    },
        */
      ],
  pageSize: 10,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: false

};


const usersReducers = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        // users: [...state.users],
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: true};
          }
          return u;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(u => {
          if (u.id === action.userId) {
            return {...u, followed: false};
          }
          return u;
        }),
      };
    case SET_USERS:
      return {
        ...state,
        users: action.users,
      };
    case SET_CURRENTPAGE:
      return {
        ...state,
        currentPage: action.currentPage,
      };
    case TOTAL_COUNT:
      return {
        ...state,
        totalUsersCount: action.totalCount,
      };
    case IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    default:
      return state;
  }
};
export const follow = (userId) => ({type: FOLLOW, userId});
export const unfollow = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENTPAGE, currentPage});
export const setTotalCount = (totalCount) => ({type: TOTAL_COUNT, totalCount});
export const toggleisFetching = (isFetching) => ({type: IS_FETCHING, isFetching});

export default usersReducers;