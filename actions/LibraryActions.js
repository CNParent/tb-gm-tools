import Dice from '../lib/Dice.js';

const roller = new Dice();

let rollClick = ({ control, target }) => {
    let tableName = target.dataset.table;
    let table = control.state.tables.find(t => t.name == tableName);
    let modifier = control.state.modifier;

    control.state.results = rollOnTable({
        table,
        modifier,
        tables: control.state.tables
    });
    
    control.update();
}

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
    return results.concat(rollOnTable({ table, modifier, tables }));
}

export {
    rollClick
}