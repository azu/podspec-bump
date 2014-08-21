# podspec-bump

A command line tools to bump podspec version for [CocoaPods](http://cocoapods.org/ "CocoaPods").

## Feature

- Automatically increments version in `*.podspec`
- Default is dry-run
- Dump version in podspec file

## Installation

```
npm install -g podspec-bump
```

## Usage

Automatically find `*.podspec` file from working directory.

```
$ podspec-bump -h

Usage: podspec-bump <increment> [options]

  -h, --help              displays help
  -w, --write             write incremented version
  -i, --increment String  Incrementing "major", "minor", or "patch" version; or specify version [default: "patch"]
  -p, --path String       path to podspec
```

default is dry-run(doesn't write to file)

If you want to write incremented version to the podspec file, use `-w` option.

``` shell
$ podspec-bump -w
```

### Incrementing version

Incrementing "major", "minor", or "patch" version; or specify version [default: "patch"]

[Semantic Versioning](http://semver.org/ "Semantic Versioning")!

``` shell
$ podspec-bump major -w
# or
$ podspec-bump -i 1.2.3 -w
```

### Specific podspec file

You can use `-p` option

``` shell
$ podspec-bump -p /path/to/example.podspec
```

### Dump version

If you want to know podspec version value, use `--dump-version` option.

```
$ podspec-bump --dump-version 
0.1.0
```

### Automatically trunk push

Automatically release podspec !

``` shell
podspec-bump -w
git commit -am "bump `podspec-bump --dump-version`" 
git tag "`podspec-bump --dump-version`"
git push --tags
pod trunk push
```

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

MIT