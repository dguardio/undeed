var React = require('react');
var SessionStore = require("../stores/session");
var MyJobStore = require('../stores/myJob');
var Link = require('react-router').Link;
var Logo = require('./Logo');
var MyJobIndex = React.createClass({
  contextTypes: {router: React.PropTypes.object.isRequired},

  getInitialState: function() {
    return {
      currentUser : "",
      isLoggedIn : true,
      status: "saved",
      allmyjob:[]
    };
  },
  componentDidMount: function() {
    this.setStateFromStore();
    this.sessionStoreToken = SessionStore.addListener(this.setStateFromStore);
    this.sessionStoreToken2 = MyJobStore.addListener(this.setStateFromStore);

  },

  componentWillUnmount: function () {
    this.sessionStoreToken.remove();
    this.sessionStoreToken2.remove();
  },

  setStateFromStore: function () {

    this.setState({
      currentUser: SessionStore.currentUser(),
      isLoggedIn: SessionStore.isLoggedIn(),
      allmyjob: MyJobStore.all()
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
              <li><Link to={"myjobs/"}>Saved</Link> {MyJobStore.count("saved")}</li>
              <li><Link to={"myjobs/applied"}>Applied</Link> {MyJobStore.count("applied")}</li>
              <li><Link to={"myjobs/interviewed"}>Interviewed</Link> {MyJobStore.count("interviewed")}</li>
              <li><Link to={"myjobs/offerred"}>offered</Link> {MyJobStore.count("offerred")}</li>
              <li><Link to={"myjobs/hired"}>Hired</Link> {MyJobStore.count("hired")}</li>
              <li><Link to={"myjobs/visited"}>Visited</Link> {MyJobStore.count("visited")}</li>
              <li><Link to={"myjobs/archived"}>Archived</Link> {MyJobStore.count("archived")}</li>
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
