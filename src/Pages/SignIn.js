import { Component } from 'react'
import BrandBar from '../Components/brandBar/BrandBar'
import LoginContainer from '../Components/loginContainer/LoginContainer'

class SignIn extends Component{
    render(){
		return(
            <div>
                <BrandBar/>
                <LoginContainer/>
            </div>
        )
    }
}

export default SignIn;