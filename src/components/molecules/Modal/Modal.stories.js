import StudentInfoModal from 'components/organisms/StudentInfoModal/StudentInfoModal';
import Modal from './Modal';

export default {
  title: 'Components/Molecules/Modal',
  component: Modal,
};

const Template = (args) => (
  <Modal {...args}>
    <p>aasdasdasd</p>
  </Modal>
);

export const Defauls = Template.bind({});
