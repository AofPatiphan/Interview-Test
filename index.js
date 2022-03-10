// 1 : Number Input-Output
const findTwoSum = (inputArr, target) => {
    for (let i = 0; i < inputArr.length - 1; i++) {
        for (let j = i + 1; j < inputArr.length; j++) {
            if (inputArr[i] + inputArr[j] === target) return [i, j];
        }
    }
    return 'cannot find result';
};

// 2 : Exchange in Vending Machine
const exchange = (inputMoney) => {
    let money = inputMoney;
    const wallet = { total: inputMoney };
    const temp = [];
    const data = [1000, 500, 100, 50, 20, 10, 5, 2, 1];
    for (let i = 0; i <= 8; i++) {
        temp.push(Math.floor(money / data[i]));
        money = money % data[i];
    }
    wallet.bank_1000 = temp[0];
    wallet.bank_500 = temp[1];
    wallet.bank_100 = temp[2];
    wallet.bank_50 = temp[3];
    wallet.bank_20 = temp[4];
    wallet.coin_10 = temp[5];
    wallet.coin_5 = temp[6];
    wallet.coin_2 = temp[7];
    wallet.coin_1 = temp[8];
    return wallet;
};
