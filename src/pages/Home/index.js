import React, { useState } from "react";
import { TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from "../../components/StatusBarPage";
import ModalLink from "../../components/ModalLink";
import Menu from "../../components/Menu";
import { Feather } from '@expo/vector-icons';
import {
    ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput,
    BoxIcon, Input, ButtonLink, ButtonText
} from './styles';


export default function Home() {

    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);

    function handleShortLink() {
        //alert('URL DIGITADA: ' + input)
        setModalVisible(true);
        setInput('');
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <LinearGradient
                colors={['#1ddbb9', '#132742']}
                style={{ flex: 1, justifyContent: 'center' }}
            >

                <StatusBarPage
                    barStyle='light-content'
                    backgroundColor='#1ddbb9'
                />

                <Menu />

                <KeyboardAvoidingView
                    behavior={Platform.OS === 'android' ? 'padding' : 'position'}
                    enabled
                >

                    <ContainerLogo>
                        <Logo source={require('../../assets/logo.png')} resizeMode="contain" />
                    </ContainerLogo>

                    <ContainerContent>

                        <Title>DevLink Shortener</Title>
                        <Subtitle>Digite ou cole seu link abaixo para encurtar:</Subtitle>

                        <ContainerInput>
                            <BoxIcon>
                                <Feather name="link" size={22} color="#FFF" />
                            </BoxIcon>
                            <Input
                                placeholder="Digite/cole seu link aqui. . ."
                                placeholderTextColor="white"
                                autoCapitalize="none"
                                autoCorrect={false}
                                keyboardType="url"
                                value={input}
                                onChangeText={(text) => setInput(text)}
                            />
                        </ContainerInput>

                        <ButtonLink onPress={handleShortLink} >
                            <ButtonText>Gerar Link</ButtonText>
                        </ButtonLink>

                    </ContainerContent>
                </KeyboardAvoidingView>

                <Modal visible={modalVisible} transparent animationType="slide" >
                    <ModalLink onClose={ () => setModalVisible(false) } />
                </Modal>

            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}