import ErrorMessage from './ErrorMessage';

export default {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {};
