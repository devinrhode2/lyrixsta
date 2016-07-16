import Ember from 'ember';
//import indexStyleVars from './indexStyleVars';

export default Ember.Controller.extend({
    actions: {
        search() {
            this.get('search')
        }
    }
});
