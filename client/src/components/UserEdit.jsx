import { Edit, SimpleForm, TextInput, PasswordInput } from 'react-admin'


const UserEdit = (props) => {
    return (
        <Edit title='Edit a User' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='name' />
                <TextInput source='email' disabled />
                <PasswordInput source='password' />
            </SimpleForm>
        </Edit>
    )
}

export default UserEdit