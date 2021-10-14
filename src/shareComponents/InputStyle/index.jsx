import * as React from 'react';
import style from './style.scss';
import PhoneIcon from '@mui/icons-material/Phone';
import HttpsRoundedIcon from '@mui/icons-material/HttpsRounded';
function InputStyle({
     id,
     value,
     hover,
     disabled,
     errors,
     focus,
     helperText,
     startIcon,
     endIcon,
     size,
     fullWidth,
     multiline,
}) {
     return (
          <div className='input-control'>
               <input
                    multiline={multiline}
                    fullWidth={fullWidth}
                    sizes={size}
                    startIcon={startIcon}
                    endIcon={endIcon}
                    hover={hover}
                    focus={focus}
                    disabled={disabled}
                    error={errors}
                    value={value}
                    className='text-input'
                    type='text'
                    id={id}
                    placeholder='Placeholder'
               ></input>

               {startIcon ? <PhoneIcon className='icon-start' /> : ''}
               {endIcon ? <HttpsRoundedIcon className='icon-end' /> : ''}
               <label class='control-label' for={id}>
                    Label
               </label>
               <span error={errors} className='helper-text'>
                    {helperText}
               </span>
          </div>
     );
}

export default InputStyle;
