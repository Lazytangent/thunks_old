// Action Type Definitions
const SET_RANDOM_PHOTO = 'photos/SET_RANDOM_PHOTO';

//Action Creators
const setRandomPhoto = (payload) => ({
    type: SET_RANDOM_PHOTO,
    payload,
});

//Thunks
export const getRandomPhoto = (id) => async (dispatch) => {
    const res = await fetch(`/api/users/house/${id}`);
    const photo = await res.json();
    dispatch(setRandomPhoto(photo));
};

// Define an intial state
const initState = [
    {
        id: 0,
        name: 'Test User',
        houseId: 4,
        teacher: false,
    },
];

//Reducer
const userReducer = (state = initState, action) => {
    switch (action.type) {
        case SET_RANDOM_PHOTO:
            return action.payload;
        default:
            return state;
    }
};

export default userReducer;
