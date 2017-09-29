/**
 * Created by cshao on 09/29/17.
 */

'use strict';

var batchStub = require('batch-stub');

var mixpanelStubConfig = [{
  field: 'init',
  type: 'function'
}, {
  field: 'push',
  type: 'function'
}, {
  field: 'disable',
  type: 'function'
}, {
  field: 'track',
  type: 'function'
}, {
  field: 'track_links',
  type: 'function'
}, {
  field: 'track_forms',
  type: 'function'
}, {
  field: 'time_event',
  type: 'function'
}, {
  field: 'register',
  type: 'function'
}, {
  field: 'register_once',
  type: 'function'
}, {
  field: 'unregister',
  type: 'function'
}, {
  field: 'identify',
  type: 'function'
}, {
  field: 'reset',
  type: 'function'
}, {
  field: 'get_distinct_id',
  type: 'function'
}, {
  field: 'alias',
  type: 'function'
}, {
  field: 'set_config',
  type: 'function'
}, {
  field: 'get_config',
  type: 'function'
}, {
  field: 'get_property',
  type: 'function'
}, {
  field: 'people',
  type: 'object',
  children: [{
    field: 'set',
    type: 'function'
  }, {
    field: 'set_once',
    type: 'function'
  }, {
    field: 'increment',
    type: 'function'
  }, {
    field: 'append',
    type: 'function'
  }, {
    field: 'union',
    type: 'function'
  }, {
    field: 'track_charge',
    type: 'function'
  }, {
    field: 'clear_charges',
    type: 'function'
  }, {
    field: 'delete_user',
    type: 'function'
  }]
}];

module.exports = function(mixpanel) {
  batchStub(mixpanel, mixpanelStubConfig);
};