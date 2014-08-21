/**
 * Created by azu on 2014/08/21.
 * LICENSE : MIT
 */
"use strict";
var fs = require('fs');
var path = require("path");
/**
 * find podspec and return find first file path
 * @param currentDir
 * @param callback
 */
function searchPodspecFilePath(currentDir, callback) {
    var cDir = currentDir || process.cwd();// default: cwd
    fs.readdir(cDir, function (err, files) {
        if (err) {
            return callback(err);
        }
        var results = files.filter(function (file) {
            return path.extname(file) === '.podspec';
        });
        // return first filePath
        if (results.length == 0) {
            callback(new Error("not found podspec file"));
        } else {
            var filePath = results.shift();
            callback(null, filePath);
        }
    });
}
module.exports.searchPodspecFilePath = searchPodspecFilePath;