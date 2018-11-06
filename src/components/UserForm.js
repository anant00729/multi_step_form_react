import React, {Component} from 'react';
import FormUserDetail from './FormUserDetail';
import UserPersonalDetail from './FormUserPersonalDeatils';
import Success from './Success';
import Confirm from './Confirm';

class UserForm extends Component{
    state = {
        step : 1,
        first_name : '',
        last_name : '',
        email : '',
        occupation : '',
        city : '',
        bio : ''
    }

    // Procced to next step

    nextStep = ()=> {
        const {step} = this.state
        this.setState({
            step : step + 1
        })
    }

    // Go back to prev step
    preStep = ()=> {
        const {step} = this.state
        this.setState({
            step : step -1
        })
    }

    // handle field change 
    handleChange = input => e => {
        this.setState({[input] : e.target.value})
    }

    render(){
        const {step} = this.state
        const {first_name , last_name , email , occupation ,city , bio} = this.state

        const values = { first_name , last_name , email , occupation , city , bio}


        switch(step){
            case 1: 
            return (<FormUserDetail
                nextStep = {this.nextStep}
                handleChange = {this.handleChange}
                values = {values}
            />)
            case 2: 
            return (<UserPersonalDetail
                nextStep = {this.nextStep}
                preStep = {this.preStep}
                handleChange = {this.handleChange}
                values = {values}
            />)                
            case 3: 
            return (<Confirm
                nextStep = {this.nextStep}
                preStep = {this.preStep}
                handleChange = {this.handleChange}
                values = {values}
            />)
            case 4: 
            return (<Success/>)
            default:
            return (<div>this is the default case</div>)
        }
        
    }
}


export default UserForm
