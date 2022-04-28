import React from 'react';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';
import News from './News';
import { render, screen } from 'test-utils';

const mock = new MockAdapter(axios, { onNoMatch: 'throwException' });

const query = `
{
  allArticles {
    id
    title
    category
    content
    image{
      alt
      url
    }
  }
}
`;

describe('News Section', () => {
  afterEach(() => {
    mock.reset();
  });

  it('Displays error when articles are not loaded corectly', async () => {
    mock.onPost('https://graphql.datocms.com/', { query }).reply(500);
    render(<News />);
    await screen.findByText(/Sorry/);
  });
});
