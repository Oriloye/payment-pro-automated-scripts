import 'cypress-xpath'
import './commands'

// Ignore ResizeObserver error
Cypress.on('uncaught:exception', (err) => {
  if (
    err.message.includes(
      'ResizeObserver loop completed with undelivered notifications'
    )
  ) {
    return false
  }
})
