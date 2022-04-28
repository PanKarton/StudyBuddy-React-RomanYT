import News from 'views/News/News';
import NewsArticle from './NewsArticle';

export default {
  title: 'Components/Organisms/NewsArticle',
  component: NewsArticle,
};

const mockArticle = {
  title: 'WITAM DZIEN DOBRY',
  category: 'Sport',
  content:
    'LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM LOREM ',
  image: {
    url: 'https://i.imgur.com/IpzC1ek.jpeg',
    alt: 'czesc',
  },
};

const Template = (args) => <NewsArticle {...args} />;

export const Default = Template.bind({});
Default.args = {
  article: mockArticle,
};
