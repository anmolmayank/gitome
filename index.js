import { AppRegistry } from 'react-native';
import App from './App';
import { StackNavigator } from 'react-navigation';
import Login from './src/login';
import Dashboard from './src/dashboard';
import Add from './src/add';

const gitome =StackNavigator({
    Login: {
      screen: Login,
    },
    Dashboard: {
      screen: Dashboard,
    },
  });


AppRegistry.registerComponent('gitome', () => App);
