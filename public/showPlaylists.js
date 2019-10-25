'use strict';

class ShowPlaylists extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: []
    };
  }

  componentDidMount() {

    function getHashParams() {
      const hashParams = {};
      let e, r = /([^&;=]+)=?([^&;]*)/g,
          q = window.location.hash.substring(1);
      while ( e = r.exec(q)) {
         hashParams[e[1]] = decodeURIComponent(e[2]);
      }
      return hashParams;
    }

    const userProfileSource = document.getElementById('user-profile-template').innerHTML,
        userProfileTemplate = Handlebars.compile(userProfileSource),
        userProfilePlaceholder = document.getElementById('user-profile');

    const oauthSource = document.getElementById('oauth-template').innerHTML,
        oauthTemplate = Handlebars.compile(oauthSource),
        oauthPlaceholder = document.getElementById('oauth');

    const params = getHashParams();

    const access_token = params.access_token,
        refresh_token = params.refresh_token,
        error = params.error;

    fetch("https://api.spotify.com/v1/me/playlists", { headers: {
            'Authorization': 'Bearer ' + access_token
          }})
          .then(res => res.json())
          .then(
            (response) => {
              this.setState({
                isLoaded: true,
                items: response.items
              });
            },
          (error) => {
            this.setState({
              isLoaded: true,
              error
            });
          }
      )
  }

  render() {
    const { error, isLoaded, items } = this.state;
    console.log({items});
    if (error) {
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          {items.map(item => (
            <div key={item.name}>
              <img src={item.images[1].url}/>
              {item.name}
            </div>
          ))}
        </div>
      );
    }
  }
}

let domContainer = document.querySelector('#show-playlists');
ReactDOM.render(<ShowPlaylists />, domContainer);
