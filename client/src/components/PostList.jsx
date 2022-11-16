import { List, Datagrid, TextField, DateField, EditButton, DeleteButton
} from 'react-admin'


const PostList = (props) => {
    return (
        <List {...props}> 
            <Datagrid>
                <TextField source='id' label='ID'/>
                <TextField source='title' />
                <DateField source='publishedAt' label='Published At' />
                <EditButton basePath='/posts' />
                <DeleteButton basePath='/posts' />
            </Datagrid>
        </List>
    )
}

export default PostList