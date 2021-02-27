import Component from '../lib/Component.js';
import { rollClick } from '../actions/LibraryActions.js';

const defaultTables = [
    {
        name: 'Loot Table 1',
        roll: '2d6',
        entries: [
            { name: 'Books & Maps', min: 2, max: 5, isTable: true },
            { name: 'Gear', min: 6, max: 6, isTable: false },
            { name: 'Stuff', min: 7, max: 10, isTable: false },
            { name: 'Treasure and Valuables 1', min: 11, max: 12, isTable: false },
            { name: 'Magic', min: 12, max: 12, isTable: false }
        ]
    },
    {
        name: 'Books & Maps',
        roll: '3d6',
        entries: [
            { name: 'Accurate map of a dungeon level or region', min: 3, max: 3 },
            { name: 'Accurate map of a small region or set of rooms', min: 4, max: 4 },
            { name: 'Accurate map of a single, nearby area or room', min: 5, max: 5 },
            { name: 'Correspondence between an adversary and their ally', min: 6, max: 6 },
            { name: 'Monograph containing prophesy in an ancient tongue', min: 7, max: 7 },
            { name: 'Dwarven chronicle of a lost settlement', min: 8, max: 8 },
            { name: 'Detailed description of a monster\'s Nature written by a forgotten philosopher', min: 9, max: 9 },
            { name: 'Cyclopedia', min: 10, max: 10 },
            { name: 'Book of myths', min: 11, max: 11 },
            { name: 'Bestiary', min: 12, max: 12 },
            { name: 'Romance', min: 13, max: 13 },
            { name: 'Puzzle book that reveals the location of a secret', min: 14, max: 14 },
            { name: 'Map of location of a tomb containing a magical artifact', min: 15, max: 15 },
            { name: 'Map of location of a crypt containing lost treasures', min: 16, max: 16 },
            { name: 'Tome of ancient lore in a forgotten tongue', min: 17, max: 17 },
            { name: 'Lost spell book(s): containing 2d3 spells of circles 2 through 4', min: 18, max: 18 }
        ]
    }
];

export default class Library extends Component {

    draw() {
        if (!this.state.tables) this.state.tables = defaultTables;
        if (!this.state.filter) this.state.filter = '';
        if (!this.state.modifier) this.state.modifier = '';

        return String.raw`
            <div id="${this.id}">
                <div class="row">
                    <div class="col">
                        <input data-modifier="" class="form-control" placeholder="modifier" value="${this.state.modifier}">
                        <input data-filter="" class="form-control" placeholder="filter" value="${this.state.filter}">
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                        <div class="card">
                            <div class="card-body">
                                ${this.drawResults()}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row">
                    ${this.state.tables.map(x => this.drawTable(x)).reduce((a,b) => `${a}${b}`, '')}
                </div>
            </div>
        `;
    }

    drawResults() {
        if(!this.state.results || this.state.results.length == 0) return '';
        
        return this.state.results
            .map(x => String.raw`<p>Rolled ${x.roll} on ${x.table}: ${x.description}</p>`)
            .reduce((a,b) => `${a}${b}`, '');
    }

    drawTable(table) {
        if(this.state.filter && table.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) < 0) return '';

        return String.raw`
            <div class="col-lg-3 col-md-4 col-sm-6 my-1">
                <div class="card">
                    <div class="card-header p-2">
                        <h5 class="m-0">${table.name}</h5>
                    </div>
                    <div class="card-body d-flex flex-column">
                        <span data-table="${table.name}" data-edit="" class="btn btn-light border">Edit</span>
                        <span data-table="${table.name}" data-roll="" class="btn btn-light border">Roll</span>
                    </div>
                </div>
            </div>
        `;
    }

    initialize() {
        super.initialize();

        this.findOne('[data-filter]').addEventListener('change', x => {
            this.state.filter = x.target.value;
            this.update();
        });

        this.find('[data-roll]').forEach(x => x.addEventListener('click', x => rollClick({
            control: this,
            target: x.target
        })));
    }
}