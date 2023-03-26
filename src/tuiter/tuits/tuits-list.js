import React from "react";
import TuitItem from "./tuit-item";
import {useSelector} from "react-redux";

const TuitsList = () => {
    const tuitsArray = useSelector(state => state.homeTuits)
    return(
        <ul className="list-group">
            {
                tuitsArray.map(post =>
                    <TuitItem key={post._id} post={post}/> )
            }
        </ul>
    );
};
export default TuitsList;