var HiddenMenu = React.createClass({
  render: function(){
    return (
      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target={this.props['data-target']} aria-expanded="false">
        <span className="sr-only">Toggle navigation</span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
        <span className="icon-bar"></span>
      </button>
    )
  }
});

var Branding = React.createClass({
  render: function(){
    return (
      <div className="navbar-header">
        <HiddenMenu data-target={this.props.target} />
        <a className="navbar-brand" href="#">Brand</a>
      </div>
    )
  }
});

var Navigation = React.createClass({
  links: [
    { text: "Home", url: "#home" },
    { text: "Profile", url: "#profile" },
    { text: "Messages", url: "#messages" },
    { text: "Logout", url: "#logout" },
  ],
  render: function(){
    return (
      <div className="collapse navbar-collapse" id={this.props.target}>
        <ul className="nav navbar-nav">
          
          {
            [,...this.links].map((item, index) =>
              <li data-counter={index} role={ this.props.role } className={ "btn btn-primary " + [1,4,5].indexOf(index) > -1 ? this.props.activeType : this.props.inactiveType } >
                <a href={ item.url + index }>{item.text} 
                   <span className="badge">{index}</span>
                </a>
              </li>
            )
          }
          <li role="presentation"><a href="#">Logout</a></li>
        </ul>
      </div>
    )
  }
});


var Header = React.createClass({
  target: "#bs-navbar-collapse-9",
  render: function(){
    return (
       <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <Branding target={this.target} />
          <Navigation target={this.target} navigationType="nav nav-tabs" role="presentation" activeType="active" />
        </div>
      </nav>
    )
  }
});


<div class="page-header">
  <h1>Example page header <small>Subtext for header</small></h1>
</div>