const NavigationSidebar = () => {
    return(`
   <div class="list-group">
     <a class="list-group-item" href="/">
       <i class="fab fa-twitter"></i></a>
       <!-- continue rest of list, e.g.,
            Home, Explore, Notifications,  Messages, etc. -->
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-home wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Home</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-hashtag wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Explore</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-bell wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Notifications</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-envelope wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Messages</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-bookmark wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Bookmarks</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-list wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Lists</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <i class="fas fa-user wd-nav-icon p-1"></i>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">Profile</span>
        <div class="wd-float-done"></div>
     </a>
     
     <a class="list-group-item nav-link" href="#">
        <span class="wd-nav-icon fa-stack fa-sm">
            <i class="fas fa-circle fa-stack-1x"></i>
            <i class="fas fa-ellipsis text-light fa-stack-1x"></i>
        </span>
        <span class="d-none d-xl-block d-xxl-none wd-nav-text">More</span>
        <div class="wd-float-done"></div>
     </a>
   
   </div>
   <div class="d-grid mt-2">
     <a href="tweet.html"
        class="btn btn-primary btn-block rounded-pill">
        Tweet</a>
   </div>
 `);
}
export default NavigationSidebar;