import React, { useContext, useReducer } from 'react';
import { ViewWrapper } from 'components/atoms/ViewWrapper/ViewWrapper';
import UserValueInput from 'components/molecules/UserValueInput/UserValueInput';
import { Button } from 'components/atoms/Button/Button';
import { StyledTitle } from 'components/atoms/Title/Title';
import { UsersContext } from 'providers/UsersProvider';

const initialFormState = {
  name: '',
  attendance: '',
  average: '',
  consent: false,
  errMessage: '',
};

const actionTypes = {
  inputChange: 'INPUT CHANGE',
  inputClear: 'INPUT CLEAR',
  toggleConsent: 'TOGGLE CONSENT',
  updateErrorMessage: 'ERROR UPDATE',
};

const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.inputChange:
      return {
        ...state,
        [action.field]: action.value,
      };
    case actionTypes.inputClear:
      return initialFormState;
    case actionTypes.toggleConsent:
      return {
        ...state,
        consent: !state.consent,
      };
    case actionTypes.updateErrorMessage:
      return {
        ...state,
        errMessage: action.err,
      };
    default:
      break;
  }
};

const AddUser = () => {
  const [formValues, dispatch] = useReducer(reducer, initialFormState);
  const { name, attendance, average } = formValues;
  const context = useContext(UsersContext);

  const handleInputChange = (e) => {
    dispatch({ type: 'INPUT CHANGE', field: e.target.name, value: e.target.value });
  };

  const handleSubmitUser = (e) => {
    e.preventDefault();
    if (formValues) if (!formValues.consent) return dispatch({ type: 'ERROR UPDATE', err: 'Cannot add student without terms consent' });
    context.addUser(formValues);
    dispatch({ type: 'INPUT CLEAR' });
  };

  return (
    <ViewWrapper as="form" onSubmit={handleSubmitUser}>
      <StyledTitle>Add student</StyledTitle>
      <UserValueInput label="Name" id="name" name="name" value={name} handleInputChange={handleInputChange} />
      <UserValueInput label="Attendance" id="attendance" name="attendance" value={attendance} handleInputChange={handleInputChange} />
      <UserValueInput label="Average" id="average" name="average" value={average} handleInputChange={handleInputChange} />
      <UserValueInput label="Terms consent" id="consent" name="consent" type="checkbox" checked={formValues.consent} handleInputChange={() => dispatch({ type: 'TOGGLE CONSENT' })} />
      {formValues.errMessage ? <p>{formValues.errMessage}</p> : null}
      <Button type="submit">Add</Button>
    </ViewWrapper>
  );
};

export default AddUser;
