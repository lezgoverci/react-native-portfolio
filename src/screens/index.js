import React, {Component} from 'react';
import {View, Text} from 'react-native';
import {connect} from 'react-redux';
import {onLoginFacebook, onLoginGoogle, onLogout} from '../components/auth/actions';

class IndexScreen extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(<View>
        <Text>Hello Index Screen</Text>
        <Text>{JSON.stringify(this.props.auth)}</Text>
      </View>)
  }
}

const mapStateToProps = state =>({
  auth: state.Auth
});

const mapDispatchToProps = {
  loginFacebook: payload => onLoginFacebook(payload),
  loginGoogle: payload => onLoginGoogle(payload),
  logout: () => onLogout()

}

export default connect(mapStateToProps,mapDispatchToProps)(IndexScreen);