// @export Log
Log = function () {
  return Log.info.apply(this, arguments);
};

//  xcxc implement each of:
//   Log.info (eg) :   object/string -> json string
//   Log.parse :  json string (or random string) -> logobj
//   Log.format : logobj -> pretty string

// xcxc integrate into run.js

_.each(['debug', 'info', 'warn', 'error'], function (level) {
  Log[level] = function (arg) {
    var obj = (typeof arg === 'string') ? {message: arg} : arg;
    // xcxc throw exception if 'time', 'level' are defined in obj
    
    obj.time = new Date();
    obj.level = level;
    // XXX file, line, package
    
    if (Meteor.isServer) /// XXX in the future, do the right thing on the client
      console.log(EJSON.stringify(obj));
  };
});
