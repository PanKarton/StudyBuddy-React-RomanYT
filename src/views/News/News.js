import React, { useEffect, useState } from 'react';
import NewsArticle from 'components/organisms/NewsArticle/NewsArticle';
import { ArticlesWrapper, StyledHeader, StyledWrapper } from './News.styles';
import axios from 'axios';

const News = (props) => {
  const [articles, setAcricles] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    axios({
      url: 'https://graphql.datocms.com/',
      method: 'post',
      headers: {
        authorization: `Bearer ${process.env.REACT_APP_DATOCMS_TOKEN}`,
      },
      data: {
        query: `
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
          `,
      },
    })
      .then(
        ({
          data: {
            data: { allArticles },
          },
        }) => {
          setAcricles(allArticles);
        },
      )
      .catch((err) => {
        console.log(err);
        setError(`Couldn't load articles.`);
      });
  }, []);

  return (
    <StyledWrapper>
      <StyledHeader>University news feed</StyledHeader>
      {articles.length > 0 ? (
        <ArticlesWrapper>
          {articles.map((article) => {
            return <NewsArticle key={article.id} article={article} />;
          })}
        </ArticlesWrapper>
      ) : (
        <p>{error ? error : 'Loading...'}</p>
      )}
    </StyledWrapper>
  );
};

News.propTypes = {};

export default News;
