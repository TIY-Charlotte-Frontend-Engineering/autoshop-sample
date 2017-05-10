let View = require('ampersand-view');

module.exports = View.extend({
    template: document.querySelector('#shop-template').innerHTML,
    bindings: {
        'model.total': '.total',
        'model.tires': '.tires',
        'model.paint': '.paint',
        'model.exhaust': '.exhaust',
        'model.horsepower': '.horsepower',
        'model.mpg': '.mpg',
    },
    render: function () {
        this.renderWithTemplate();
    },
});