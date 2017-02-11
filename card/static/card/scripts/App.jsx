'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import fetch from 'isomorphic-fetch';
require('es6-promise').polyfill();
require ('materialize-css/sass/materialize.scss');
import CardDisplay from './CardDisplay.jsx';

function fetchInitialData () {
    fetch('/get_cards?course='+window.COURSE_NAME, {
        method: 'GET',
    }).then(response=>response.json()).
        then(function(json){
            ReactDOM.render( <CardDisplay data={json.data} />,
                document.getElementById ('container') );
        });
}

fetchInitialData();
