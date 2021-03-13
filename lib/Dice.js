const die = 'd';
const plus = '+';
const minus = '-';
const numbers = ['0','1','2','3','4','5','6','7','8','9'];
const isNumber = x => numbers.indexOf(x) >= 0;

export default class Dice {

    roll(expression) {
        let tokens = this.tokenize(expression);
        return this.execute(tokens);
    }

    tokenize(expression) {
        let tokens = [];
        let i = 0;
        while(i < expression.length) {
            let token = { value: expression[i] };
            if(isNumber(expression[i])) {
                let previous = tokens.length > 0 ? tokens[tokens.length - 1] : {};
                if (previous.type == 'digit') {
                    previous.value += expression[i++];
                    continue;
                }

                token.type = 'digit';
            }
            if(expression[i] == die) token.type = 'die';
            if(expression[i] == plus) token.type = 'plus';
            if(expression[i] == minus) token.type = 'minus';
            tokens.push(token);
            i++;
        }

        return tokens;
    }

    execute(tokens) {
        let nDice = Number(tokens[0].value);
        let sDice = Number(tokens[2].value);
        let plus = tokens.length == 5 && tokens[3].type == 'plus' ? Number(tokens[4].value) : 0;
        let minus = tokens.length == 5 && tokens[3].type == 'minus' ? Number(tokens[4].value) : 0;

        let sum = 0;
        while(nDice > 0) {
            sum += Math.floor((Math.random() * sDice) + 1);
            nDice--;
        }

        return sum + plus - minus;
    }

}