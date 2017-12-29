import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  newItem: null,
  store: Ember.inject.service(),
  actions: {
    startItemNaming(){
  			this.set('isEditing', true);
  	},
    saveNewItem(folder, type){
      let toSaveObject = {
        name:this.get('newItem')
      };
      if('file' === type){
        Ember.set(toSaveObject, 'folder', folder);
      }else{
        Ember.set(toSaveObject, 'parent', folder);
      }
      this.get('store').createRecord(type, toSaveObject).save();
      folder.save();
      this.set('newItem', '');
      this.set('isEditing', false);
    }
  }
}).reopenClass({
  positionalParams: ['folder', 'type']
});
