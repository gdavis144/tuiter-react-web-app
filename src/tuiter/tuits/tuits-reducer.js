import { createSlice } from "@reduxjs/toolkit";
import tuits from './tuits.json';

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa.png",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "title": "hii",
}

const tuitsSlice = createSlice({
    name: 'tuits',
    initialState: tuits,
    reducers: {
        deleteTuit(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            state.splice(index, 1);
        },
        toggleLike(state, action) {
            const index = state
                .findIndex(tuit =>
                    tuit._id === action.payload);
            const tuit = state[index];
            if (tuit.liked) {
                tuit.likes = tuit.likes - 1;
            } else {
                tuit.likes = tuit.likes + 1;
            }
            state[index].liked = !state[index].liked;
        },
        createTuit(state, action) {
            state.unshift({
                ...action.payload,
                ...templateTuit,
                title: action.payload.title,
                _id: (new Date()).getTime(),
            })
        }
    }
});

export const {createTuit, deleteTuit, toggleLike} = tuitsSlice.actions;
export default tuitsSlice.reducer;