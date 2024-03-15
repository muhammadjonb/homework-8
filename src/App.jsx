import {useState, useEffect} from 'react'

const url = "https://dummyjson.com/products";
const App = () => {
  const [products, setProducts] = useState([]);

  async function fetchUrl(){
    try {
      const res = await fetch(url)
      const data = await res.json()
      setProducts(data.products);
      console.log(data.products);
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <div>
      {products.map((product) => (
        <div key={product.id}>
          <h2>{product.title}</h2>
          <p>${product.price}</p>
        </div>
      ))}
    </div>
  )
}

export default App