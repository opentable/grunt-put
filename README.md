# grunt-put
[![Build Status](https://travis-ci.org/opentable/grunt-put.png?branch=master)](https://travis-ci.org/opentable/grunt-put) [![NPM version](https://badge.fury.io/js/grunt-put.png)](http://badge.fury.io/js/grunt-put) ![Dependencies](https://david-dm.org/opentable/grunt-put.png)

Does exactly what it says on the tin. Pipe a file to a http endpoint. Simple stuff.

installation:

```npm install --save grunt-put```

usage:

```
grunt.initConfig({
  'put':{
    options: {
      filename: 'foo/myfile.txt'
      destination: 'http://myserver.com/foo/bar/myfile.txt'
    }
  }
});

```
