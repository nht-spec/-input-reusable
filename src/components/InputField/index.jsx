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
               <InputStyle
                    focus='true'
                    hover='true'
                    helperText='Some interesting text'
               />
               <InputStyle
                    errors='true'
                    hover='true'
                    helperText='Some interesting text'
               />
               <InputStyle focus='true' hover='true' startIcon='true' />
               <InputStyle focus='true' hover='true' endIcon='true' />
               <InputStyle focus='true' hover='true' value='Text' />
               <InputStyle focus='true' hover='true' size='sm' />
               <InputStyle focus='true' hover='true' size='md' />
               <InputStyle focus='true' hover='true' fullWidth='true' />
               <InputStyle focus='true' hover='true' multiline='row:4' />
          </div>
     );
}

export default InputField;
