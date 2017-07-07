import React from "react";


// We should use the currentView & totalRepos props
// to check the first page limit & last page limit
// so that user cannot click when its the first / last
// page.
const Pagination = ({ currentView,
                      totalRepos,
                      evViewMoreRepos,
                      evViewLessRepos }) => {
   return(
      <div className = "pageContainer">
         <PageBtn btnType = "show_more"
                  evOnClick = { evViewMoreRepos }/>
         <PageBtn btnType = "show_less"
                  evOnClick = { evViewLessRepos }/>
      </div>
   );
};


const PageBtn = ({ btnType, evOnClick }) => {
   return(
      <div className = {`btnPage ${btnType}`} 
           onClick = {() => evOnClick()}>
         { btnType }
      </div>
   );
};

export default Pagination;