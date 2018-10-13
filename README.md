<h1 align="center">
  is-type-guard
</h1>
<p align="center">
  <a href="https://www.npmjs.com/package/is-type-guard">
    <img src="https://flat.badgen.net/npm/v/is-type-guard" />
  </a>
  <a href="https://circleci.com/gh/rwu823/is-type-guard" alt="Build Status">
    <img src="https://flat.badgen.net/circleci/github/rwu823/is-type-guard/master" />
  </a>
  <a href="https://codecov.io/gh/rwu823/is-type-guard" alt="Coverage">
    <img src="https://flat.badgen.net/codecov/c/github/rwu823/is-type-guard" />
  </a>
  <img src="https://flat.badgen.net/github/license/rwu823/is-type-guard" />
</p>

## Why
In TypeScript you can only use `typeof` or `instanceof` as types checking. It gets a little bit trouble if you want to check a plain object.

e.g.

```ts
([]) instanceof Object // true
({}) instanceof Object // true

typeof [] === 'object' //true
typeof {} === 'object' //true
```

## Installation

```sh
$ yarn add is-type-guard
```

## Usage

```ts
import is from 'is-type-guard'

const foo = 'bar'
if(is.string(foo)) {

}
```

## API

### is.string
### is.function
### is.object
### is.array
### is.number
### is.null
### is.undefined
### is.document
### is.process

## ofType
It's based on `Object.prototype.toString`

## Custom types
Easy to extend as your custom types guard.

```ts
import isType, { ofType } from './is-type-guard'

const is = {
  ...isType,
  date: (o: any): o is Date => ofType(o, 'Date'),
  body: (o: any): o is HTMLBodyElement => ofType(o, 'HTMLBodyElement'),
}
```
