export default function Item ({ name, quantity, category, onSelect }) {
    return <section className="bg-gray-900 w-96 rounded-xl p-2 hover:bg-gray-800 active:bg-gray-700" onClick={() => onSelect(name)}>
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </section>
}