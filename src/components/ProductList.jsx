import ProductCard from "./ProductCard"

const products = [
  { name: "Barcelona Jersey", price: 90, image: "/assets/barca.jpg" },
  { name: "Real Madrid Jersey", price: 95, image: "/assets/madrid.jpg" },
  { name: "Man United Jersey", price: 88, image: "/assets/united.jpg" },
  { name: "PSG Jersey", price: 92, image: "/assets/psg.jpg" },
]

const ProductList = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 p-10">
      {products.map((item, index) => (
        <ProductCard
          key={index}
          name={item.name}
          price={item.price}
          image={item.image}
        />
      ))}
    </div>
  )
}

export default ProductList