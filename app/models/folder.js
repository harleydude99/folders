import DS from 'ember-data';

export default DS.Model.extend({
  name: DS.attr('string'),
  folders: DS.hasMany('folder', {inverse: 'parent'}),
  parent: DS.belongsTo('folder', {inverse: 'folders'}),
  files: DS.hasMany()
})
