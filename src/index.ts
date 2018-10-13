export type TypeIs<T> = (o: any) => o is T

const ofType = (o: any, type: string) =>
  `[object ${type}]` === Object.prototype.toString.call(o)

const is = {
  string: (o: any): o is string => ofType(o, 'String'),
  function: (o: any): o is Function => ofType(o, 'Function'),
  object: (o: any): o is object => ofType(o, 'Object'),
  array: (o: any): o is any[] => ofType(o, 'Array'),
  number: (o: any): o is number => ofType(o, 'Number'),
  null: (o: any): o is null => ofType(o, 'Null'),
  undefined: (o: any): o is undefined => ofType(o, 'Undefined'),
  document: (o: any): o is HTMLDocument => ofType(o, 'HTMLDocument'),
  process: (o: any): o is NodeJS.Process => ofType(o, 'process'),
}

export default is

export { ofType }
