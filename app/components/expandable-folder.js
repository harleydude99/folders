import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  newFile: null,
  newFolder: null,
  newItem: null,
  store: Ember.inject.service(),
  actions:{
    toggleExpansion(){
      this.toggleProperty('isExpanded');
    }
  }
});
