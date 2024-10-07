"use client"

import {useState} from "react";

export default function NewItem () {
    const [quantity, setQuantity] = useState(1);

    const increment = () => { setQuantity(quantity + 1); };
    const decrement = () => { setQuantity(quantity - 1); };

    return <section className="bg-white flex items-center text-white font-bold p-1 w-min">
        <div className="text-black w-14">{quantity}</div>
        <button
            className="mr-1 border-2 px-4 rounded-lg text-center leading-relaxed
            bg-blue-500 hover:bg-blue-600 focus:border-blue-400 disabled:bg-gray-400"
            onClick={decrement}
            disabled={quantity === 1}>-</button>
        <button
            className="border-2 px-4 rounded-lg text-center leading-relaxed
            bg-blue-500 hover:bg-blue-600 focus:border-blue-400 disabled:bg-gray-400"
            onClick={increment}
            disabled={quantity === 20}>+</button>
    </section>
}