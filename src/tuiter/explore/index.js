import React from "react";
import PostSummaryList from "../post-summary-list";
import "./index.css";
import NavigationSidebar from "../navigation-sidebar";
import WhoToFollowList from "../who-to-follow-list";
import {Provider} from "react-redux";
import {configureStore} from "@reduxjs/toolkit";

import whoReducer
    from "../reducers/who-reducer";
import tuitsReducer from "../tuits/tuits-reducer";
// import tuitsReducer from "../reducers/tuits-reducer";
// import homeReducer from "../tuits/tuits-reducer";
// const store = configureStore({
//     reducer: {who: whoReducer, tuits: tuitsReducer, homeTuits: homeReducer}});
const store = configureStore({
    reducer: {
        who: whoReducer,
        tuitsData: tuitsReducer}
});

const ExploreComponent = () => {
    return(
        <>
            <div className="row">
                <div className="col-11 position-relative">
                    <input placeholder="Search Tuiter"
                           className="form-control rounded-pill ps-5"/>
                    <i className="bi bi-search position-absolute
                       wd-nudge-up"></i>
                </div>
                <div className="col-1">
                    <i className="wd-bottom-4 text-primary float-end bi
                       bi-gear-fill fs-2 position-relative"></i>
                </div>
            </div>
            <ul className="nav nav-pills mb-2">
                <li className="nav-item">
                    <a className="nav-link active">For You</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">Trending</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link">News</a>
                </li>
            </ul>
            <div className="position-relative mb-2">
                <img src="/images/starship.jpg" className="w-100"/>
                <h1 className="position-absolute wd-nudge-up text-white">
                    SpaceX Starship</h1>
            </div>
            <PostSummaryList/>
        </>
    );
};

function Explore() {
    return (
        <Provider store={store}>

            <div className="row mt-2">
                <div className="col-2 col-md-2 col-lg-1 col-xl-2">
                    <NavigationSidebar active={"explore"}/>
                </div>
                <div className="col-10 col-md-10 col-lg-7 col-xl-6"
                     style={{"position": "relative"}}>
                    {/*<ExploreComponent/>*/}
                </div>
                <div className="d-sm-none d-md-none d-lg-block col-lg-4 col-xl-4">
                    <WhoToFollowList/>
                </div>
            </div>
        </Provider>
    );
}

export default Explore;