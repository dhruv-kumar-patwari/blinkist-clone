import React from 'react';
import FormInputField from './FormInputField'

export default {
    title: "Atom/TextField",
    component: FormInputField,
}

const Template = args => (<div>
                            <FormInputField {...args} />
                        </div>)

export const PlainTextField = Template.bind({})
PlainTextField.args = {
    id: "standard-number",
    type: "text",
    size: 'medium',
    placeholder: 'Book Name',
    labelText: 'Book Name'
}

// export const TextFieldWithIcon = Template.bind({})
// TextFieldWithIcon.args = {
//     placeholder: "TextField",
//     InputProps: {
//         endAdornment: (
//         <InputAdornment position="start">
//             <CloseIcon />
//         </InputAdornment>
//         ),
//     },
//     error: true,
// }
