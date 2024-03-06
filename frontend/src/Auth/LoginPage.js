import './LoginPage.css';
import { Users } from "../App";
import { Button, Form, Input } from 'antd';
import { useNavigate } from "react-router-dom";
import React, { useContext, useState } from "react";

function LoginPage() {
    const navigate = useNavigate();
    const data = useContext(Users);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();

    const onFinish = () => {

        try {
            const user = data.find(user => user.Email === email && user.Senha === password);

            if (user) {
                if (user.EAdmin === 1) {
                    navigate('/list-admin');
                } else {
                    navigate('/list-user');
                }
            } else {
                alert('Email ou senha inválidos');
                navigate('/');

            }

        } catch (error) {
            console.error(`Erro ao realizar a chamada ao servidor: ${error}`);
        }
    }

    const onFinishFailed = (errorInfo) => {
        console.log('Falha:', errorInfo);
    };

    return (
        <div className='div-form'>
            <Form
                name="basic"
                labelCol={{
                    span: 8,
                }}
                initialValues={{
                    remember: true,
                }}
                className='form'
                autoComplete="off"
                onFinish={onFinish}
                onFinishFailed={onFinishFailed}
            >
                <div>
                    <h1 className="h1-login">Login</h1>
                </div>
                <Form.Item
                    name="email"
                    label="Email"
                    className='form-item'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor insira seu email!',
                        },
                    ]}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                >
                    <Input
                        type="email"
                        value={email}
                        className='input'
                        placeholder="Email"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    label="Senha"
                    name="password"
                    className='form-item'
                    rules={[
                        {
                            required: true,
                            message: 'Por favor insira sua senha!',
                        },
                    ]}
                >
                    <Input.Password
                        className='input'
                        placeholder="Senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </Form.Item>

                <Form.Item
                    wrapperCol={{
                        offset: 8,
                        span: 16,
                    }}
                    className='form-button'
                >
                    <Button
                        type="primary"
                        htmlType="submit"
                        className='button'
                    >
                        Entrar
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
}

export default LoginPage;
