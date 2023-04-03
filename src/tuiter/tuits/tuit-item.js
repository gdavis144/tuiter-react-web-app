import {useDispatch} from "react-redux";
import React from "react";
import {deleteTuitThunk, updateTuitThunk} from "../../services/tuits-thunks";
const TuitItem = (
    {
        post = {
            "_id": 234,
            "topic": "Space",
            "userName": "SpaceX",
            "time": "2h",
            "title": "100s of SpaceX Starships land on Mars after a 6 month journey. 1000s of Martian colonists being building Mars Base 1",
            "image": "spacex.png",
            "liked": true,
            "replies": 123,
            "retuits": 432,
            "likes": 2345,
            "handle": "@spacex",
            "tuit": "You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars"
        }
    }
) => {
    const dispatch = useDispatch();
    const deleteTuitHandler = (id) => {
        dispatch(deleteTuitThunk(id));
    }

    const likeTuitHandler = (tuit) => {
        dispatch(updateTuitThunk({
            ...tuit,
            liked: !(tuit.liked),
            likes: (tuit.liked)? (tuit.likes - 1) : (tuit.likes + 1)
        }));
    }

    const likedIcon = post.liked ? "fa-solid text-danger fa-heart pe-1" : "fa-regular fa-heart pe-1"

    return(
        <li className="list-group-item">
            <div className="row">
                <div className="col-2">
                    <img width={40} className="float-end rounded-circle" src={`/images/${post.image}`}/>
                </div>
                <div className="col-10">
                    <div>
                        <i className="bi bi-x-lg float-end"
                           onClick={() => deleteTuitHandler(post._id)}></i>
                        <b>{post.username}</b>
                        <i className="fa-solid fa-circle-check text-primary ps-2 pe-2"></i>
                        {post.handle} . {post.time}</div>
                    <div>{post.tuit}</div>
                    <div>
                        <label className="col-3"><i className="fa-regular fa-comment pe-1"></i>{post.replies}</label>
                        <label className="col-3"><i className="fa-solid fa-repeat pe-1"></i>{post.retuits}</label>
                        <label className="col-3"><i className={likedIcon}
                                                    onClick={() => likeTuitHandler(post)}></i>{post.likes}</label>
                        <label className="col-3"><i className="fa-solid fa-share-nodes pe-1"></i></label></div>
                </div>
            </div>
        </li>
    );
};
export default TuitItem;