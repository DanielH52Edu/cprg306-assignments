export default function Item ({ name, quantity, category }) {
    return <section className="bg-gray-900 w-96 rounded-xl p-2">
        <h1 className="text-xl font-bold">{name}</h1>
        <p className="text-sm">Buy {quantity} in {category}</p>
    </section>
}