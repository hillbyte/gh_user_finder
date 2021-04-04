import React, { Fragment } from "react";
const GitUser = (props) => {
  let { users, repos, loading } = props;
  return (
    <Fragment>
      <section className="card">
        {loading === true ? (
          <article className="row">
            <div className="col-md-3">
              <img src={users.avatar_url} alt={users.name} />
              <div style={{ textAlign: "left", padding: "4px 10px" }}>
                {users.bio}
              </div>
              <span className="badge badge-secondary float-right  custom_link">
                {users.hireable === true ? "Hireable" : "Learner"}
              </span>
            </div>
            <div className="col-md-9">
              <ul className="list-group">
                <li className="list-group-item">
                  {users.name} ({users.login})
                </li>
                <li className="list-group-item"> {users.location}</li>
                <li className="list-group-item">Company: {users.company}</li>
                <li className="list-group-item">Email: {users.email}</li>
                <li className="list-group-item">
                  Followers: {users.followers}
                </li>
                <li className="list-group-item">
                  Following: {users.following}
                </li>
                <li className="list-group-item">
                  Twitter Handle: {users.twitter_username}
                </li>
                <li className="list-group-item">Blog: {users.blog}</li>

                <li className="list-group-item">
                  <a href={users.html_url} target="_blank">
                    More Info
                  </a>
                </li>
              </ul>
            </div>

            <h3 className="custom3">Popular Repositories</h3>
            <article className="container mapBlock">
              <hr />
              {loading
                ? repos.data.map((repo) => (
                    <div key={repo.id}>
                      <h1>{repo.name}</h1>

                      <ul>
                        <a
                          className="badge badge-info "
                          href={repo.clone_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Clone
                        </a>
                        <br />

                        <a
                          className="badge badge-success "
                          href={repo.html_url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          download
                        </a>
                        <li>Description:{repo.description}</li>
                        <li>Created at: {repo.created_at}</li>

                        <li>Language Used: {repo.language}</li>
                      </ul>
                    </div>
                  ))
                : "No Repos Found"}
            </article>
          </article>
        ) : (
          "No User Found"
        )}
      </section>
    </Fragment>
  );
};
export default GitUser;
