//Aplicacao de operacoes bancarias
const user = {
    name: 'Rafael',
    transactions: [],
    balance: 0
}

function createTransaction (transaction){
    user.transactions.push(transaction)
    if(transaction.type === 'credit'){
        user.balance = user.balance + transaction.value
    }else if(transaction.type === 'debit'){
        user.balance = user.balance - transaction.value
    }
}

function getHigherTransactionByType (targetType){
    let higherTransactionIndex = 0

    for(let i = 0; i < user.transactions.length; i++){
        if(user.transactions[i].type === targetType && user.transactions[higherTransactionIndex].value <= user.transactions[i].value)
            higherTransactionIndex = i
    }

    return user.transactions[higherTransactionIndex]
}

function getAverageTransactionValue (){
    let sum = 0

    for(let i = 0; i < user.transactions.length; i++){
        sum = sum + user.transactions[i].value
    }

    return sum/user.transactions.length
}

function getTransactionsCount (){
    let creditcount = 0
    let debitcount = 0

    for(let i = 0; i < user.transactions.length; i++){
        if(user.transactions[i].type === 'credit'){
            creditcount++
        }else{
            debitcount++
        }
    }

    return {credit: creditcount, debit: debitcount}
}