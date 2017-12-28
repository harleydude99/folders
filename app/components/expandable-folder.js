import Ember from 'ember';

export default Ember.Component.extend({
  isExpanded: false,
  newFile: null,
  newFolder: null,
  store: Ember.inject.service(),
  actions:{
    toggleExpansion(){
      this.toggleProperty('isExpanded');
    },
    saveNewFolder(folder){
      let toSaveObject = {
        name:this.get('newFolder'),
        parent: folder
      };
      this.get('store').createRecord('folder', toSaveObject).save();
      this.set('newFolder', '');
    },
    saveNewFile(folder){
      let toSaveObject = {
        name:this.get('newFile'),
        folder: folder
      };
      this.get('store').createRecord('file', toSaveObject).save();
      this.set('newFile', '');
    }
  }
});
