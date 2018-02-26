/// Dependancies
import React, { Component } from 'react';

/// Database
import fire from '../fire';

// type="password"

class Auth extends Component {
    constructor(props) {
        super(props);
        this.state =  {
            email: "",
            password: ""
        }
    }

    onSignIn = (e) => {
        /*
        const email = txtEmail.value;
        const pass = txtPassword.value;
        const auth = fire.fireAuth;

        console.log("Email: " + email + " Pass: " + pass);

        /// Sign in
        const promise = auth.signInWithEmailAndPassword(email, pass);
        promise.catch(e => console.log(e.message));
        */
    }

    handleInputChange(event) {
        const target = event.target;
        const email = target.email;
        const password = target.password;

        this.setState({
            email: email,
            password: password
        });

    }

    onSignIn = e => {
        // firebase auth code
        e.preventDefault();

        alert("E " + this.state.email + " P " + this.state.password);
    }

    signOut() {
        fire.fireAuth.signOut();
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onSignIn.bind(this)}>
                    <input type="text" ref="email" onChange={this.handleInputChange.bind(this)} />
                    <input type="text" ref="password" onChange={this.handleInputChange.bind(this)} />
                    <input type="submit" value="Sign in" />
                </form>
                <form>
                    <input type="email" ref="email" />
                    <input type="password" ref="password" />
                    <input type="submit" value="Sign up" />
                </form>
                <button onClick={this.signOut} >Sign out</button>
            </div>
        );
    }
}

export default Auth;
