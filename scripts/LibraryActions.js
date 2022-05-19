import Dice from './Dice.js';

const roller = new Dice();

let rollOnTable = ({ table, modifier, tables }) => {
    let roll = roller.roll(table.roll + modifier);
    let max = Math.max(...table.entries.map(x => x.max));
    let min = Math.min(...table.entries.map(x => x.min));
    if (roll > max) roll = max;
    if (roll < min) roll = min;

    let result = table.entries.find(x => x.min <= roll && x.max >= roll);
    if (!result) {
        alert(`Error - rolled ${roll} on table ${table.name}`);
        return;
    }

    let description = result.name;
    if (result.amount) {
        let amount = roller.roll(result.amount);
        description = `${description} (${amount})`;
    }
    
    let results = [{
        roll,
        table: table.name,
        description: description
    }];

    if (!result.table) return results;

    table = tables.find(x => x.name == result.table);
    if (!table) {
        results.push({ 
            roll: 0,
            table: null,
            description: `Could not find table named ${results[results.length - 1].table}`
        })

        return results;
    }

    return results.concat(rollOnTable({ table, modifier, tables }));
}

export default {
    rollOnTable
}