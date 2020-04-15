import Transaction from '../models/Transaction';

interface Balance {
  income: number;
  outcome: number;
  total: number;
}

interface CreateTransactionDTO {
  title: string;
  value: number;
  type: 'income' | 'outcome';
}

class TransactionsRepository {
  private transactions: Transaction[];

  constructor() {
    this.transactions = [];
  }

  public all(): Transaction[] {
    return this.transactions;
  }

  public getBalance(): Balance {
    const income = this.transactions.reduce((acumulador, transaction) => {
      return transaction.type === 'income'
        ? acumulador + transaction.value
        : acumulador;
    }, 0);

    const outcome = this.transactions.reduce((acumulador, transaction) => {
      return transaction.type === 'outcome'
        ? acumulador + transaction.value
        : acumulador;
    }, 0);

    const total = income - outcome;

    const balance = {
      income,
      outcome,
      total,
    };

    return balance;
  }

  public validBalance(value: number): boolean {
    const { total } = this.getBalance();

    const result = total - value;

    if (result < 0) {
      return false;
    }
    return true;
  }

  public create({ title, value, type }: CreateTransactionDTO): Transaction {
    const transaction = new Transaction({ title, value, type });

    this.transactions.push(transaction);

    return transaction;
  }
}

export default TransactionsRepository;
