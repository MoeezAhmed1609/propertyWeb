import React, { useState } from "react";
import IntlTelInput from "react-intl-tel-input";
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';


export default function PhoneComponent({
  onChange,
  defaultCountry,
  onPhoneNumberChange,
  containerClassName,
  inputClassName,
  value, setValue
}) {
  // const [open, setOpen] = useState(false)
  return (
    <div style={{ position: 'relative' }} >
      <KeyboardArrowDownIcon sx={{ position: 'absolute', top: '37%', left: '0', zIndex: 9 }} />
      <div
      // onClick={() => setOpen(!open)}
      >
        <IntlTelInput
          containerClassName={containerClassName}
          inputClassName={inputClassName}
          onChange={onChange}
          defaultCountry={defaultCountry}
          onPhoneNumberChange={onPhoneNumberChange}
          onSelectFlag={(data, t1, t2) => {
            setValue(t1.dialCode)
          }}
          value={value}
        />
      </div>
    </div>
  );
}
