import Ember from 'ember';
import appTheme from './appTheme'; //would eventually be application/theme.hbss or 
// './theme.hbs' or 'appTheme.hbss' or 'appTheme.js' could do appTheme({...overrides})
//import mainTheme from './mainTheme.js';

//themable at every level, app, engine, 

export default Ember.Controller.extend({
    ...appTheme
});
