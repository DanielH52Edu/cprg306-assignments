"use client";
import {useState} from "react";
import Item from "@/app/week-7/item";

export default function ItemList ({ items }) {
    const [sortBy, setSortBy] = useState("name");

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