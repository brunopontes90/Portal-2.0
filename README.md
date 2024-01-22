# Criando a pasta Backend

- Instale o NPM dessa forma: sudo apt install npm
- Para criar a pasta node_modules é necessario rodar o comando: npm init -y
- Para criar todo o conteudo no projeto use: npx gitignore node
- Instale o NVM para versionamento do NodeJs: npm install nvm
- Instale a versão mais recente do node usando no NVM: nvm install 16.17.0
- Use a versão mais recente: nvm use 16.17.0
- Para olhar se a versão usada esta correta: node -v

# Variaveis de ambiente

- Instale a dependencia: npm install dotenv
- Crie o arquivo .env com as variaveis que serão usadas para conexão

# Nodemon

- O Nodemon é uma ferramenta que ajuda no desenvolvimento de aplicativos Node.js, reiniciando automaticamente o servidor sempre que detecta alterações nos arquivos do projeto.
- npm install nodemon --save-dev
- Adicione um script para executar o Nodemon: 
"scripts": {
  "start": "nodemon index.js"
}
- Execute o script Nodemon: npm start

# Mysql

- Instale a dependendia do Mysql 2: npm install dotenv mysql2

# Express

- Instale a dependencia express para solicitações HTTP como GET, POST, PUT, DELETE, etc.
- Comando: npm install express

# Teste APi

- Download do Site Oficial: https://www.postman.com/downloads/
- Faça o download do arquivo .tar.gz (para linux)
- Extraia o arquivo na pasta que foi baixado: tar -xzf Postman-linux-x64-*.tar.gz
- Mova o Postman para /opt: sudo mv Postman /opt
- Crie um link simbólico
  - Crie um link simbólico para o executável do Postman para que você possa iniciar o Postman de qualquer lugar no terminal:
  - sudo ln -s /opt/Postman/Postman /usr/bin/postman
- Agora, você pode iniciar o Postman digitando postman no terminal.
