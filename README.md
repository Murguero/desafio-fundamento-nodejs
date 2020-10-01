# 🗂 Repositórios
Durante o bootcamp GoStack fomos desafiados em uma série de atividades a fim de comprovarmos nosso entendimento sobre o assunto. 
Neste desafio tinhamos como objetivo o aprofundamento no Nodejs com Typescript, sendo desenvolvido somente o backend da aplicação.

# 🔱 Estrutura
#### Backend:
A estrutura do backend é composta por 2 rotas que são dividas da seguinte maneira:
  - POST `/transactions`: A rota recebe `title`, `value` e `type` dentro do corpo da requisição, sendo `type` o tipo da transação, que deve ser `income` para entradas (depósitos) e `outcome` para saídas (retiradas). Exemplo do arquivo:
    ```
    {
      "id": "uuid",
      "title": "Salário",
      "value": 3000,
      "type": "income"
     }
     ```
  - GET `/transactions`:  Essa rota retorna uma listagem com todas as transações que foi cadastrada, junto com o valor de soma de entradas, retiradas e total de crédito. Essa rota retorna um objeto com o formato a seguir:
    ```
    {
      "transactions": [
        {
          "id": "uuid",
          "title": "Salário",
          "value": 4000,
          "type": "income"
        },
        {
          "id": "uuid",
          "title": "Freela",
          "value": 2000,
          "type": "income"
        },
        {
          "id": "uuid",
          "title": "Pagamento da fatura",
          "value": 4000,
          "type": "outcome"
        },
        {
          "id": "uuid",
          "title": "Cadeira Gamer",
          "value": 1200,
          "type": "outcome"
        }
      ],
      "balance": {
        "income": 6000,
        "outcome": 5200,
        "total": 800
      }
    }
    ``` 
    
# 💻 Tecnologias

#### Backend (NodeJS + TypeScript)
- Express
- UUIDV4

# 📣 Meta
Ronaldo Tadeu Murguero Junior - murguero.ronaldo@gmail.com
