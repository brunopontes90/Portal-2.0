import React, { useContext, useState } from "react";
import { Users } from "../App";
import { useNavigate } from "react-router-dom";

function LoginPage() {
    const data = useContext(Users);
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const navigate = useNavigate();

    const onFinish = (event) => {
        event.preventDefault(); // Previne o comportamento padrão do formulário

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
                setEmail('');
                setPassword('');
            }

        } catch (error) {
            console.error(`Erro ao realizar a chamada ao servidor: ${error}`);
        }
    }

    return (
        <form onSubmit={onFinish}>
            <h1>Login</h1>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />
            <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
            />
            <button type="submit">Entrar</button>
        </form>
    );
}

export default LoginPage;
