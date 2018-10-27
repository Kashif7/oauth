import React, { Component } from 'react';
import { AppLogin } from '../appLogin/AppLogin.jsx';
import { GoogleLogin } from '../googleLogin/GoogleLogin.jsx';
import { Redirect } from 'react-router-dom';
export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            disableLogin: false,
            authUrl: '',
            redirectTo: false
        };
    }
    componentWillMount() {
        const urlParams = new URLSearchParams(window.location.search);
        if (urlParams.get('code')) {
            this.setState({disableLogin: true});
            sendAuthToken(urlParams.get('code'))
            .then(response => {
                localStorage.setItem('profile', JSON.stringify(response));
                this.setState({redirectTo: true});

            });
        } else {
            getAuthenticatedGoogleLoginUrl()
            .then(response => this.setState({ authUrl: response.authUrl }))
            .catch(error => new Error(error));
        }
    }
    render() {
        if (this.state.redirectTo) {
            return <Redirect to="/profile" />;
        }
        return (
            <div className="login-form">
                <form>
                    <h2 className="text-center">Sign in</h2>
                    <GoogleLogin authUrl={this.state.authUrl} />
                    <div className="or-seperator"><i>or</i></div>
                    <AppLogin />
                </form>
                <div className="hint-text small">Don't have an account? <a href="#" className="text-success">Register Now!</a></div>
            </div>)
    };
}

function getAuthenticatedGoogleLoginUrl() {
    return fetch('http://localhost:3000/authUrl')
        .then(response => response.json());
}

function sendAuthToken(authCode) {
    return fetch('http://localhost:3000/googleLogin?code='+ authCode, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
        // body: JSON.stringify({authCode: authCode})
    })
    .then(response => response.json()); 
}