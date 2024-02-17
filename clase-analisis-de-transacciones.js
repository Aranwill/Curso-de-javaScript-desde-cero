// Excercise: Transaction Analisis

/*
Análisis de transacciones
Imagina que tienes una lista de transacciones financieras y deseas realizar varias operaciones de 
procesamiento de datos. Usa las siguientes instrucciones como guía para completar el ejercicio:

1. Calcular el Saldo Total: - Utiliza el método reduce para calcular y mostrar el saldo total de todas las 
transacciones.

2. Encontrar la Transacción más Grande (Ingreso o Egreso): - Emplea el método reduce para encontrar 
la transacción con el mayor monto (ya sea ingreso o egreso) y muéstrala en la consola.

3. Filtrar Transacciones de Compra: - Usa el método filter para obtener y mostrar en la consola solo las 
transacciones de compra (con montos negativos).

4. Encontrar una Transacción por Descripción: - Utiliza el método find para buscar y mostrar en la 
consola una transacción específica por su descripción.

5. Encontrar el Índice de una Transacción por Monto: - Emplea el método findIndex para encontrar y 
mostrar en la consola el índice de una transacción específica por su monto.

6. Actualizar Descripciones de Transacciones: - Utiliza el método forEach para actualizar las 
descripciones de las transacciones. Añade el prefijo "Gasto: " a las transacciones con montos 
negativos y "Ingreso: " a las transacciones con montos positivos. Muestra las transacciones 
actualizadas en la consola.

Recuerda adaptar y combinar estas operaciones según sea necesario.


*/

const transactions = [
  { id: 1, description: 'Buy DiabloIV', amount: -49 },
  { id: 2, description: 'Salary Deposit', amount: 580 },
  { id: 3, description: 'Utility Bill Payment', amount: -145 },
  { id: 4, description: 'Online Purchase', amount: -30 },
];

// 1. Calculate Total Balance

const totalBalance = transactions.reduce(
  (acc, transaction) => acc + transaction.amount,
  0
);
console.log('Total Balance: ', totalBalance);

// 2. Find the Largest Transaction (Income or Expense)

const largestTransaction = transactions.reduce(
  (maxTransaction, transaction) => {
    return Math.abs(transaction.amount) > Math.abs(maxTransaction.amount)
      ? transaction
      : maxTransaction;
  },
  transactions[0]
);
console.log('Largest Transaction: ', largestTransaction);

// 3. Filter Purchase Transactions

const purchaseTransactions = transactions.filter(
  transactions => transactions.amount < 0
);
console.log('Purchase Transactions: ', purchaseTransactions);

// 4. Find a Transaction by Description

const specificTransaction = transactions.find(
  transactions => transactions.description === 'Online Purchase'
);
console.log('Specific Transaction: ', specificTransaction);

//5. Find the Index of a transaction by Amount

const indexTransactionWithAmount = transactions.findIndex(
  transaction => transaction.amount === -30
);
console.log('Index Transaction With Amount -30: ', indexTransactionWithAmount);

// 6. Update Transaction Descriptions

transactions.forEach(transaction => {
  if (transaction.amount < 0) {
    transaction.description = `Expense: ${transaction.description}`;
  } else {
    transaction.description = `Income: ${transaction.description}`;
  }
});
console.log('Udated Transaction: ', transactions);
