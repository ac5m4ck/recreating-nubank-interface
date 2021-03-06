import React from 'react';

import Header from '../../components/Header';
import Tabs from '../../components/Tabs';
import Menu from '../../components/Menu';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Content, Card, CardHeader, CardContent, CardFooter, Title, Description, Annotation } from './styles';

export default function Main() {
    return (
        <Container>
            <Header />

            <Content>
                <Menu />
                
                <Card>
                    <CardHeader>
                        <Icon name="attach-money" size={28} color="#666" />
                        <Icon name="visibility-off" size={28} color="#666" />
                    </CardHeader>
                    <CardContent>
                        <Title>Saldo disponível</Title>
                        <Description>R$ 12.500,00</Description>
                    </CardContent>
                    <CardFooter>
                        <Annotation>
                            Transferência de R$ 500,00 recebida de Guilherme hoje às 08h
                        </Annotation>
                    </CardFooter>
                </Card>
            </Content>

            <Tabs />
        </Container>
    )
}