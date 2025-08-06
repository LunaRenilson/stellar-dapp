# stellar-dapp

## Visão Geral
Este projeto é um DApp (Aplicativo Descentralizado) construído na blockchain Stellar. Atualmente implementa funcionalidades básicas de gerenciamento de contas na rede de testes (testnet) da Stellar.

## ✨ Funcionalidades Implementadas
1. Criação Automática de Contas
    - Gera um novo par de chaves (pública/privada)
    - Solicita automaticamente fundos via Friendbot
    - Retorna todas as informações da conta recém-criada

2. Consulta de Contas
    - Verifica saldos e informações da conta
    - Mostra histórico de transações
    - Fornece links para exploradores da blockchain

3. Infraestrutura
    - Servidor Node.js com Express
    - Conexão com a rede testnet da Stellar
    - API RESTful documentada
  
## 🛠️ Configuração do Ambiente

Pré-requisitos
    - Node.js (v18+)
    - npm (v9+)
    - TypeScript (opcional)

Instalação
1. Clone o repositório: `git clone [URL_DO_REPOSITORIO]`
2. Entre no diretório: `cd stellar-dapp`
3. Instale as dependências: `npm install`
4. Rode o Projeto: `npm start`
