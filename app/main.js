var MainContent = React.createClass({
  render: function(){
    return (
      <section role="main">this is the MainContent</section>
    )
  }
});

var Footer = React.createClass({
  render: function(){
    return (
      <footer role="footer">this is the footer</footer>
    )
  }
});



var Page = React.createClass({
  render: function(){
    return (
      <div role="_main_view_wrapper" className="container-fluid">
        <Header />
        <HiddenMenu />
        <MainContent />
        <Footer />
      </div>
    )
  }
});

ReactDOM.render(<Page />, document.getElementById('__view'));
