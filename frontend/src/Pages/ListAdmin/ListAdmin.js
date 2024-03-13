import { Users } from "../../App";
import { format } from 'date-fns';
import React, { useContext, useState } from "react";
import { Breadcrumb, Layout, Menu, Table, theme } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer } = Layout;

const items = new Array(3).fill(null).map((_, index) => ({
    key: String(index + 1),
    label: `nav ${index + 1}`,
}));

const App = () => {
    const data = useContext(Users);
    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();

    const columns = [
        {
            title: 'Nome Completo',
            width: 100,
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
        },
        {
            title: 'Nascimento',
            dataIndex: 'nascimento',
            key: '1',
        },
        {
            title: 'Genero',
            dataIndex: 'genero',
            key: '2',
        },
        {
            title: 'Endereço',
            dataIndex: 'endereco',
            key: '3',
        },
        {
            title: 'Telefone',
            dataIndex: 'telefone',
            key: '4',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: '5',
        },
        {
            title: 'Data Criação',
            dataIndex: 'dataCriacao',
            key: '6',
        },
        {
            title: 'Admin',
            dataIndex: 'admin',
            key: '7',
        },
        {
            title: 'Observações',
            dataIndex: 'observacao',
            key: '8',
        },
        {
            title: 'Senha',
            dataIndex: 'senha',
            key: '9',
        },
        {
            title: 'Ação',
            key: 'operation',
            fixed: 'right',
            width: 100,
            render: () =>
                <div>
                    <EyeOutlined />
                    <EditOutlined />
                    <DeleteOutlined />
                </div>,
        },
    ];

    const getList = () => {
        return data.map((data, index) => {
            return {
                key: index++,
                name: `${data.Nome} ${data.Sobrenome}`,
                nascimento: format(new Date(data.DataNascimento), 'dd/MM/yyyy'),
                genero: data.Genero,
                endereco: data.Endereco,
                telefone: data.Telefone,
                email: data.Email,
                dataCriacao: format(new Date(data.DataCriacao), 'dd/MM/yyyy'),
                admin: data.EAdmin === 1 ? 'Sim' : 'Não',
                observacao: data.Observacoes,
                senha: data.Senha
            };
        });
    }

    return (
        <Layout>
            <Header
                style={{
                    top: 0,
                    zIndex: 1,
                    width: '100%',
                    marginTop: -10,
                    display: 'flex',
                    position: 'sticky',
                    alignItems: 'center',
                }}
            >
                <div className="demo-logo" />
                <Menu
                    theme="dark"
                    items={items}
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{
                        flex: 1,
                        minWidth: 0,
                    }}
                />
            </Header>
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <Breadcrumb
                    style={{
                        margin: '16px 0',
                    }}
                >
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                    <Breadcrumb.Item>App</Breadcrumb.Item>
                </Breadcrumb>
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        marginBottom: 10,
                        background: colorBgContainer,
                        borderRadius: borderRadiusLG,
                    }}
                >
                    <Table
                        columns={columns}
                        dataSource={getList()}
                        scroll={{
                            x: 1300,
                        }}
                    />
                </div>
            </Content>
            <Footer
                style={{
                    bottom: 0,
                    width: '100%',
                    position: 'fixed',
                    textAlign: 'center',
                }}
            >
                Portal Usuários ©{new Date().getFullYear()} Created by Bruno Pontes
            </Footer>
        </Layout>
    );
};
export default App;