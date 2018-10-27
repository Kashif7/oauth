const path = require('path'),
    fs = require('fs'),
    opn = require('opn')
    express = require('express'),
    app = express(),
    bodyparser = require('body-parser')
    querystring = require('querystring'),
    cors = require('cors'),
    url = require('url'),
    { google } = require('googleapis'),
    plus = google.plus("v1");

app.use(bodyparser.json());
app.use(cors());

const keyPath = path.join(__dirname, '../oauthCredentials.json');
let keys = {redirect_uris: ['']};
let userData;

if (fs.existsSync(keyPath)) {
    keys = require(keyPath).web;
}

const oauth2Client = new google.auth.OAuth2(keys.client_id, keys.client_secret, keys.redirect_uris[0]);

google.options({
    auth: oauth2Client
});

const scopes = ['https://www.googleapis.com/auth/plus.me'];

const authorizeUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: scopes.join(' '),
  });

  app.get('/authUrl', (req, res) => {
    res.send({
        authUrl: authorizeUrl
    })
  });

app.get('/googleLogin', (req, res) => {
    console.log(req.url);
    const qs = querystring.parse(url.parse(req.url).query);
    console.log(qs.code, 'qs.code');
   oauth2Client.getToken(qs.code,(err,tokens) => {
    // const { tokens } = token;
    oauth2Client.credentials = tokens;
    plus.people.get({userId: 'me'}).then(userData => {
        console.log(userData.data);
        res.send({
            userData: userData.data
        }); 
    }).catch(error => {
        console.log('an error');
        res.send({
            err: error
        })
    });
   });
});

app.listen(3000, err => {
    if (err) {
        console.error('an error occured');
        return;
    }

    console.log('running successfully on port 3000');
    // opn(authorizeUrl, {wait: false}).then(cp => cp.unref());
})