"use client"
import ItemList from "@/app/week-10/shopping-list/item-list";
import {useEffect, useState} from "react";
import NewItem from "@/app/week-10/shopping-list/new-item";
import MealIdeas from "@/app/week-10/shopping-list/meal-ideas";
import {useUserAuth} from "@/app/week-10/_utils/auth-context";
import {getItems, addItem} from "@/app/week-10/_services/shopping-list-service";

export default function Page() {
    const [items, setItems] = useState([]);
    const [selectedItem, setSelectedItem] = useState("");
    const { user } = useUserAuth();

    const loadItems = async () => {
        if (user) {
            const items = await getItems(user.uid);
            setItems(items);
        }
    };

    const handleAddItem = async (item) => {
        if (user) {
            await addItem(user.uid, item);
            setItems(prevItems => [...prevItems, item]);
        }
    };


    const selectItem = (name) => {
        const sanitizedItemName = name.replace(/[^a-zA-Z0-9 ]/g, '');
        setSelectedItem(sanitizedItemName);
    }

    useEffect(() => {
        loadItems();
    }, [user]);



    if (!user) {
        return <p>Your need to be signed in to view this page.</p>;
    }

    return (
        <main className="flex flex-col w-min">
            <h1 className="text-3xl font-bold mb-6">Shopping List</h1>
            <div className="flex gap-8 w-max">
                <div className="flex- flex-col gap-8">
                    <NewItem handler={handleAddItem} />
                    <ItemList items={items} onItemSelect={selectItem} />
                </div>
                <MealIdeas key={selectedItem} ingredient={selectedItem} />
            </div>
        </main>
    )
}
