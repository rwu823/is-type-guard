import isType, { ofType } from '../out'

const is = {
  ...isType,
  date: (o: any): o is Date => ofType(o, 'Date'),
  body: (o: any): o is HTMLBodyElement => ofType(o, 'HTMLBodyElement'),
}

is
