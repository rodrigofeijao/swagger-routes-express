const { expect } = require('chai')

const connectSecurity = require('src/connector/connectSecurity')

describe('src/connector/connectSecurity', () => {
  context('given no security', () => {
    it('returns undefined', () => {
      expect(connectSecurity(undefined, {})).to.be.undefined
    })
  })

  context('given out of scope security', () => {
    it('returns undefined', () => {
      expect(connectSecurity('test', {})).to.be.undefined
    })
  })

  context('given in-scope security', () => {
    context('in scopes', () => {
      const scopes = { test: () => {} }

      it('returns the correct middleware', () => {
        expect(connectSecurity('test', { scopes })).to.equal(scopes.test)
      })
    })

    context('in security', () => {
      const security = { test: () => {} }

      it('returns the correct middleware', () => {
        expect(connectSecurity('test', { security })).to.equal(security.test)
      })
    })
  })
})
