import React from 'react';
import PropTypes from 'prop-types';
import { Button } from 'components/atoms/Button/Button';
import { ArticleWrapper, ContentWrapper, StyledHeader } from './NewsArticle.styles';

const NewsArticle = ({ article: { title, category, content, image } }) => (
  <ArticleWrapper>
    <StyledHeader>
      <strong>{title}</strong>
    </StyledHeader>
    <p>{category}</p>
    <ContentWrapper>
      <p>{content}</p>
      <img src={image.url} alt={image.alt}></img>
    </ContentWrapper>
    <Button isBig>Read more</Button>
  </ArticleWrapper>
);

NewsArticle.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    image: PropTypes.shape({
      url: PropTypes.string,
      alt: PropTypes.string,
    }),
  }).isRequired,
};

export default NewsArticle;
