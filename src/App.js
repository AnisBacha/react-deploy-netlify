import Header from './Header'
import Content from './Content';
import Footer from './Footer';
import {useState} from 'react'
import AddItem from './AddItem';
import SearchItem from './SearchItem';

function App() {
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('ListItems')));
  const [newItem, setNewItem] = useState('');
  const[search, setSearch] = useState('');


  const setAndSaveList = (ItemsList) => {
    setItems(ItemsList);
    localStorage.setItem('ListItems' , JSON.stringify(ItemsList));
  } 
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = {id , checked: false, item};
    const listItems = [...items, myNewItem];
    setAndSaveList(listItems);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if(!newItem) return;
    addItem(newItem);
    setNewItem('');
  }

  const handleCheck = (id) => {
      const listItems = items.map((item) => item.id === id? {...item, checked: !item.checked} : item)
      setAndSaveList(listItems);
  }
  const handleDelete = (id) => {
      const listItems = items.filter( (item) => item.id !== id);
      setAndSaveList(listItems);
  }
  return (
    <div className="App">
      <Header title='To-do List' />
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit} />
      <SearchItem search={search} setSearch={setSearch} />
      <Content 
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck} 
        handleDelete={handleDelete} />
      <Footer length={items.length}/>
    </div>
  );
}

export default App;
