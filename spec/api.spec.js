import Api from '../src/scripts/model/api';

describe('API tests', () => {

    jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

    it('Api.getCharacters - should retrive character requests', (done) => {
        let api = new Api();
        let p = api.getCharacters().then((response) => {
            expect(response.status).toBe(200);
            done();
        }).catch((error) => {
            done();
        });
    });

    it('Api.getCharacters - should retrive character requests with parameters', (done) => {
        let api = new Api();
        let p = api.getCharacters({ limit: 5 }).then((response) => {
            expect(response.status).toBe(200);
            expect(response.data.data.limit).toBe(5);
            done();
        }).catch((error) => {
            done();
        });
    });

    it('Api.appendParameters -  should append options to request url', () => {
        let api = new Api();
        let options = {
            limit: 10,
            offset: 5
        };
        let result = api.appendParameters(api.characterUrl, options);
        expect(result).toBe(`${api.characterUrl}?apikey=${api.publicKey}&limit=10&offset=5`);
    });
});
