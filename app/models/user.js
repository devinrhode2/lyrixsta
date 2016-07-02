import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo } from 'ember-data/relationships';
import { hasMany } from 'ember-data/relationships';

export default Model.extend({
  lastfmusername: attr('string'),
  songs: hasMany('song'),
  username: attr('string'),
  datejoined: attr('date'),
  online: attr('boolean'),
  salt: attr('string'),
  email: attr('string'),
  followers: hasMany('user'),
  followings: hasMany('user'),
  lastLogin: attr('date')
});
