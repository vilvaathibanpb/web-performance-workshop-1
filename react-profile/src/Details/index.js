import React, { useEffect, useState } from 'react';
import Product from '../Product';

const Details = () => {
    const [count, setCount] = useState(0)
    useEffect(() => {
        if(count < 10) {
            setCount(count + 1)
        }
    })
    return (
        <div>
            <Product product={{
                id: 115,
                description: "Thius is mock desc",
                category: "test",
                price: "234",
                title: "New Product",
                image: "test"
            }} />
            {count}
            <button onClick={() => setCount(count + 1)}>Increase</button>
            <img src="https://images.unsplash.com/39/lIZrwvbeRuuzqOoWJUEn_Photoaday_CSD%20(1%20of%201)-5.jpg?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1650&q=80" />
        </div>
    )
}

export default Details