import StudentInfoModal from 'components/organisms/StudentInfoModal/StudentInfoModal';
import Modal from './Modal';

export default {
  title: 'Components/Molecules/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <StudentInfoModal
      isCloseButtonNeeded
      student={{
        id: '19',
        name: 'Miriamcia Łagód',
        attendance: '100%',
        average: '6',
        group: 'D',
      }}
    />
  </Modal>
);

export const Defauls = Template.bind({});
