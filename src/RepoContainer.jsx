import React from "react";


const RepoContainer = ({ currentView, data }) => {
    console.log( "props in repoContainer are...", data );
    return(
        <div className = "reposContainer">
            <RepoList currentView = { currentView }
                      data = { data }/>
        </div>
    );
};


const RepoList = ({ currentView,
                     data }) => {
    const renderRepos = ( currentView, data ) => {
        let totalReposToDisplay = currentView * 3;
        let a = [];
        data.forEach(( eachRepo, i ) => {
            if( i < totalReposToDisplay ){
                console.log( "i is...",i, "--- totalReposToDisplay is...", totalReposToDisplay, "...", eachRepo.name );
                a.push(   
                    <tr key = {`${eachRepo.name}${i}`}>
                       <td>{ eachRepo.name }</td>
                       <td>{ eachRepo.stars }</td>
                       <td>{ eachRepo.forks }</td>
                    </tr>
               );
            }
        });
        return a;
        // );
    };

    // let d = renderRepos( currentView, data );
    // console.log( "d", d );

    return(
        <table className = "repoTable">
            <thead>
                <tr>
                    <th> Name </th>
                    <th> Stars </th>
                    <th> Forks </th>
                </tr>
            </thead>
            <tbody>
                { renderRepos( currentView, data )}
            </tbody>
        </table>
    );
};

export default RepoContainer;
