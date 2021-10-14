import React from 'react';
import InputStyle from '../../shareComponents/InputStyle';
import style from './style.scss';
InputField.propTypes = {};

function InputField(props) {
     return (
          <div className='input-field'>
               <InputStyle id='input1' focus='true' hover='true' />
               <InputStyle errors='true' hover='true' />
               <InputStyle disabled='true' />
               <InputStyle helperText='Some interesting text' />
               <InputStyle errors='true' helperText='Some interesting text' />
               <InputStyle startIcon='true' />
               <InputStyle endIcon='true' />
               <InputStyle value='Text' />
               <InputStyle size='sm' />
               <InputStyle size='md' />
               <InputStyle fullWidth='true' />
               <InputStyle multiline='row:4' />
          </div>
     );
}

export default InputField;
