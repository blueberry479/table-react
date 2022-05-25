import React from "react";
import './Table.css'

function Table(props) {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th className="head_block" onClick={() => props.onSort('id')}>ID {props.sort === 'asc' && props.sortField === 'id'? '▲' : (props.sort === 'desc' && props.sortField === 'id'? '▼' : null)}</th>
                    <th className="head_block"  onClick={() => props.onSort('fname')}>First Name {props.sort === 'asc' && props.sortField === 'fname'? '▲' : (props.sort === 'desc' && props.sortField === 'fname'? '▼' : null)}</th>
                    <th className="head_block"  onClick={() => props.onSort('lname')}>Last Name {props.sort === 'asc' && props.sortField === 'lname'? '▲' : (props.sort === 'desc' && props.sortField === 'lname'? '▼' : null)}</th>
                    <th className="head_block"  onClick={() => props.onSort('email')}>Email {props.sort === 'asc' && props.sortField === 'email'? '▲' : (props.sort === 'desc' && props.sortField === 'email'? '▼' : null)}</th>
                    <th className="head_block"  onClick={() => props.onSort('phone')}>Phone {props.sort === 'asc' && props.sortField === 'phone'? '▲' : (props.sort === 'desc' && props.sortField === 'phone'? '▼' : null)}</th>
                </tr>
            </thead>
            <tbody>
                {Array.from(props.data).map((item) => (
                    <tr key={item.id + item.phone[1]} onClick = {() => props.selectedItem(item)} className='item_block'>
                        <td>{item.id}</td>
                        <td>{item.fname}</td>
                        <td>{item.lname}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                    </tr>
                ))}
                {console.log(props.data)}
                
            </tbody>
        </table>
    );
}

export default Table;