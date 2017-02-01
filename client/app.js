'use strict'

import * as riot from 'riot';
import route from 'riot-route';

global.riot = riot;
global.route = route;
global.app = riot.observable();


document.addEventListener('DOMContentLoaded', (e) => {

    riot.mount('*');
});


document.addEventListener('keyup', (e) => {

    switch (e.which) {
        case 27:
            app.trigger('esc', e); break;

        case 13:
            app.trigger('enter', e); break;

        case 9:
            app.trigger('tab', e); break;

        default:
            app.trigger('keyup', e); break;

    }

});
