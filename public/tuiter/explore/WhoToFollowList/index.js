import WhoToFollowListItem from "./WhoToFollowListItem.js";
import who from "./who.js"
const WhoToFollowList = () => {
    return (`
           <ul class="list-group">
            <li class="wd-follow-item list-group-item p-2 px-3">
              <p class="m-0"><b>Who to follow</b></p>
            </li>
           ${
            who.map(who => {
                return(WhoToFollowListItem(who));
            }).join('')
            }
           </ul>
`); }

export default WhoToFollowList;