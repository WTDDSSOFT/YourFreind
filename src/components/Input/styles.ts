import styled from 'styled-components/native';

import FeahterIcon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  width: 100%;
  height: 60px;
  border-radius: 10px;
  padding: 0 16px;
  background: #35fc67;
  margin-bottom: 8px;

  flex-direction: row;
  align-items: center;
`;

export const TextInput = styled.TextInput`
  flex: 1;
  color: #22215b;
  font-family: 'RobotoSlab-Medium';
  font-size: 17px;
`;

export const Icon = styled(FeahterIcon)`
  margin-right: 16px;
`;
