import Component from '../lib/Component.js';
import { rollClick } from '../actions/LibraryActions.js';
import styles from '../styles.js';

export default class Library extends Component {

    draw() {
        if (!this.state.tables) this.state.tables = [];
        if (!this.state.filter) this.state.filter = '';
        if (!this.state.modifier) this.state.modifier = '+0';

        let categories = [...new Set(this.state.tables.map(x => x.category))];
        return String.raw`
            <div id="${this.id}">
            <div class="row">
            <div class="col-md-6">
                <div class="row">
                    <div class="col">
                    <div class="card">
                    <div class="card-body">
                        ${[...this.drawModifiers()].reduce((a,b) => `${a}${b}`, '')}
                        <input data-filter="" class="form-control"  placeholder="filter" value="${this.state.filter}">
                        <select data-category="" class="form-control">
                            <option></option>
                            ${categories.map(x => this.drawCategory(x)).reduce((a,b) => `${a}${b}`, '')}
                        </select>
                    </div>
                    </div>
                    </div>
                </div>
                <div class="row">
                    <div class="col">
                    <div class="card">
                    <div class="card-body">
                        <div class="d-flex flex-wrap">
                            ${this.state.tables.map(x => this.drawTable(x)).reduce((a,b) => `${a}${b}`, '')}
                        </div>
                    </div>
                    </div>
                    </div>
                </div>
            </div>
            <div class="col">
                <div class="card">
                <div class="card-body">
                    ${this.drawResults()}
                </div>
                </div>
            </div>
            </div>
            </div>
        `;
    }

    drawCategory(category) {
        return String.raw`
            <option ${this.state.category == category ? 'selected="selected"' : ''}>${category}</option>
        `;
    }

    drawModifiers() {
        return String.raw`
            <div class="d-flex">
                <div class="btn-group m-1">
                    <a href="javascript:;" data-down="modifier" class="btn btn-light border-dark">&darr;</a>
                    <a href="javascript:;" class="btn btn-dark border-dark">${this.state.modifier}</a>
                    <a href="javascript:;" data-up="modifier" class="btn btn-light border-dark">&uarr;</a>
                </div>
                <a href="javascript:;" data-zero="modifier" class="btn btn-light border-dark m-1">reset</a>
            </div>
        `;
    }

    drawResults() {
        if(!this.state.results || this.state.results.length == 0) return '';
        
        return this.state.results
            .map(x => String.raw`<p style="white-space: pre-wrap;">Rolled ${x.roll} on ${x.table}: ${x.description}</p>`)
            .reduce((a,b) => `${a}${b}`, '');
    }

    drawTable(table) {
        if(this.state.filter && table.name.toLowerCase().indexOf(this.state.filter.toLowerCase()) < 0) return '';
        if(this.state.category && table.category != this.state.category) return '';

        return String.raw`
            <a href="javascript:;" class="${styles.btn}" data-table="${table.name}" data-roll="">${table.name}</a>
        `;
    }

    initialize() {
        super.initialize();

        this.findOne('[data-category]').addEventListener('change', x => {
            this.state.category = x.target.value;
            this.update();
        });

        this.findOne('[data-filter]').addEventListener('change', x => {
            this.state.filter = x.target.value;
            this.update();
        });

        this.find('[data-down]').forEach(x => x.addEventListener('click', () => {
            let value = Number(this.state[x.dataset.down]) - 1;
            if (value >= 0) value = `+${value}`;
            else value = `${value}`;

            this.state.modifier = value;
            this.update();
        }));

        this.find('[data-up]').forEach(x => x.addEventListener('click', () => {
            let value = Number(this.state[x.dataset.up]) + 1;
            if (value >= 0) value = `+${value}`;
            else value = `${value}`;

            this.state.modifier = value;
            this.update();
        }));

        this.find('[data-zero]').forEach(x => x.addEventListener('click', () => {
            this.state[x.dataset.zero] = null;
            this.update();
        }))

        this.find('[data-roll]').forEach(x => x.addEventListener('click', () => rollClick({
            control: this,
            target: x
        })));
    }
}