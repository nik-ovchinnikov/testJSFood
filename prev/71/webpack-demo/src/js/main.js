function myModule () {
    this.hello = function() {
        console.log('helloQ');
    };

    this.goodbye = function() {
        console.log('goodbye');
    };
}

module.exports = myModule;