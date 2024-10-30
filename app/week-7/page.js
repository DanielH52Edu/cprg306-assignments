"use client"
import ItemList from "@/app/week-7/item-list";
import {useEffect, useState} from "react";
import NewItem from "@/app/week-7/new-item";
import {log} from "next/dist/server/typescript/utils";

export default function Page() {
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


    const addItem = (item) => {
        setItems(prevItems => [...prevItems, item]);
    }

    return (
        <main className="flex flex-col w-min">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
            <div className="flex flex-col gap-8">
                <NewItem handler={addItem} />
                <ItemList items={items} />
            </div>
        </main>
    )
}
