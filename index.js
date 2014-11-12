var DEV = "dev";
var TEST = "test";
var STAGE = "stage";
var PROD = "prod";

var VALID_RUN_MODES = {
   "dev" : DEV,
   "development" : DEV,
   "test" : TEST,
   "stage" : STAGE,
   "staging" : STAGE,
   "prod" : PROD,
   "production" : PROD
};

var nodeEnvironment = process.env.NODE_ENV || DEV;
nodeEnvironment = VALID_RUN_MODES[nodeEnvironment.toLowerCase()];

/**
 * Returns the current run mode.  Defaults to <code>dev</code> if not specified at runtime.  If valid, will be one of
 * <code>dev</code>, <code>test</code>, <code>stage</code>, or <code>prod</code>; otherwise, will return
 * <code>undefined</code>.
 *
 * @see isValid
 * @return {string}
 */
module.exports.get = function() {
   return nodeEnvironment;
};

/**
 * Returns an array of all valid run modes.
 *
 * @return {Array}
 */
module.exports.getValidModes = function() {
   return Object.keys(VALID_RUN_MODES);       // this returns a clone, so no worries about user modification
};

/**
 * Returns <code>true</code> if the current run mode is one of the valid run modes, <code>false</code> otherwise.
 *
 * @see getValidModes
 * @return {boolean}
 */
module.exports.isValid = function() {
   return typeof nodeEnvironment !== 'undefined' && nodeEnvironment != null;
};

/**
 * Returns <code>true</code> if the current run mode is development, <code>false</code> otherwise.
 *
 * @return {boolean}
 */
module.exports.isDevelopment = function() {
   return nodeEnvironment == DEV;
};

/**
 * Returns <code>true</code> if the current run mode is test, <code>false</code> otherwise.
 *
 * @return {boolean}
 */
module.exports.isTest = function() {
   return nodeEnvironment == TEST;
};

/**
 * Returns <code>true</code> if the current run mode is staging, <code>false</code> otherwise.
 *
 * @return {boolean}
 */
module.exports.isStaging = function() {
   return nodeEnvironment == STAGE;
};

/**
 * Returns <code>true</code> if the current run mode is production, <code>false</code> otherwise.
 *
 * @return {boolean}
 */
module.exports.isProduction = function() {
   return nodeEnvironment == PROD;
};
