import React, { useState, useEffect } from "react";
import { Modal, ActivityIndicator } from "react-native";
import StatusBarPage from "../../components/StatusBarPage";
import Menu from '../../components/Menu';
import ListItem from '../../components/ListItem';
import { Container, Title, ListLinks, WarningText, ContainerEmpty } from './styles';
import { useIsFocused } from "@react-navigation/native";
import { getLinksSave, deleteLink } from "../../utils/storeLinks";
import ModalLink from "../../components/ModalLink";


export default function MyLinks() {
    const isFocused = useIsFocused();

    const [links, setLinks] = useState([])
    const [data, setData] = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function getLinks() {
            const result = await getLinksSave('@devshortenerkey')
            setLinks(result);
            setLoading(false);
        }

        getLinks();

    }, [isFocused])

    function handleItem(item) {
        setData(item);
        setModalVisible(true);
    }

    async function handleDelete(id) {
        const result = await deleteLink(links, id);
        setLinks(result);
    }

    return (
        <Container>
            <StatusBarPage
                barStyle='light-content'
                backgroundColor='#132742'
            />
            <Menu />

            <Title>Meus Links</Title>

            { loading && (
                <ContainerEmpty>
                    <ActivityIndicator color="#FFF" size={25} />
                </ContainerEmpty>
            )}            

            { !loading && links === 0 && (
                <ContainerEmpty>
                    <WarningText>Você não possui nenhum link salvo! </WarningText>
                </ContainerEmpty>
            )}      

            <ListLinks
                data={links}
                keyExtractor={(item) => String(item.id)}
                renderItem={({ item }) => <ListItem data={item} selectedItem={handleItem} deleteItem={handleDelete} />}
                contentContainerStyle={{ paddingBottom: 20 }}
                showsVerticalsScrollIndicator={false}
            />

            <Modal visible={modalVisible} transparent animationType="slide" >
                <ModalLink onClose={() => setModalVisible(false)} data={data} />
            </Modal>

        </Container>
    )
}

