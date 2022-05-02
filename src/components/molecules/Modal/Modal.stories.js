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

{
  /* <StudentInfoModal
isCloseButtonNeeded
student={{
  id: '19',
  name: 'Miriamcia Łagód',
  attendance: '100%',
  average: '6',
  course: 'Inżynier społeczny w 30 dni',
  subjectsGrades: [
    {
      subject: 'Majma i sen',
      grade: '5',
    },
    {
      subject: 'Historia spułczesna',
      grade: '3.5',
    },
    {
      subject: 'Astrologia i minerały',
      grade: '2.5',
    },
  ],
}}
/> */
}
