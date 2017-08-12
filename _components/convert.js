// for each component directory
const dirname = 'src/stories';
var path = require('path');
const Path = require('path');
var fs = require('fs');
const FileSystem = require('fs');
var _0777 = parseInt('0777', 8);

function readDirR(dir) {
  return FileSystem.statSync(dir).isDirectory()
    ? Array.prototype.concat(
        ...FileSystem.readdirSync(dir).map(f => readDirR(Path.join(dir, f)))
      )
    : dir;
}

// TODO watch out! this creates files!
const readir = 'Nav';
const FORCE_WRITE = false;
const these_comps = {};
function write(string) {
  fs.appendFileSync(`${dirname}/${readir}/index.js`, string);
  fs.appendFileSync(`${dirname}/${readir}/index.js`, '\n');
}
function log(string) {
  console.log(string);
  if (FORCE_WRITE) {
    write(string);
  }
}

log(
  `/* eslint-disable import/no-extraneous-dependencies, import/no-unresolved, import/extensions */`
);
log('');
log(`import React from 'react';`);
log(`import { storiesOf } from '@storybook/react';`);
readDirR(dirname).forEach(function(filepath) {
  const path_parts = filepath.split('/');
  const compdir = path_parts[path_parts.length - 2];
  const comp = path_parts[path_parts.length - 1].split('.js')[0];
  if (compdir === readir && !filepath.includes('index')) {
    these_comps[comp] = comp;
    log(`import ${comp} from './${comp}.js'`);
  }
});
log('');
log(`storiesOf('${readir}')`);
Object.keys(these_comps).forEach(function(comp) {
  const title = titleize(comp);
  log(`.addWithInfo('${title}', ${comp}, { inline: true })`);
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
