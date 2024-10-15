"use client"

import {useState} from "react";

export default function NewItem () {
    const [name, setName] = useState("");
    const [category, setCategory] = useState("produce");
    const [quantity, setQuantity] = useState(1);

    const increment = () => { setQuantity(quantity + 1); };
    const decrement = () => { setQuantity(quantity - 1); };

    const formSubmit = (event) => {
        event.preventDefault();

        let item = {
            name: name,
            quantity: quantity,
            category: category,
        }

        console.log(item)

        alert("Name: " + item.name + "\nQuantity: " + item.quantity + "\nCategory: " + item.category);
        setCategory("produce");
        setQuantity(1);
        setName("");
    }

    return <section className="">
        <form className="flex flex-col gap-3" onSubmit={formSubmit}>
            <input type="text" name="name" placeholder="Item Name"
                   value={name} onChange={(e) => setName(e.target.value)}
                   required
                   className="border-2 border-black text-black px-2 py-1 rounded-lg "/>

            <div className="flex justify-between gap-5">
                <section className="bg-white flex items-center text-white font-bold p-1 w-min">
                    <div className="text-black w-14" >{ quantity }</div>
                    <input type={"button"}
                           className="mr-1 border-2 px-4 rounded-lg text-center leading-relaxed
            bg-blue-500 hover:bg-blue-600 focus:border-blue-400 disabled:bg-gray-400"
                           onClick={decrement}
                           disabled={quantity === 1} value={"-"}/>
                    <input type={"button"}
                           className="border-2 px-4 rounded-lg text-center leading-relaxed
            bg-blue-500 hover:bg-blue-600 focus:border-blue-400 disabled:bg-gray-400"
                           onClick={increment}
                           disabled={quantity === 20} value={"+"}/>
                </section>

                <select className="text-black px-3 rounded-lg"
                    value={category} onChange={(e) => setCategory(e.target.value)}>

                    <option value={"category"} disabled>Category</option>
                    <option value={"produce"}>Produce</option>
                    <option value={"dairy"}>Dairy</option>
                    <option value={"bakery"}>Bakery</option>
                    <option value={"meat"}>Meat</option>
                    <option value={"frozen foods"}>Frozen Foods</option>
                    <option value={"canned goods"}>Canned Goods</option>
                    <option value={"dry goods"}>Dry Goods</option>
                    <option value={"beverages"}>Beverages</option>
                    <option value={"snacks"}>Snacks</option>
                    <option value={"household"}>Household</option>
                    <option value={"other"}>Other</option>
                </select>

            </div>


            <input type={"submit"} value="+"
                   className="mr-1 border-2 border-transparent px-4 rounded-lg text-center leading-relaxed
            bg-blue-500 hover:bg-blue-600 focus:border-blue-400 disabled:bg-gray-400" />

        </form>
    </section>
}
