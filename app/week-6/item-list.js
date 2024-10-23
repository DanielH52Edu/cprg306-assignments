"use client";
import {useEffect, useState} from "react";
import Item from "@/app/week-3/item";
import {sort} from "next/dist/build/webpack/loaders/css-loader/src/utils";

export default function ItemList () {
    const [sortBy, setSortBy] = useState("name");
    const [items, setItems] = useState([]);


    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch('items.json');
                const data = await response.json();
                setItems(data);
            } catch (error) {
                console.error('Fetch error:', error);
            }
        }

        fetchItems();
    }, []);

    items.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

    return <section className="ml-4">
        <button onClick={() => setSortBy("name")} className="bg-orange-400 active:bg-orange-300 w-fit px-3 py-1 mx-2">Name</button>
        <button onClick={() => setSortBy("category")} className="bg-orange-400 active:bg-orange-300 w-fit px-3 py-1 mx-2">Category</button>

        <div className="flex flex-col gap-2">
            {items.map((item, index) => (
                <Item key={index} name={item.name} category={item.category} quantity={item.quantity}/>
        ))}
        </div>
    </section>
}