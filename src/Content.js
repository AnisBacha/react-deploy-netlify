import ListItem from './ListItem'
const Content = ({items , handleCheck , handleDelete}) => {
    
    return (
        <main>
            {items.length ? (
                <ListItem
                items={items}
                handleCheck ={handleCheck}
                handleDelete={handleDelete}
                />
            ) : ( <p>There is no Items.</p>)
            }
            
        </main>
    )
}

export default Content
