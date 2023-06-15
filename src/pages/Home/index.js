import React from "react";
import { LinearGradient } from 'expo-linear-gradient';
import StatusBarPage from "../../components/StatusBarPage";
import Menu from "../../components/Menu";
import { Feather } from '@expo/vector-icons';
import {
    ContainerLogo, Logo, ContainerContent, Title, Subtitle, ContainerInput,
    BoxIcon, Input, ButtonLink, ButtonText
} from './styles';


export default function Home() {
    return (
        <LinearGradient
            colors={['#1ddbb9', '#132742']}
            style={{ flex: 1, justifyContent: 'center' }}
        >

            <StatusBarPage
                barStyle='light-content'
                backgroundColor='#1ddbb9'
            />

            <Menu />

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
                    />
                </ContainerInput>

                <ButtonLink>
                    <ButtonText>Gerar Link</ButtonText>
                </ButtonLink>

            </ContainerContent>

        </LinearGradient>
    )
}