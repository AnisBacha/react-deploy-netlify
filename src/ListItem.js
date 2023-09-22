import LineItem from './LineItem';

const ListItem = ({items , handleCheck , handleDelete}) => {
    return (
        <ul>
            {items.map( (item) => (
                <LineItem
                    item={item}
                    handleCheck={handleCheck}
                    handleDelete={handleDelete}
                    key={item.id}
                />
            ))
            }
        </ul>
    )
}

export default ListItem
