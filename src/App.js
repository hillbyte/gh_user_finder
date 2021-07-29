import React, { Component, Fragment } from "react";
import axios from "axios";
import SearchComponent from "./Component/SearchComponent";
import GitUser from "./Component/GitUser";
class App extends Component {
  state = {
    term: "",
    reposData: "",
    loading: false,
  };

  onTermSubmit = async (term) => {
    let client_id =process.env.REACT_APP_CLIENT_ID;
    let client_secret =process.env.REACT_APP_CLIENT_SECRET;
    let response = await axios.get(
      `https:api.github.com/users/${term}?Client_Id${client_id}&Client_Secret${client_secret}`,
       {
 headers: {
   "Access-Control-Allow-Origin": "*"
 }
}
    );
    let repos = await axios.get(
      `https:api.github.com/users/${term}/repos?Client_Id${client_id}&Client_Secret${client_secret}`,
       {
 headers: {
   "Access-Control-Allow-Origin": "*"
 }
}
    );
    this.setState({ term: response.data, reposData: repos, loading: true });
  };
  render() {
    return (
      <Fragment>
        <SearchComponent onTermSubmit={this.onTermSubmit} />
        <section>
          <hr className="hr" />
          <GitUser
            users={this.state.term}
            repos={this.state.reposData}
            loading={this.state.loading}
          />
        </section>
      </Fragment>
    );
  }
}
export default App;
