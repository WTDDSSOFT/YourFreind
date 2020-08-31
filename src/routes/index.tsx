import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';

const Auth = createStackNavigator();

import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const AuthRoutes: React.FC = () => {
  return (
    <Auth.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {backgroundColor: '#22215B'},
      }}
      // initialRouteName="SignUp"
    >
      <Auth.Screen name="SignIn" component={SignIn} />
      <Auth.Screen name="SignUp" component={SignUp} />
    </Auth.Navigator>
  );
};

export default AuthRoutes;
