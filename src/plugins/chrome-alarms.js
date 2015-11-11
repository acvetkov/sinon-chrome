/**
 * Chrome alarms implementation via setTimeout
 */

(function() {

  // alarms
  var alarms = {};
  var trigger = function() {};

  function initialRun(name) {
    var alarm = get(name);
    if (!alarm) {
      delete alarms[name];
      return;
    }
    if (alarm.periodInMinutes) {
      var delay = alarms[name].periodInMinutes * 60 * 1000;
      alarms[name].scheduledTime = alarms[name].scheduledTime + delay;
      alarms[name].t = setTimeout(repeatedRun.bind(null, name), delay);
    } else {
      delete alarms[name];
    }
    trigger(alarm);
  }

  function repeatedRun(name) {
    var alarm = get(name);
    if (!alarm) {
      delete alarms[name];
      return;
    }
    var delay = alarms[name].periodInMinutes * 60 * 1000;
    alarms[name].scheduledTime = alarms[name].scheduledTime + delay;
    alarms[name].t = setTimeout(repeatedRun.bind(null, name), delay);
    trigger(alarm);
  }

  function get(name) {
    if (alarms[name]) {
      var alarm = {
        name: name,
        scheduledTime: alarms[name].scheduledTime
      };
      if (alarms[name].periodInMinutes) {
        alarm.periodInMinutes = alarms[name].periodInMinutes;
      }
      return alarm;
    } else {
      return null;
    }
  }

  var chromeAlarms = {
    onTrigger: function(callback) {
      trigger = callback;
    },
    create: function(name, alarmInfo) {
      if (!alarmInfo || (!alarmInfo.when && isNaN(alarmInfo.delayInMinutes) && isNaN(alarmInfo.periodInMinutes))) {
        throw new Error('AlarmInfo should be specified');
      }
      if (alarms[name] && alarms[name].t) {
        clearTimeout(alarms[name].t);
      }
      alarms[name] = {};
      var delay;
      if (alarmInfo.when) {
        delay = alarmInfo.when - Date.now();
        alarms[name].scheduledTime = alarmInfo.when;
      } else {
        delay = !isNaN(alarmInfo.delayInMinutes) ? alarmInfo.delayInMinutes : alarmInfo.periodInMinutes;
        delay = delay * 60 * 1000;
        alarms[name].scheduledTime = Date.now() + delay;
      }
      if (!isNaN(alarmInfo.periodInMinutes)) {
        alarms[name].periodInMinutes = alarmInfo.periodInMinutes;
      }
      if (delay >= 0) {
        alarms[name].t = setTimeout(initialRun.bind(null, name), delay);
      }
    },

    get: function(name, callback) {
      callback(get(name));
    },

    getAll: function(callback) {
      var res = [];
      Object.keys(alarms).forEach(function(name) {
        var alarm = get(name);
        if (alarm) {
          res.push(alarm);
        }
      });
      callback(res);
    },

    clear: function(name, callback) {
      callback = callback || function() {};
      var wasCleared = false;
      if (alarms[name] && alarms[name].t) {
        clearTimeout(alarms[name].t);
        wasCleared = true;
      }
      callback(wasCleared);
    },

    clearAll: function(callback) {
      callback = callback || function() {};
      var wasCleared = Boolean(Object.keys(alarms).length);
      Object.keys(alarms).forEach(function(name) {
        chromeAlarms.clear(name);
      });
      callback(wasCleared);
    }
  };

  // exports
  if (typeof exports === 'object') {
    module.exports = chromeAlarms;
  } else {
    window.chromeAlarms = chromeAlarms;
  }

}());