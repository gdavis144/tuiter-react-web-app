import PostSummaryList
    from "../PostSummaryList/index.js";

const ExploreComponent = () => {
    return(`
           <div class="input-group wd-search-group">
                <span class="input-group-text">
                    <i class="git  checkout  -b  a6fas fa-search text-black"></i>
                </span>
                <input type="text" class="form-control wd-search-bar mb-2 pl-1" placeholder="Search Tuiter"/>
           </div>
                <i class="fas fa-cog text-primary wd-settings"></i>
                <div class="wd-float-done"></div>

                <ul class="nav nav-tabs">
                    <li class="nav-item">
                        <a class="nav-link active" href="#">For you</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Trending</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">News</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Sports</a>
                    </li>
                    <li class="nav-item d-md-block d-sm-none d-none">
                        <a class="nav-link" href="#">Entertainment</a>
                    </li>
                </ul>
                <div class="card wd-no-top-border">
                    <img class="wd-full-image" src="../../images/starshiplarge.jpg" alt="SpaceX's Starship">
                    <h3 class="wd-image-text">SpaceX's Starship</h3>
                </div>
           ${PostSummaryList()}
    `);
}
export default ExploreComponent;
