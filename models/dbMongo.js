/**
 * Created on 22/09/2017.
 */

var mongoose = require('mongoose');
//var config   = require('../config');

mongoose.connect(config.db.type + "://" + config.db.server + "/" + config.db.name);