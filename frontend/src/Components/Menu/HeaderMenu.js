import React from "react";
import "./HeaderMenu.css";
import { Menu, Tooltip } from 'antd';
import { LogoutOutlined } from "@ant-design/icons";

function HeaderMenu() {

    const items = [
        {
            label: 'Potal de Usuários',
            key: 'logo'
        },
        {
            key: 'exit',
            icon:
                <Tooltip
                    title="Sair"
                >
                    <LogoutOutlined />
                </Tooltip>,
        }
    ];

    return (
        <Menu
            items={items}
            className="menu"
            mode="horizontal"
        />
    );
}

export default HeaderMenu;