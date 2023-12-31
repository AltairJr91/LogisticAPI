# WORK IN PROGRESS
# Documentação da API de Logística

Bem-vindo à documentação da API de Logística! Esta API foi desenvolvida para atender às necessidades de empresas de logística, oferecendo recursos para gerenciar usuários administradores, entregadores, meios de entrega, endereços, destinos e rotas de entrega. A API foi implementada em TypeScript e utiliza o banco de dados SQLite com o Prisma ORM. O projeto é totalmente orientado a objetos, seguindo os princípios SOLID, e possui uma arquitetura modular que permite alta escalabilidade.

## Configuração

Para começar a utilizar a API de Logística, siga as etapas abaixo:

1. Clone este repositório em sua máquina local.
2. Execute o comando `npm install` para instalar as dependências necessárias.
3. Configure o arquivo `.env` com as variáveis de ambiente necessárias, como a configuração do banco de dados, chave secreta, etc.

## Funcionalidades Principais

### Usuários Administradores

- Registro de novo usuário administrador: Permite criar um novo usuário administrador para acessar a plataforma de logística.
- Autenticação: Permite que um usuário administrador faça login na API.

### Entregadores

- Cadastro de entregador: Permite adicionar um novo entregador ao sistema, incluindo informações como nome, contato e meio de entrega (moto, carro etc.).
- Listagem de entregadores: Retorna a lista de todos os entregadores cadastrados no sistema.
- Detalhes do entregador: Permite obter informações detalhadas sobre um entregador específico, incluindo os destinos associados a ele.

### Destinos

- Cadastro de destino: Permite adicionar um novo destino ao sistema, associando-o a um "Cliente" e a um endereço específico.
- Listagem de destinos: Retorna a lista de todos os destinos cadastrados no sistema.

### Rotas de Entrega

- Criação de rota de entrega: Permite criar uma nova rota de entrega, associando um entregador a um ou mais destinos.
- Listagem de rotas de entrega: Retorna a lista de todas as rotas de entrega registradas no sistema.
- Detalhes da rota de entrega: Permite obter informações detalhadas sobre uma rota de entrega específica.

## Executando a API

1. Execute o comando `npm start` para iniciar o servidor da API.
2. Acesse a API através da URL `http://localhost:8007`.

