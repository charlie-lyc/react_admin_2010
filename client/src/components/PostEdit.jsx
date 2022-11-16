import { Edit, SimpleForm, TextInput, DateInput } from 'react-admin'


const PostEdit = (props) => {
    return (
        <Edit title='Edit a Post' {...props}>
            <SimpleForm>
                <TextInput source='id' disabled />
                <TextInput source='title' />
                <TextInput source='body' multiline />
                <DateInput source='publishedAt' label='Published At' />
            </SimpleForm>
        </Edit>
    )
}

export default PostEdit