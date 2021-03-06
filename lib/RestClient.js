export default class RestClient {
    constructor(args = {url: ''}) {
        this.url = args.url;
    }
    
    async get(path = '') {
        return new Promise(resolve => {
            let req = new XMLHttpRequest();
            req.open('get', `${this.url}/${path}`);
            req.onload = () => {
                if (req.status > 299) resolve();
                else resolve(req.response);
            };

            req.send();
        });
    }
}