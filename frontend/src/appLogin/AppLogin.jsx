import React, { Component } from 'react';

export const AppLogin = (props) => {
    return (
        <div>
            <div className="form-group">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-user"></i></span>
                    <input type="text" className="form-control" name="username" placeholder="Username" required="required" />
                </div>
            </div>
            <div className="form-group">
                <div className="input-group">
                    <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                    <input type="password" className="form-control" name="password" placeholder="Password" required="required" />
                </div>
            </div>
            <div className="form-group">
                <button type="submit" className="btn btn-success btn-block login-btn">Sign in</button>
            </div>
            <div className="clearfix">
                <label className="pull-left checkbox-inline"><input type="checkbox" /> Remember me</label>
                <a href="#" className="pull-right text-success">Forgot Password?</a>
            </div>
        </div>
    );
};