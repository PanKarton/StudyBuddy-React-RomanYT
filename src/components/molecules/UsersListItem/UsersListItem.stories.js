import UsersListItem from './UsersListItem';

export default {
  title: 'Components/Molecules/UsersListItem',
  component: UsersListItem,
  argTypes: {
    userData: {
      control: 'object',
    },
  },
};

const Template = (args) => <UsersListItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  userData: {
    name: 'Default',
    average: '6',
    attendance: '100%',
  },
};

export const GreenGrade = Template.bind({});
GreenGrade.args = {
  userData: {
    name: 'Miriamcia geniusz',
    average: '6',
    attendance: '100%',
  },
};

export const RedGrade = Template.bind({});
RedGrade.args = {
  userData: {
    name: 'Aru Debil',
    average: '2.3',
    attendance: '100%',
  },
};

export const YellowGrade = Template.bind({});
YellowGrade.args = {
  userData: {
    name: 'Adam Małysz',
    average: '3.5',
    attendance: '100%',
  },
};
