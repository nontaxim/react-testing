// src/mocks/handlers.js
import { http, HttpResponse } from 'msw'

export const handlers = [
  // Intercept "GET https://example.com/user" requests...
  http.get('https://jsonplaceholder.typicode.com/users', () => {
    // ...and respond to them using this JSON response.
    return HttpResponse.json(
      [{ name: 'John' }, { name: 'Doe' }, { name: 'Smith' }, { name: 'Brown' }],
      {
        status: 200,
      },
    )
  }),
]
