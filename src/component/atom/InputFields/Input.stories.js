import {React} from 'react';
import FormInputField from './FormInputField'
import SearchInputField from './SearchInputField'

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

const SearchTemplate = args => (<div>
                            <SearchInputField {...args} />
                        </div>)

export const TextFieldWithIcon = SearchTemplate.bind({})
TextFieldWithIcon.args = {
    placeholder: "Search by Author or Title",
}
