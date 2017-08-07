// for each component directory
const dirname = 'src/components';
var path = require('path');
var fs = require('fs');
var _0777 = parseInt('0777', 8);

const FileSystem = require('fs');
const Path = require('path');
const prependMe = "import React from 'react';\n  export default () =>";

function readDirR(dir) {
  return FileSystem.statSync(dir).isDirectory()
    ? Array.prototype.concat(
        ...FileSystem.readdirSync(dir).map(f => readDirR(Path.join(dir, f)))
      )
    : dir;
}

readDirR(dirname).forEach(function(filepath) {
  // src/components/headers/rounded-avatar-title-subtitle.html
  var clean = filepath.split('components/')[1].split('.html')[0].split('/');
  var folder = titleize(clean[0]).split('-').join('');
  var filename = titleize(clean[1]).split('-').join('');
  var newfilepath = `src/stories/${folder}/${filename}.js`;
  var data = FileSystem.readFileSync(filepath, 'utf8')
    .split('}}}')[1]
    .replace(/class/g, 'className');

  console.log(newfilepath);

  mkdirP(`src/stories/${folder}/`, function(err) {
    FileSystem.writeFileSync(newfilepath, prependMe + data);
  });
});

function titleize(str) {
  if (typeof str !== 'string') {
    throw new TypeError('Expected a string');
  }

  return str.toLowerCase().replace(/(?:^|\s|-)\S/g, function(m) {
    return m.toUpperCase();
  });
}

function mkdirP(p, opts, f, made) {
  if (typeof opts === 'function') {
    f = opts;
    opts = {};
  } else if (!opts || typeof opts !== 'object') {
    opts = { mode: opts };
  }

  var mode = opts.mode;
  var xfs = opts.fs || fs;

  if (mode === undefined) {
    mode = _0777 & ~process.umask();
  }
  if (!made) made = null;

  var cb = f || function() {};
  p = path.resolve(p);

  xfs.mkdir(p, mode, function(er) {
    if (!er) {
      made = made || p;
      return cb(null, made);
    }
    switch (er.code) {
      case 'ENOENT':
        mkdirP(path.dirname(p), opts, function(er, made) {
          if (er) cb(er, made);
          else mkdirP(p, opts, cb, made);
        });
        break;

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        xfs.stat(p, function(er2, stat) {
          // if the stat fails, then that's super weird.
          // let the original error be the failure reason.
          if (er2 || !stat.isDirectory()) cb(er, made);
          else cb(null, made);
        });
        break;
    }
  });
}

mkdirP.sync = function sync(p, opts, made) {
  if (!opts || typeof opts !== 'object') {
    opts = { mode: opts };
  }

  var mode = opts.mode;
  var xfs = opts.fs || fs;

  if (mode === undefined) {
    mode = _0777 & ~process.umask();
  }
  if (!made) made = null;

  p = path.resolve(p);

  try {
    xfs.mkdirSync(p, mode);
    made = made || p;
  } catch (err0) {
    switch (err0.code) {
      case 'ENOENT':
        made = sync(path.dirname(p), opts, made);
        sync(p, opts, made);
        break;

      // In the case of any other error, just see if there's a dir
      // there already.  If so, then hooray!  If not, then something
      // is borked.
      default:
        var stat;
        try {
          stat = xfs.statSync(p);
        } catch (err1) {
          throw err0;
        }
        if (!stat.isDirectory()) throw err0;
        break;
    }
  }

  return made;
};
