# Musipp

A React app to play with Spotify's web api.
</br>This is Node.js server for authenticating user's Spotify accounts.
Use this in conjunction with [Musipp Frontend](https://github.com/fikribasa/anekamusik-front).

## Instructions:

<ul>
<li>Clone or Download this repo.</li>
<li><code>cd</code> into the downloaded directory.</li>
<li>Run <code>npm i</code>. Wait until it finishes.</li>
<li>Run <code>npm start</code>. 
</ul>

### Create Environment Variable

```
$ cp .env.example .env
$ nano .env
```

```
SERVER_PORT = YOUR-PORT

DB_HOST = "YOU-DB-HOST"
DB_USER = "YOUR-DB-USER"
DB_PASSWORD = "YOUR-DB-PASSWORD"
DB_NAME = "YOUR-DB-NAME"
```

</br>
To ensure everything is running as it should, navigate to <code>http://localhost:3000/</code> in your web browser.
This is the URL for the client-side of the Musipp application. Next, navigate to <code>http://localhost:8888/auth</code>.
This is the URL for the API server of the Musipp application. Navigating to this URL should show <code>OAuth Login page for Spotify API</code>.
</br>
If both URL's look good, then you're all set!
