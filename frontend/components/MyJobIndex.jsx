var React = require('react');
var SessionStore = require("../stores/session");
var Link = require('react-router').Link;
var Logo = require('./Logo');
var MyJobIndex = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  getInitialState: function() {
    return {
      currentUser : "",
      isLoggedIn : true,
      status: "saved"
    };
  },
  componentDidMount: function() {
    this.setStateFromStore();
    this.sessionStoreToken = SessionStore.addListener(this.setStateFromStore);

  },

  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
  },

  setStateFromStore: function () {
    this.setState({
      currentUser: SessionStore.currentUser(),
      isLoggedIn: SessionStore.isLoggedIn()
    });

  },
  render: function() {
    if (!this.state.isLoggedIn){
          this.context.router.goBack();
    }
    return (
      <div>
        <div className="myjob-main group">
          <div className="myjob-sidebar">
    			  <Link to={"/"}><Logo /></Link>
            <ul>
              <h2>My Jobs</h2>
              <li><Link to={"myjobs/"}>Saved</Link></li>
              <li><Link to={"myjobs/applied"}>Applied</Link></li>
              <li><Link to={"myjobs/interviewed"}>Interviewed</Link></li>
              <li><Link to={"myjobs/offered"}>Offered</Link></li>
              <li><Link to={"myjobs/hired"}>Hired</Link></li>
              <li><Link to={"myjobs/visited"}>Visited</Link></li>
              <li><Link to={"myjobs/archived"}>Archived</Link></li>
            </ul>
          </div>
          <div className="myjob-content">
            {this.props.children}
          </div>
        </div>
    </div>
    );
  }

});

module.exports = MyJobIndex;
