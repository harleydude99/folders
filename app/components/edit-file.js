import Ember from 'ember';

export default Ember.Component.extend({
  isEditing: false,
  store: Ember.inject.service(),
  actions: {
    edit(){
      this.set('isEditing', true);
    },
    save(){
      this.get('file').save();
      this.set('isEditing', false);
    },
    delete(){
      this.get('file').destroyRecord();
    }
  }
});
