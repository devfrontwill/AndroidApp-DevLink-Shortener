import React from "react";
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { ContainerButton, Item } from './styles';

export default function ListItem() {
    return (
        <View>
            <ContainerButton activeOpacity={0.8} onPress={() => {}} >
                <Feather
                    name="link"
                    color="#FFF"
                    size={24}
                />
                <Item numberOfLines={1} >https://meulink.test.app</Item>
            </ContainerButton>
        </View>
    )
}