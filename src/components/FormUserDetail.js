import React , {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class FormUserDetail extends Component {
    continue = e => {
        e.preventDefault()
       this.props.nextStep()  
    }

    render(){
        const {values, handleChange} = this.props
        
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Enter User Details'/>
                    <TextField 
                    hintText="Enter your first name"
                    floatingLabelText="first name"
                    onChange={handleChange('first_name')}
                    defaultValue={values.first_name}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter your last name"
                    floatingLabelText="last name"
                    onChange={handleChange('last_name')}
                    defaultValue={values.last_name}
                    />
                    <br/>
                    <TextField 
                    hintText="Enter your email"
                    floatingLabelText="email"
                    onChange={handleChange('email')}
                    defaultValue={values.email}
                    />
                    <br/>
                    <RaisedButton
                        label='Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}


const styles = {
    button : {
        margin : 15
    }
}


export default FormUserDetail