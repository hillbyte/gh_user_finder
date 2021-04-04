import React, { Component, Fragment } from "react";
class SearchComponent extends Component {
  state = {
    term: "",
  };
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleVoice = (e) => {
    window.SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    // eslint-disable-next-line no-undef
    let rec = new SpeechRecognition();
    console.log(rec);
    rec.addEventListener("result", (e) => {
      e.preventDefault();
      let transcript = e.results[0][0].transcript.replace(/\s/g, "");
      this.setState({ term: transcript });
      this.props.onTermSubmit(this.state.term);

      // this.handleSubmit();
    });

    rec.start();
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.onTermSubmit(this.state.term);
  };

  render() {
    return (
      <Fragment>
        <section className="col-md-6  mx-auto my-4">
          <article>
            <form onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="term"
                value={this.state.term}
                onChange={this.handleChange}
                className="form-control"
                placeholder="Search github users..."
              />
              <span className="microphone" onClick={this.handleVoice}>
                <i class="fa fa-microphone" aria-hidden="true"></i>
              </span>
            </form>
          </article>
        </section>
      </Fragment>
    );
  }
}
export default SearchComponent;
