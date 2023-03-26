import React from "react";
import {useDispatch} from "react-redux";
import {Link} from "react-router-dom";

const NavigationSidebar = (
    {
        active = 'home'
    }
    ) => {
    // let active = 'explore';
    //
    // const dispatch = useDispatch();
    const changeActive = (name) => {
        console.log("changed to" + name);
        active = name;
        // dispatch();
    }
    return (
        <div className="list-group">
            <a className="list-group-item">Tuiter</a>
            <a href="/" className={`list-group-item
                    ${active === 'home'?'active':''}`}
               onClick={() => changeActive('home')}>
                <i className="fas fa-home wd-nav-icon p-1"></i>
                Home
            </a>
            <a href="tuiter/explore" className={`list-group-item
                    ${active === 'explore'?'active':''}`}
               onClick={() => changeActive('explore')}>
                <i className="fas fa-hashtag wd-nav-icon p-1"></i>
                Explore
            </a>
            <a className={`list-group-item
                    ${active === 'notifications'?'active':''}`}>
                <i className="fas fa-bell wd-nav-icon p-1"></i>
                Notifications
            </a>
            <a className={`list-group-item
                    ${active === 'messages'?'active':''}`}>
                <i className="fas fa-envelope wd-nav-icon p-1"></i>
                Messages
            </a>
            <a className={`list-group-item
                    ${active === 'bookmarks'?'active':''}`}>
                <i className="fas fa-bookmark wd-nav-icon p-1"></i>
                Bookmarks
            </a>
            <a className={`list-group-item
                    ${active === 'lists'?'active':''}`}>
                <i className="fas fa-list wd-nav-icon p-1"></i>
                Lists
            </a>
            <a className={`list-group-item
                    ${active === 'profile'?'active':''}`}>
                <i className="fas fa-user wd-nav-icon p-1"></i>
                Profile
            </a>
            <a className={`list-group-item
                    ${active === 'more'?'active':''}`}>
                <span className="wd-nav-icon fa-stack fa-sm w-auto mx-1">
                    <i className="fas fa-circle fa-stack-1x"></i>
                    <i className="fas fa-ellipsis text-light fa-stack-1x"></i>
                </span>
                <span className="mx-3">More</span>
            </a>
        </div>
    );

    };
export default NavigationSidebar;