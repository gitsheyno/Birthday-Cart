import React from 'react'

const ListItem = ({ item }) => {
    return (
        <li>
            <div className="img">
                <img src={item.image} alt="" />
            </div>
            <div className='list'>
                <h4>{item.name}</h4>
                <p>{item.age} years</p>
            </div>

        </li>
    )
}

export default ListItem
