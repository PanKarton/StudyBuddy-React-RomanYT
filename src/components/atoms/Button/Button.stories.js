import { Button } from './Button';

export default {
  title: 'Components/Atoms/Button',
  component: Button,
};

const Template = (args) => <Button {...args}>Click me</Button>;

export const Defauls = Template.bind({});
Defauls.args = {
  isBig: false,
};

export const Big = Template.bind({});
Big.args = {
  isBig: true,
};
