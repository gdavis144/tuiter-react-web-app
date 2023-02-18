
function WhoToFollowListItem(who) {
    const alice = {  first: 'Alice',  last: 'Wonderland',  salary: 100000};
    alice.salary += 10000;
    console.log(alice);
    alice['salary'] = alice.salary + 10000;
    console.log(alice);
    return (`
      <li class="container list-group-item wd-follow-item pt-2 pb-2">
         <div class="row">
            <div class="col-2 g-0">
                <img class="wd-follow-image" src=${who.avatarIcon}>
            </div>
            <div class="col-7 wd-follow-text">
                <p class=""><b>${who.userName}</b>
                    <i class="fas fa-check-circle"></i>
                </p>
               <p class="">${who.handle}</p>
            </div>
            <div class="col-3 g-0">
              <button class="btn btn-primary wd-follow-button mt-1">Follow</button>
            </div>
         </div>
      </li>
   `);
}

export default WhoToFollowListItem;