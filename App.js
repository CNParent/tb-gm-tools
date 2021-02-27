import Component from './lib/Component.js'
import Library from './components/Library.js'

export default class App extends Component {

    draw() {
        return String.raw`
            <div class="p-1" id="${this.id}">
                <div class="row">
                    <div class="col">
                        <h1>Table Roller</h1>
                    </div>
                </div>
                <hr />
                ${this.add(new Library('library', this.state.tables))}
            </div>
        `;
    }

}