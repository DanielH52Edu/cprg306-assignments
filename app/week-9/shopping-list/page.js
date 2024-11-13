"use client"
import ItemList from "@/app/week-9/shopping-list/item-list";
import {useEffect, useState} from "react";
import NewItem from "@/app/week-9/shopping-list/new-item";
import MealIdeas from "@/app/week-9/shopping-list/meal-ideas";
import {useUserAuth} from "@/app/week-9/_utils/auth-context";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const { user } = useUserAuth();

    useEffect(() => {
        async function fetchItems() {
            try {
                const response = await fetch('../items.json');
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

    const selectItem = (name) => {
        const sanitizedItemName = name.replace(/[^a-zA-Z0-9 ]/g, '');
        setSelectedItem(sanitizedItemName);
    }

    if (!user) {
        return <p>Your need to be signed in to view this page.</p>;
    }

    return (
        <main className="flex flex-col w-min">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
            <div className="flex gap-8 w-max">
                <div className="flex- flex-col gap-8">
                    <NewItem handler={addItem} />
                    <ItemList items={items} onItemSelect={selectItem} />
                </div>
                <MealIdeas key={selectedItem} ingredient={selectedItem} />
            </div>
        </main>
    )
}
