import React from 'react';
import {View, ScrollView, KeyboardAvoidingView, Platform} from 'react-native';
import {
  Container,
  NameApp,
  Title,
  ForgotPassword,
  ForgotPasswordText,
  CreateAccountButton,
  CreateAccountButtonText,
} from './styles';
import Icon from 'react-native-vector-icons/Feather';
import {useNavigation} from '@react-navigation/native';
import Button from '../../components/Button';
import Input from '../../components/Input';

const SignUp: React.FC = () => {
  const navigation = useNavigation();
  return (
    <>
      <KeyboardAvoidingView
        style={{flex: 1}}
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        enabled>
        <ScrollView
          contentContainerStyle={{flex: 1}}
          keyboardShouldPersistTaps="handled">
          <Container>
            <NameApp>YourFriend</NameApp>
            <View>
              <Title>Cria sua conta </Title>
            </View>

            <Input name="name" icon="mail" placeholder="Nome" />
            <Input name="email" icon="mail" placeholder="E-mail" />
            <Input name="password" icon="lock" placeholder="Senha" />

            <Button>Entrar</Button>

            <ForgotPassword>
              <Icon name="key" size={20} color="#35fc67" />
              <ForgotPasswordText>Esqueci minha senha</ForgotPasswordText>
            </ForgotPassword>
          </Container>
        </ScrollView>
      </KeyboardAvoidingView>

      <CreateAccountButton onPress={() => navigation.goBack()}>
        <Icon name="log-in" size={20} color="#35fc67" />
        <CreateAccountButtonText>Cria uma conta</CreateAccountButtonText>
      </CreateAccountButton>
    </>
  );
};

export default SignUp;
