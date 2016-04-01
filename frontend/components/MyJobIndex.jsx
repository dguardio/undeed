var React = require('react');
var SessionStore = require("../stores/session");
var Link = require('react-router').Link;
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
    var statuses = ["Saved","Applied","Interviewed","Offerred","Hired","Visited","Archived"];
    var statuslist = status.map(function(status){
      return <MyjobIndexItem status = {status} />;
    });
    return (
      <div>
        You have reached MyJobIndex!
        <ul>
          {statuslist}
          <Link to={"myjobs/applied"}>Applied</Link>
          <Link to={"myjobs/interviewed"}>Interviewed</Link>
          <Link to={"myjobs/offered"}>Offered</Link>
          <Link to={"myjobs/hired"}>Hired</Link>
          <Link to={"myjobs/visited"}>Visited</Link>
          <Link to={"myjobs/archived"}>Archived</Link>
        </ul>
          {this.props.children}
      </ div>
    );
  }

});

module.exports = MyJobIndex;
