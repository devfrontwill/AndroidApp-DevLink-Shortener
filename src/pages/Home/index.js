import React, { useState } from "react";
import {
    TouchableWithoutFeedback, Keyboard, KeyboardAvoidingView, Platform, Modal,
    ActivityIndicator
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from "../../components/StatusBarPage";
import ModalLink from "../../components/ModalLink";
import Menu from "../../components/Menu";
import { Feather } from '@expo/vector-icons';
import {
    ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput,
    BoxIcon, Input, ButtonLink, ButtonText
} from './styles';
import api from "../../services/api";
import { saveLink } from '../../utils/storeLinks';

export default function Home() {

    const [loading, setLoading] = useState(false);
    const [input, setInput] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [data, setData] = useState({});

    async function handleShortLink() {
        setLoading(true);

        try {
            const response = await api.post('/shorten',
                {
                    long_url: input
                })
            setData(response.data);
            setModalVisible(true);

            saveLink('@devshortenerkey', response.data);

            Keyboard.dismiss();
            setLoading(false);
            setInput('');

        } catch {
            alert('Ops parece que algo deu errado.');
            Keyboard.dismiss();
            setInput('');
            setLoading(false);

        }

    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()} >
            <LinearGradient
                colors={['#000000', '#3533cd']}
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
                            {
                                loading ? (
                                    <ActivityIndicator color="#121212" size={24} />
                                ) : (
                                    <ButtonText>Gerar Link</ButtonText>
                                )
                            }

                        </ButtonLink>

                    </ContainerContent>
                </KeyboardAvoidingView>

                <Modal visible={modalVisible} transparent animationType="slide" >
                    <ModalLink onClose={() => setModalVisible(false)} data={data} />
                </Modal>

            </LinearGradient>
        </TouchableWithoutFeedback>
    )
}