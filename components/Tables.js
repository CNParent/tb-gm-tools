import Component from "../lib/Component.js";
import styles from '../styles.js';
import { rollClick } from '../actions/LibraryActions.js';

export default class Tables extends Component {
    draw() {
        return String.raw`
            <div id="${this.id}" class="d-flex flex-wrap">
                ${this.state.tables.map(x => this.drawTable(x)).reduce((a,b) => `${a}${b}`, '')}
            </div>
        `;
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

        this.find('[data-roll]').forEach(x => x.addEventListener('click', () => rollClick({
            control: this,
            target: x
        })));
    }
}