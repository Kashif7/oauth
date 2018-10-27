import React,{ Component } from 'react';

export const GoogleLogin = (props) => {
    console.log(props);
   return  (<div className="text-center social-btn">
   <a href={props.authUrl} className="btn btn-danger btn-block"><i className="fa fa-google"></i> Sign in with <b>Google</b></a>
</div>);
}