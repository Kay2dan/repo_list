import React, { Component } from 'react';
import axios from "axios";
import RepoContainer from "./RepoContainer.jsx";
import Pagination from "./Pagination.jsx";

class App extends Component {

  constructor( props ){
    super( props );
    this.state = {  
      currentView : 1,
      totalRepos : 1,
      data : ""
    }
    this.viewMoreRepos = this.viewMoreRepos.bind( this );
    this.viewLessRepos = this.viewLessRepos.bind( this );
  }

  componentDidMount(){
    const SEARCH_ENDPOINT = 'https://api.github.com/search/repositories?q=react';

    const getReactRepositories = () => axios.get(SEARCH_ENDPOINT)
      .then((result) => result.data.items)
      .then((repos) => repos.map(({forks, name, stargazers_count, html_url}) => ({
        forks,
        name,
        stars: stargazers_count,
        url: html_url,
      })))
      .then(( data ) => {
        this.setState({
          ...this.state,
          data
        });
      });

      getReactRepositories();
  }

  viewMoreRepos(){
    console.log( "viewMoreRepos", this.state.currentView,
     "....,", ...this.state );
    // this.setState({
    //   currentView : this.state.currentView + 1,
    //   totalRepos : this.state.totalRepos
    // });
    this.setState({
      ...this.state,
      currentView : this.state.currentView + 1
    });
  }

  viewLessRepos(){
    console.log( "viewLessRepos", this.state.currentView );
    // this.setState({
    //   currentView : this.state.currentView - 1,
    //   totalRepos : this.state.totalRepos
    // });      
    this.setState({
      ...this.state,
      currentView : this.state.currentView - 1
    });
  }


  render() {
    return (
      <div className="App">
      { this.state.data && 
                <RepoContainer currentView = { this.state.currentView }
                       data = { this.state.data }/>
}
        <Pagination currentView = { this.state.currentView }
                    totalRepos = { this.state.totalRepos }
                    evViewMoreRepos = { this.viewMoreRepos }
                    evViewLessRepos = { this.viewLessRepos }/>
      </div>
    );
  }
}

export default App;
