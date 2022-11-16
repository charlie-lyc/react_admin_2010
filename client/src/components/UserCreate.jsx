import { Create, SimpleForm, TextInput, PasswordInput } from 'react-admin'


const UserCreate = (props) => {
    return (
        <Create title='Create a User' {...props}>
            <SimpleForm>
                <TextInput source='name' />
                <TextInput source='email' />
                <PasswordInput source='password' />
            </SimpleForm>
        </Create>
    )
}

export default UserCreate