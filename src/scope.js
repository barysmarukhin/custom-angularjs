'use strict';

var _ = require('lodash');

function initWatchVal() {

};

function Scope() {
    this.$$watchers = [];

};

Scope.prototype.$watch = function(watchFn, listenerFn) {
    var watcher = {
        watchFn: watchFn,
        listenerFn: listenerFn || function() {},
        last: initWatchVal
    };

    this.$$watchers.push(watcher);
};

Scope.prototype.$digest = function() {
    var self = this;
    var oldValue, newValue;

    _.forEach(this.$$watchers, function(watcher) {
        newValue = watcher.watchFn(self);
        oldValue = watcher.last;

        if(oldValue !== newValue) {
            watcher.last = newValue;
            watcher.listenerFn(newValue,
                oldValue === initWatchVal ? newValue: oldValue,
                self);
        }
    })
};

module.exports = Scope;