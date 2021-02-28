import RestClient from './RestClient.js'

const dataUrl = 'https://spreadsheets.google.com/feeds/cells/1g_UkwbV9mOvvs_cX209gRh9xSIiFz6M15v0W3Nzo-7Q';

export default class TableRepository {
    constructor() {
        this.tables = [];
    }

    async loadData() {
        let i = 1;
        let client = new RestClient({ url: dataUrl });
        while (true) {
            let data = await client.get(`${i}/public/full?alt=json`);
            if (!data) return;

            let table = {
                name: data.feed.title.$t,
                roll: data.feed.entry.find(x => x.title.$t == 'B1').gs$cell.$t,
                entries: []
            };

            let rows = Number(data.feed.gs$rowCount.$t);
            for(let j = 3; j <= rows; j++) {
                table.entries.push({
                    name: data.feed.entry.find(x => x.title.$t == `A${j}`).gs$cell.$t,
                    min: Number(data.feed.entry.find(x => x.title.$t == `B${j}`).gs$cell.$t),
                    max: Number(data.feed.entry.find(x => x.title.$t == `C${j}`).gs$cell.$t),
                    table: data.feed.entry.find(x => x.title.$t == `D${j}`)?.gs$cell.$t,
                    amount: data.feed.entry.find(x => x.title.$t == `E${j}`)?.gs$cell.$t
                });
            }

            this.tables.push(table);
            i++;
        }
    }
}