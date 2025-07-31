import express from 'express';
import StellarSdk from '@stellar/stellar-sdk';
import axios from 'axios';


const { Server, Networks } = StellarSdk;

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Bem-vindo ao DApp Stellar!');
});

app.post('/create-test-account', async (req, res) => {
    try {
        // 1. Gerar um par de chaves
        const keypair = StellarSdk.Keypair.random();
        const publicKey = keypair.publicKey();
        
        // 2. Solicitar funding automático ao Friendbot
        const friendbotUrl = `https://friendbot.stellar.org?addr=${publicKey}`;
        const response = await axios.get(friendbotUrl);
        
        // 3. Verificar se o funding foi bem-sucedido
        if (response.status === 200) {
            res.json({
                success: true,
                publicKey: publicKey,
                secretKey: keypair.secret(),
                message: 'Conta criada e fundada com sucesso na testnet!',
                explorerLink: `https://stellar.expert/explorer/testnet/account/${publicKey}`
            });
        } else {
            throw new Error('Friendbot não respondeu corretamente');
        }
    } catch (error) {
        console.error('Erro ao criar conta:', error);
        res.status(500).json({ 
            success: false,
            error: 'Erro ao criar e fundar conta',
            details: error.message 
        });
    }
});

app.get('/account/:publicKey', async (req, res) => {
    try {
        const server = new StellarSdk.Server('https://horizon-testnet.stellar.org');
        const account = await server.loadAccount(req.params.publicKey);
        console.log(account)
        
        res.json({
            publicKey: account.id,
            balances: account.balances,
            sequence: account.sequence
        });

    } catch (error) {
        res.status(404).json({ error: 'Conta não encontrada' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
    console.log('Usando a rede TESTNET da Stellar');
});