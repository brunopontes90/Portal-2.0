import { Users } from "../../App";
import { format } from 'date-fns';
import React, { useContext } from "react";
import { Layout, Menu, Table, theme } from 'antd';
import {
    DeleteOutlined,
    EditOutlined,
    EyeOutlined,
    LogoutOutlined,
} from '@ant-design/icons';

const { Content, Footer } = Layout;

const items = [
    {
        label: 'Logo'
    },
    {
        label: 'Nome Usuario'
    },
    {
        label: <LogoutOutlined />
    }
];

const ListAdmin = () => {
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
            <Menu
                items={items}
                mode="horizontal"
            />
            <Content
                style={{
                    padding: '0 48px',
                }}
            >
                <div
                    style={{
                        padding: 24,
                        minHeight: 380,
                        marginBottom: 10,
                        marginTop: 50,
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
export default ListAdmin;