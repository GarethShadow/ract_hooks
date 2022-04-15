import React, {useEffect, useState} from "react";

function ItemsList({getItems}) {

    const [items, setItems] = useState([]);

    useEffect(() => {
        console.log("render")
        const newItems = getItems();
        setItems(newItems);
    }, [getItems]);

    return (
        <ul>
            {items.map(i => <li key={i}>{i}</li>)}
        </ul>
    );
}

export default ItemsList;