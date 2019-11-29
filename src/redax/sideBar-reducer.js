let initialState = {
  user: [
    {
      id: 1,
      name: 'Alisa',
      img: 'https://images.pexels.com/photos/1319911/pexels-photo-1319911.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500'
    },
    {
      id: 2,
      name: 'Rita',
      img: 'data:image/jpeg;base64,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'
    },
    {id: 3, name: 'Dima', img: 'https://cdn.pixabay.com/photo/2017/08/02/19/54/stylish-boy-2573130__340.jpg'},
  ]
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;