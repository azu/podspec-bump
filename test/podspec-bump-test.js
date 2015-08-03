/**
 * Created by azu on 2014/08/21.
 * LICENSE : MIT
 */
"use strict";
var assert = require("power-assert");
var fs = require("fs");
var PodSpecBump = require("../lib/podspec-bumper");
describe("podspec-bump-test", function () {
    var filePath = __dirname + "/fixtures/example.podspec";
    var majorUpdatedFilePath = __dirname + "/fixtures/major-updated.podspec";
    var podspecBumper;
    beforeEach(function () {
        podspecBumper = new PodSpecBump(filePath);
    });
    describe("#getVersion", function () {
        it("should return 0.1.0", function () {
            assert.equal(podspecBumper.getVersion(), "0.1.0");
        });
        context("when podspec is in a different format", function () {
            it("should return 3.1.0", function () {
                var differentPodspecPath = __dirname + "/fixtures/example-different-format.podspec";
                var format2PodspecBumper = new PodSpecBump(differentPodspecPath);
                assert.equal(format2PodspecBumper.getVersion(), "3.1.0");
            });
        });
    });
    describe("#incrementVersion", function () {
        context("when no args", function () {
            it("should return 0.1.1 patch version", function () {
                assert.equal(podspecBumper.incrementVersion(), "0.1.1");
            });
        });
        context("when specific version", function () {
            it("should return specific version", function () {
                assert.equal(podspecBumper.incrementVersion("1.2.3"), "1.2.3");
            });
        });
        context("when minor update", function () {
            it("should return 0.2.0", function () {
                assert.equal(podspecBumper.incrementVersion("minor"), "0.2.0");
            });
        });
        context("when major update", function () {
            it("should return 1.0.0", function () {
                assert.equal(podspecBumper.incrementVersion("major"), "1.0.0");
            });
        });
    });
    describe("#bumpVersion", function () {
        it("should return major updated content", function () {
            var actual = podspecBumper.bumpVersion("major");
            var expected = fs.readFileSync(majorUpdatedFilePath, "utf-8");
            assert.equal(actual, expected);
        });
    });
});