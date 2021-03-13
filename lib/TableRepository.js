import RestClient from './RestClient.js'

const dataUrl = 'https://docs.google.com/spreadsheets/d/e/2PACX-1vTwssniGQQzgz2QugHShUka6ZOUy83f50f1x7TmkWNHnICP2jk4GbjJUKHX8ooEZR7mHZiAtqzGoeUL';

export default class TableRepository {
    constructor() {
        this.tables = [];
        this.client = new RestClient({ url: dataUrl });
    }

    async loadData() {
        let data = await this.client.get('pubhtml');
        let workbook = new DOMParser().parseFromString(data, 'text/html');
        let sheets = [...workbook.querySelectorAll('#sheets-viewport > div')];
        let cells = sheets.map(x => x.querySelectorAll('td'));
        for(let i = 0; i < sheets.length; i++) {

            let table = {
                name: workbook.querySelector(`#sheet-button-${sheets[i].id}`).textContent,
                category: cells[i][0].textContent,
                roll: cells[i][1].textContent,
                entries: []
            };

            let rows = cells[i].length / 5;
            for(let j = 15; j < rows * 5; j += 5) {
                table.entries.push({
                    name: cells[i][j].innerText,
                    min: Number(cells[i][j + 1].textContent),
                    max: Number(cells[i][j + 2].textContent),
                    table: cells[i][j + 3].textContent,
                    amount: cells[i][j + 4].textContent
                });
            }

            this.tables.push(table);
        }
    }
}