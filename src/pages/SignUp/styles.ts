import styled from 'styled-components/native';
import {Platform} from 'react-native';
export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 30px ${Platform.OS === 'android' ? 150 : 40}px;
`;
export const NameApp = styled.Text`
  font-size: 30px;
  color: #35fc67;
  font-family: 'RobotoSlab-Medium';
  padding: 64px 0 20px;
`;
export const Title = styled.Text`
  font-size: 24px;
  color: #35fc67;
  font-family: 'RobotoSlab-Medium';
  padding: 64px 0 20px;
`;

export const ForgotPassword = styled.TouchableOpacity`
  margin-top: 24px;
  flex-direction: row;
  align-items: center;
`;

export const ForgotPasswordText = styled.Text`
  color: #35fc67;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 16px;
`;

export const CreateAccountButton = styled.TouchableOpacity`
  position: absolute;

  left: 0;
  bottom: 0;
  right: 0;
  border-top-width: 1px;
  border-color: #35fc67;
  padding: 16px 0;
  background: #22215b;

  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const CreateAccountButtonText = styled.Text`
  color: #35fc67;
  font-family: 'RobotoSlab-Regular';
  font-size: 18px;
  margin-left: 16px;
`;
