import { Table } from 'antd';
import { Users } from "../../App";
import { format } from 'date-fns';
import React, { useContext } from "react";
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';


function ListAdmin() {
    const data = useContext(Users);

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
        <Table
            columns={columns}
            dataSource={getList()}
            scroll={{
                x: 1300,
            }}
        />
    );
}

export default ListAdmin;