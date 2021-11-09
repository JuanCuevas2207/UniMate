import BrandBar from "../Components/brandBar/BrandBar"
import SignUpContainer from "../Components/signUpContainer/SignUpContainer"
import { Component } from 'react'
import { connect } from 'react-redux'

class SignUp extends Component{
    render(){
		return(
			<div>
                <BrandBar />
                <SignUpContainer/>	
			</div>
		)
	}
}

const mapStateToProps = (state)=>{
	return{
        //message: state.signUpErrorStore.message,
	}
}


const mapDispatchToProps = (dispatch) => {
    return {
      /*onUserSignUp: (authData, isMatch, onSuccessCallback) =>
        dispatch(actionCreators.signUp(authData, isMatch, onSuccessCallback)),*/
    };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);