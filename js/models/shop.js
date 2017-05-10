let State = require('ampersand-state');

/* Representing a single vehicle at our shop */
module.exports = State.extend({
    props: {
        tires: 'number',
        paint: 'string',
        exhaust: 'boolean',
        horsepower: 'number',
        mpg: 'number',

        total: 'number',
    },

    fixTire: function () {
        if (this.tires < 4) {
            this.tires++;
            this.total += 200;
        }
    },

    paintCar: function () {
        if (this.paint === 'red') {
            this.paint = 'green';
        } else if (this.paint === 'green') {
            this.paint = 'orange';
        } else if (this.paint === 'orange') {
            this.paint = 'black';
        } else {
            this.paint = 'red';
        }

        this.total += 300;
    },

    fixExhaust: function () {
        if (!this.exhaust) { // if this.exhaust === false
            this.exhaust = true;
            this.total += 300;
        }
    },

    boostHp: function () {
        this.horsepower += 10;
        this.total += 100;
    },

    boostMpg: function () {
        if (this.horsepower > 0) {
            this.mpg += 5;
            this.horsepower -= 1;

            this.total += 100;
        }
    },
});