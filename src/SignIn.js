// Sign up
import React from 'react';

var SignIn = React.createClass({
    render() {
        return(
            <div className="container" id="signin">
                <p>Administrator Sign-In</p>
                <form onSubmit={this.props.submit} className="col s4 authenticate" id="sign-up">
                    <div className="row inputs">
                        
                            <input id="email" type="email" placeholder="Email" className="validate form col s4" />
                            <div className="col s1"></div>
                            <input id="password" type="password" placeholder="Password" className="validate form col s4" />
                            <button id="signin-button" className="btn btn-primary">Sign In</button>
                    </div>
                    
                </form>
            </div>
        )
    }
});

export default SignIn;