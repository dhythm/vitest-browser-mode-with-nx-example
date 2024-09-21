# Vitest Browser Mode x Nx x Yarn

## Installation

```sh
npx create-nx-workspace@17.2.8 --pm yarn                                       ✔  17:20:05

✔ Where would you like to create your workspace? · vitest-browser-mode-with-nx-example
✔ Which stack do you want to use? · react
✔ What framework would you like to use? · none
✔ Integrated monorepo, or standalone project? · integrated
✔ Application name · something
✔ Which bundler would you like to use? · vite
✔ Test runner to use for end to end (E2E) tests · playwright
✔ Default stylesheet format · css
✔ Enable distributed caching to make your CI faster · Yes
```

## Create a library

```sh
yarn nx generate @nx/react:library foo

✔ What unit test runner should be used? · vitest
✔ Which bundler would you like to use to build the library? Choose 'none' to skip build setup. · vite
✔ What should be the project name and where should it be generated? · foo @ libs/foo
```

## Run tests

```sh
yarn nx run foo:test
```
