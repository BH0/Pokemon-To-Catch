/// IS NOT USED

/// Dependancies
import React, { Component } from 'react';

/// Database
import fire from '../fire';

// type="password"

class Auth extends Component {

    onSignIn = (e) => {
        e.preventDefault();

        const email = this.refs.Email.value;
        const pass = this.refs.Password.value;

        const auth = fire.fireAuth;

        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    }

    onSignUp = (e) => {
        e.preventDefault();

        const email = this.refs.Email.value;
        const pass = this.refs.Password.value;

        const auth = fire.fireAuth;

        const promise = auth.createUserWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
    }

    signOut() {
        fire.fireAuth.signOut();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSignIn.bind(this)} >
                    <label>Sign In</label>
                    <input type="email" ref="Email" />
                    <input type="password" ref="Password" />
                    <input type="submit" value="Sign in" />
                </form>
                <form onSubmit={this.onSignUp.bind(this)} >
                    <label>Sign Up</label>
                    <input type="email" ref="Email" />
                    <input type="password" ref="Password" />
                    <input type="submit" value="Sign up" />
                </form>
                <button onClick={this.signOut} >Sign out</button>
            </div>
        );
    }
}

export default Auth;
