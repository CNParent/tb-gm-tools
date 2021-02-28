import Component from '../lib/Component.js';
import { rollClick } from '../actions/LibraryActions.js';

export default class Library extends Component {

    draw() {
        if (!this.state.tables) this.state.tables = [];
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
                <div class="list-group">
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
            <a href="javascript:;" class="list-group-item list-group-item-action" data-table="${table.name}" data-roll="">${table.name}</a>
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