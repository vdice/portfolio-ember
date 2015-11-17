import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  preview: DS.attr(),
  previewImage: DS.attr(),
  description: DS.attr(),
  link: DS.attr()
});
