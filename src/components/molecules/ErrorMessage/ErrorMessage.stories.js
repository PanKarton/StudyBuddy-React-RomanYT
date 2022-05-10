import ErrorMessage from './ErrorMessage';

const baseMessage = 'Program failed, try something else or cry.';

export default {
  title: 'Components/Molecules/ErrorMessage',
  component: ErrorMessage,
};

const Template = (args) => <ErrorMessage {...args} />;

export const Default = Template.bind({});
Default.args = {
  message: baseMessage,
};
