# Snapshot report for `packages/build/tests/error/stack/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## Print stack trace of Build command UI settings

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      No config file was defined: using default values.␊
    ␊
    > Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────┐␊
    │ 1. Build command from settings │␊
    └────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In Build command from settings:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Print stack trace of build.command errors

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node --invalid␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 9: node --invalid␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node --invalid␊
    ␊
      Resolved config␊
      build:␊
        command: node --invalid␊
    ␊
    node: bad option: --invalid`

## Print stack trace of build.command errors with stack traces

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      build:␊
        command: node command.js␊
    ␊
    > Context␊
      production␊
    ␊
    ┌────────────────────────────────────┐␊
    │ 1. build.command from netlify.toml │␊
    └────────────────────────────────────┘␊
    ␊
    $ node command.js␊
    Error: test␊
    STACK TRACE␊
    ␊
    ┌─────────────────────────────┐␊
    │   "build.command" failed    │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Command failed with exit code 2: node command.js␊
    ␊
      Error location␊
      In build.command from netlify.toml:␊
      node command.js␊
    ␊
      Resolved config␊
      build:␊
        command: node command.js`

## Print stack trace of plugin errors

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌─────────────────────────────────────┐␊
    │ 1. onPreBuild command from /file/path │␊
    └─────────────────────────────────────┘␊
    ␊
    ␊
    ┌──────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └──────────────────────────────────┘␊
    ␊
      Error message␊
      Error: test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      In "onPreBuild" event in "/file/path" from netlify.toml␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Print stack trace of plugin errors during load

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      repositoryRoot: /file/path␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path␊
    ␊
    > Context␊
      production␊
    ␊
    > Loading plugins␊
       - /file/path from netlify.toml␊
    ␊
    ┌──────────────────────────────────┐␊
    │ Plugin "/file/path" internal error │␊
    └──────────────────────────────────┘␊
    ␊
      Error message␊
      Error: Could not import plugin:␊
      test␊
    ␊
      Plugin details␊
      Package:        /file/path␊
      Version:        1.0.0␊
      Repository:     git+https://github.com/netlify/build.git␊
      npm link:       https://www.npmjs.com/package/@netlify/build␊
      Report issues:  https://github.com/netlify/build/issues␊
    ␊
      Error location␊
      While loading "/file/path" from netlify.toml␊
    STACK TRACE␊
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## Print stack trace of validation errors

> Snapshot 1

    `␊
    ┌─────────────────────────────┐␊
    │        Netlify Build        │␊
    └─────────────────────────────┘␊
    ␊
    > Version␊
      @netlify/build 1.0.0␊
    ␊
    > Flags␊
      config: /file/path␊
    ␊
    ┌─────────────────────────────┐␊
    │     Configuration error     │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      When resolving config file /file/path␊
      Configuration file does not exist␊
    `
