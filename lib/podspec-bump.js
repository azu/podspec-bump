/**
 * Created by azu on 2014/08/21.
 * LICENSE : MIT
 */
"use strict";
var fs = require("fs");
var path = require("path");
var semver = require("semver");
var VERSION_REGEXP = /s\.version\s*=\s*["'](.*?)["']/i;
function PodspecBumper(filePath) {
    this.filePath = filePath;
    this.fileContent = fs.readFileSync(path.resolve(process.cwd(), filePath), "utf-8");
}
PodspecBumper.prototype.getVersion = function () {
    var match = this.fileContent.match(VERSION_REGEXP);
    return match && match[1];
};
/**
 * Return the version incremented
 *     https://github.com/npm/node-semver
 * @param releaseVersion
 * @returns {string}
 */
PodspecBumper.prototype.incrementVersion = function (releaseVersion) {
    return semver.inc(this.getVersion(), releaseVersion || "patch");
};
/**
 * Return the version incremented file content.
 * @param releaseVersion
 * @returns {string}
 */
PodspecBumper.prototype.bumpVersion = function (releaseVersion) {
    return this.fileContent.replace(VERSION_REGEXP, function (all, version) {
        return all.replace(version, this.incrementVersion(releaseVersion));
    }.bind(this));
};
module.exports = PodspecBumper;