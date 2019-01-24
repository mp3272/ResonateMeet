function Header() {
  return (
    <div className="header">
      <i className="header__icon" />
      <h1>Settings</h1>
      <p><b>X</b></p>
    </div>
  );
}

function UserProfile() {
  return (
    <div className="user-profile">
      <div className="user-profile__image">
        <img
          src="https://images.pexels.com/photos/320007/pexels-photo-320007.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=150&w=150"
          alt=""
        />
       
      </div>
      
    </div>
  );
}

function SettingAccount() {
  return (
    <div className="setting">
      <h2>@SpotifyUsername</h2>
      <div className="setting__row">
        <p className="notifications">Notifications</p>
        <i />
      </div>
      <div className="setting__row">
        <p className="your-location">Location Access</p>
        <i />
      </div>
      <div className="setting__row">
        <p className="edit-profile">Spotify Account</p>
        <i />
      </div>
    </div>
  );
}

function SettingOther() {
  return (
    <div className="setting">
      <h2>Other</h2>
      <div className="setting__row">
        <p className="privacy-policy">Privacy policy</p>
        <i />
      </div>
      <div className="setting__row">
        <p className="tnc">Terms and conditions</p>
        <i />
      </div>
      <div className="setting__row">
        <p className="help">Help and feedback</p>
        <i />
      </div>
    </div>
  );
}

class Settings extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="container">
        <Header />
        <UserProfile />
        <div className="settings">
          <SettingAccount />
          <SettingOther />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<Settings />, document.getElementById("root"));
