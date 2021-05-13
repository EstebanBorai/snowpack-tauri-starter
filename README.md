<div align="center">
  <h1>snowpack-tauri-starter</h1>
  <h4 align="center">
    Snowpack + Tauri Template for developing desktop application with
    ReactJS (TypeScript) and Rust
  </h4>
</div>

## Installation

> Make sure you read the [Tauri](https://tauri.studio/en/docs/getting-started/intro) getting started guide before proceeding to avoid any issues

> Rust and NodeJS should be installed in your system

Theres two main directories in this application, `src-tauri` and `src`.
All of the Front-End lives inside of the `src` directory, ReactJS and
TypeScript logic should live there.

The `src-tauri` directory contains Rust code, used by Tauri to bootstrap
and run your Web View inside of a system window.

Install dependencies using either Yarn or NPM. (This project makes use
of Yarn)

```bash
yarn install
```

The Snowpack setup included is not configured for any purposes, the configuration
provided could be considered "regular" as it comes with no extra dependencies
beyond TypeScript support.

## Running

In order to run the application you must issue `yarn run dev:react` first and
then, in a separate terminal window run `yarn run dev:tauri`.

> This approach will be improved in the future to make use of a single command.

## License

This is a template repository so no License is included, make sure you add your
license when using it for a real project
