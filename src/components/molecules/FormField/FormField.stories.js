import UserValueInput from './FormField';

export default {
  title: 'Components/Molecules/UserValueInput',
  component: UserValueInput,
};

const Template = (args) => <UserValueInput {...args} name="test" id="test" />;

export const Default = Template.bind({});
Default.args = {
  label: 'Insert Value',
};
