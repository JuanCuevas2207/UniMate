import React, { Component } from 'react';
import axios from 'axios';
import {} from 'react-router-dom'

const url = 'http://localhost:4000';
export default class SignUp extends Component {
    state = {
        email: '',
        password: '',
        username: '',
        name: '',
        lastName: '',
        phone: '',
        bornYear: '',
        lesee: 'off',
        gender: 'off'
    }
    onInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
    onSubmit = async (e) => {
        e.preventDefault();
        var r
        /*if (this.lesse === 'on') {
            r = await axios.post(url + '/lesee', this.state);
        } else {
            r = await axios.post(url + '/roommate', this.state);
            console.log(r.length);
        }
        if(r){
            window.location.assign('http://localhost:3000');
        }
        
        
        */

    }
    render() {
        return (
            <form>
                <div className="mb-3">
                    <input type="text" className="form-control" id="name" placeholder='name' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="lastName" placeholder='Last name' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="text" className="form-control" id="username" placeholder='Username' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder='email' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder='password' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" id="phone" placeholder='phone' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="number" className="form-control" id="bornYear" placeholder='born year' onChange={this.onInputChange} />
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="gender" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="gender">Woman?</label>
                </div>
                <div className="form-check form-switch">
                    <input className="form-check-input" type="checkbox" role="switch" id="lesee" onChange={this.onInputChange} />
                    <label className="form-check-label" htmlFor="lesee">Lesee?</label>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Join</button>
            </form>
        )
    }
}
