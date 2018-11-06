import React , {Component} from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import {List, ListItem} from 'material-ui/List';
import RaisedButton from 'material-ui/RaisedButton';



class Confirm extends Component{

    continue = e => {
        e.preventDefault()
        // Send the data to the server
       this.props.nextStep()  
    }

    back = e => {
        e.preventDefault()
        this.props.preStep()
    }



    render(){
        const {values : { first_name , last_name , email , occupation , city , bio }} = this.props



        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title='Confirm User Data'/>
                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={first_name}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={last_name}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Bio Data"
                            secondaryText={bio}
                        />

                        
                    </List>
                    <RaisedButton
                        label='Confirm & Continue'
                        primary={true}
                        style={styles.button}
                        onClick={this.continue}
                    />
                    <RaisedButton
                        label='Back'
                        primary={false}
                        style={styles.button}
                        onClick={this.back}
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



export default Confirm