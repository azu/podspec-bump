#!/usr/bin/env node
var fs = require('fs');
var PodspecBumper = require("../lib/podspec-bumper");
var searcher = require("../lib/podspec-searcher");
var optionator = require('optionator')({
    prepend: 'Usage: podspec-bump <increment> [options]',
    append: 'Version ' + require("../package.json").version,
    options: [
        {
            option: 'help',
            alias: 'h',
            type: 'Boolean',
            description: 'displays help'
        },
        {
            option: 'write',
            alias: 'w',
            type: 'Boolean',
            description: 'write incremented version',
            example: 'podspec-bump -w major'
        },
        {
            option: 'increment',
            alias: 'i',
            type: 'String',
            description: 'Incrementing "major", "minor", or "patch" version; or specify version [default: "patch"]',
            example: 'podspec-bump -i minor'
        }
    ]
});
var options = optionator.parse(process.argv);
if (options.help) {
    console.log(optionator.generateHelp());
} else {
    var version = options.increment || options._[0];
    searcher.searchPodspecFilePath(process.cwd(), function (error, podFilePath) {
        if (error) {
            throw error;
        }
        var bumper = new PodspecBumper(podFilePath);
        if (options.write) {
            fs.writeFileSync(podFilePath, bumper.bumpVersion(version));
        } else {
            console.log(bumper.bumpVersion(version));
        }
    })
}
