import React, { Component } from 'react'
import axios from 'axios';
const url = 'http://localhost:4000';
export default class SignIn extends Component {
    state = {
        email: '',
        password: ''
    }
    onInputChange = (e) => {
        this.setState({ [e.target.id]: e.target.value });
    }
     onSubmit=async(e)=>{
        e.preventDefault();     
        const r=await axios.post(url+'/signin',this.state);
        console.log(r);

    }
    render() {
        return (
            <form>
                <div className="mb-3">
                    <input type="email" className="form-control" id="email" placeholder='email' onChange={this.onInputChange} />
                </div>
                <div className="mb-3">
                    <input type="password" className="form-control" id="password" placeholder='password' onChange={this.onInputChange}/>
                </div>
                <button type="submit" className="btn btn-primary" onClick={this.onSubmit}>Join</button>
            </form>
        )
    }
}
