This repository is a reproduction of the following error in swc-core:
```
thread '<unnamed>' panicked at 'Infinite loop detected (current pass = 31)', /Users/runner/work/swc/swc/ecmascript/minifier/src/compress/mod.rs:261:13
stack backtrace:
   0:        0x11309ef0a - _rust_eh_personality
   1:        0x112ff203b - _napi_register_module_v1
   2:        0x11309dafa - _rust_eh_personality
   3:        0x11309e305 - _rust_eh_personality
   4:        0x11309d7d3 - _rust_eh_personality
   5:        0x1130bdd9a - _rust_eh_personality
   6:        0x1130bdd19 - _rust_eh_personality
   7:        0x1130bdcd5 - _rust_eh_personality
   8:        0x11426b87f - _rust_eh_personality
   9:        0x1130d6fa4 - _rust_eh_personality
  10:        0x1134b38d0 - _rust_eh_personality
  11:        0x112ef1a83 - <unknown>
  12:        0x106a1e19a - _worker
  13:     0x7fff203c38fc - __pthread_start
node:internal/process/esm_loader:94
    internalBinding('errors').triggerUncaughtException(
                              ^

[Error: failed to handle: Infinite loop detected (current pass = 31)

Stack backtrace:
   0: _rust_eh_personality
   1: _rust_eh_personality
   2: <unknown>
   3: _worker
   4: __pthread_start] {
  code: 'GenericFailure'
}

Node.js v17.0.1```

To reproduce, assuming you use nvm, run:
```
nvm use
yarn install
RUST_BACKTRACE=full node index.mjs
```

Note that this was originally discovered with Node 12.22.6, this is a minimal reproduction with the latest dependencies. The environment for reproduction is Mac OS X 11.6.1 with an x86 processer.

bad_terser.js is an example of how this input is handled with the terser command line & the `--compress`
