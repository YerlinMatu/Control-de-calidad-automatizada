const casper = require('casper').create();
const url = 'http://www.shewylab.com';

casper.start(url, function() {
    this.echo(this.getTitle())
})

casper.run();


