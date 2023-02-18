function PostSummaryItem(post) {
    return (`
<div class="card">
                    <div class="card-body container">
                        <div class="row wd-row">
                            <div class="wd-post-text col-md-10 col-sm-9"><p class="wd-post-subtitle">${post.topic}</p>
                                <p class="wd-card-title"><b class="text-white">${post.userName}</b>
                                    <i class="fas fa-check-circle"></i>
                                    - ${post.time}</p>
                                <p class = "text-white">${post.title}</p>
                                <p class="wd-post-subtitle">${post.tweets}</p>
                            </div>
                            <div class="col-md-2 col-sm-3 g-md-0">
                                <img class="wd-post-image" src=${post.image}>
                                <div class="wd-float-done"></div>
                            </div>
                        </div>
                    </div>
                </div>
   `);
}

export default PostSummaryItem;