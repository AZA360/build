# Snapshot report for `packages/build/tests/plugins/api/tests.js`

The actual snapshot is saved in `tests.js.snap`.

Generated by [AVA](https://ava.li).

## --site-id

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
      siteId: test␊
    ␊
    > Current directory␊
      /file/path␊
    ␊
    > Config file␊
      /file/path␊
    ␊
    > Resolved config␊
      {}␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## --token

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
      {}␊
    ␊
    > Context␊
      production␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## NETLIFY_AUTH_TOKEN environment variable

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
    [ { id: 'test' } ]␊
    ␊
    (/file/path onPreBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## api call

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
    [ { id: 'test' } ]␊
    ␊
    (/file/path onPreBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## default scopes

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
    ┌─────────────────────────────┐␊
    │  Plugin "/file/path" failed   │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Error: This plugin is not authorized to use "api.listSites". Please update the plugin scopes.␊
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

## feature flag

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
    true␊
    ␊
    (/file/path onPreBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## scopes but no token

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
    ┌─────────────────────────────┐␊
    │  Plugin "/file/path" failed   │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Error: This plugin requires a Netlify API authentication token␊
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
    ␊
      Resolved config␊
      plugins:␊
        - inputs: {}␊
          origin: config␊
          package: /file/path`

## star scopes

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
    [ { id: 'test' } ]␊
    ␊
    (/file/path onPreBuild completed in 1ms)␊
    ␊
    ┌─────────────────────────────┐␊
    │   Netlify Build Complete    │␊
    └─────────────────────────────┘␊
    ␊
    (Netlify Build completed in 1ms)`

## wrong scopes

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
    ┌─────────────────────────────┐␊
    │  Plugin "/file/path" failed   │␊
    └─────────────────────────────┘␊
    ␊
      Error message␊
      Error: This plugin is not authorized to use "api.listSites". Please update the plugin scopes.␊
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
