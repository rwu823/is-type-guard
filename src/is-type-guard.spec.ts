import is from './index'

describe('is-type-guard Spec', () => {
  it('is.string', () => {
    const o = 'is-type-guard'
    expect(is.string(o)).toBe(typeof o === 'string')
  })

  it('is.number', () => {
    const o = 17
    expect(is.number(o)).toBe(typeof o === 'number')
  })

  it('is.null', () => {
    const o = null
    expect(is.null(o)).toBe(o === null)
  })

  it('is.undefined', () => {
    const o = undefined
    expect(is.undefined(o)).toBe(typeof o === 'undefined')
  })

  it('is.array', () => {
    const o: any[] = []
    expect(is.array(o)).toBe(Array.isArray(o))
  })

  it('is.object', () => {
    const o = {}
    expect(is.object(o)).toBe(typeof o === 'object')
  })

  it('is.function', () => {
    const o = () => {}
    expect(is.function(o)).toBe(typeof o === 'function')
  })

  it('is.function', () => {
    const o = process
    expect(is.process(o)).toBe(true)
  })
})
