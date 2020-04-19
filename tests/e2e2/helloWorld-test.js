require('../end2end/helpers/Server');

describe('suite sync', () => {
    before('reset app', () => {
        server.connect();
        server.call('e2e.resetMyApp', false);
        server.close();
    });
    
    it('test sync',
        () => {
            browser.url('http://localhost:3100');
            expect(browser.getTitle()).to.contain('4Minitz');

            let dateStr = (new Date()).toISOString().replace(/[^0-9]/g, '') + '_';
            let fullpath = './tests/snapshots/' + dateStr + '.png';
            browser.saveScreenshot(fullpath);
        });
});
