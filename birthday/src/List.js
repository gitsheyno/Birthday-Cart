
import ListItem from './ListItem'

const List = ({ person, handleDelete }) => {
    return (
        <ul>
            <p
                style={{ fontSize: '1.5rem' }}
            >{person.length} birthdays today</p>
            {person.map(item => (
                <ListItem
                    key={item.id}
                    item={item}
                />
            ))}
            <form

                onSubmit={(e) => handleDelete(e)}>
                <input
                    type="submit"
                    value='clear all'
                />
            </form>
        </ul>
    )
}

export default List
