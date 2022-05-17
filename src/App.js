import './App.css';
import { useEffect, useState } from 'react';
import Table from './Table/Table';
import _ from 'lodash';
import UserDetail from './UserDetail/UserDetail';
import Pagination from './Pagination/Pagination';
import TableSearch from './Search/Search';

function App() {
    const [data,setData] = useState({});
    const [sort, setSort] = useState('asc');
    const [sortField, setsortField] = useState('id');
    const [item, setItem] = useState('');
    const [isClicked, setIsClicked] = useState(false);
    const [currentPage, setcurrentPage] = useState(1);
    const [itemsPerPage, setitemsPerPage] = useState(10);
    const [search, setSearch] = useState('');
    const lastItemIndex = currentPage * itemsPerPage;
    const firstItemIndex = lastItemIndex - itemsPerPage;
    const [dataSize] = useState(30);
  useEffect(
      () => {
        fetch(`http://filltext.com/?rows=${dataSize}&id={number|1000}&fname={firstName}&lname={lastName}&pretty=true&email={email}&phone={phone|(xxx) xxx-xx-xx}&streetAddress={streetAddress}&city={city}&company={business}&state={usState|abbr}`)
            .then(response => response.json())
            .then(responce => setData(responce));
      }, []
    );
    const searchHandler = search => {
        setSearch(search);
        setcurrentPage(1);
        if (!search) {setitemsPerPage(10);}
        else setitemsPerPage(30);
    }
    const getFilteredData = () => {
        if (!search){
            return data;
        }

        return data.filter(item => {
            return item['fname'].toLowerCase().includes(search.toLocaleLowerCase())
                ||  item['lname'].toLowerCase().includes(search.toLocaleLowerCase())
                ||  item['email'].toLowerCase().includes(search.toLocaleLowerCase())
                ||  item['phone'].toLowerCase().includes(search.toLocaleLowerCase())
        })
    }
    const filteredData = getFilteredData();
    const onSort = (sortField) => {
        const clonedData = data;
        const sortType = sort === 'asc'? 'desc' : 'asc';
        const orderedData = _.orderBy(clonedData, sortField, sortType);
        setData(orderedData);
        setSort(sortType);
        setsortField(sortField);
    }
    const selectedItem = (item) => {
        setItem(item);
        setIsClicked(true);
    }
    const paginate = (pageNumber) => {setcurrentPage(pageNumber)};
    const currentItem = Array.from(filteredData).slice(firstItemIndex, lastItemIndex);
  return (
    <div className="container">
        {data && <>
            <TableSearch onSearch={searchHandler}/>
            <Table data={currentItem} sort={sort} onSort={onSort} sortField={sortField} selectedItem={selectedItem}/>
        </>}
        <Pagination paginate={paginate} itemsPerPage={itemsPerPage} totalItems={data.length}/>
        {isClicked && <UserDetail item={item}/>}
    </div>
  );
}

export default App;
