import React from "react";
import { Text } from "react-native";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { Container, Title, ListLinks } from './styles';

export default function MyLinks() {
    return (
        <Container>
            <StatusBarPage
                barStyle='light-content'
                backgroundColor='#132742'
            />
            <Menu />

            <Title>Meus Links</Title>

            <ListLinks 
            data={[ {id: 1, link: 'test.com'} ]}
            keyExtractor={ (item) => String(item.id) }
            renderItem={ ({ item }) => <ListItem data={item} /> }
            contentContainerStyle={{ paddingBottom: 20 }}
            showsVerticalsScrollIndicator={false}
            />

        </Container>
    )
}