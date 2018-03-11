import TodoItems from './TodoItems'
import { mapProps } from 'recompose'


export default mapProps(({book}) => ({
    title: book.name,
    body: `author : ${ book.author}`,
}))(TodoItems);