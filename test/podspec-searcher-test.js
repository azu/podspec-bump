/**
 * Created by azu on 2014/08/21.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var searcher = require("../lib/podspec-searcher");
describe("podspec-searcher-test", function () {
    describe("searchPodspecFilePath", function () {
        it("should return podspec path", function (done) {
            var testDir = __dirname + "/fixtures";
            searcher.searchPodspecFilePath(testDir, function (error, filePath) {
                assert(filePath, testDir + "/example.podspec");
                done(error);
            });
        });
    });
});