const casper = require('casper').create();

const url = 'http://shewylab.com';

casper.start(url, function() {
    this.echo(this.getPageContent());
});

casper.run();