var React = require('react');
var {Link, IndexLink} = require('react-router');

var Nav = React.createClass({
  render: function() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <ul className="menu">
            <li className="menu-text">React Time App</li>
            <li>
                <IndexLink to='/timer' activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Timer</IndexLink>
            </li>
            <li>
              <Link to='/countdown' activeClassName="active-link" activeStyle={{fontWeight: 'bold'}}>Countdown</Link>
            </li>

          </ul>
        </div>
        <div className="top-bar-right">
            <ul className="menu">
              <li className="menu-text">
                By Martin Schwartz
                    </li>
<li>
                <Link to='/' activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Link!</Link>
                </li>

            </ul>
        </div>
      </div>
    );
  }
});

module.exports= Nav;
