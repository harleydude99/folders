import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  isExpanded: false,
  store: Ember.inject.service(),
  actions:{
    toggleExpansion(){
      this.toggleProperty('isExpanded');
    },
    edit(){
      this.set('isEditing', true);
    },
    save(){
      this.get('folder').save();
      this.set('isEditing', false);
    },
    destroy(){
      this.deleteWithChildren(this.get('folder'));
    }
  },
  deleteWithChildren(item){
    let folders = item.get('folders');
    folders.forEach((child)=>{
      this.deleteWithChildren(child);
    });
    let files = item.get('files');
    files.forEach((child)=>{
      child.destroyRecord();
    });
    item.destroyRecord();
    //problem with concurrency, look up ember-concurrency library
  }
});
