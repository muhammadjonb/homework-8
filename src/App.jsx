import {useState, useEffect} from 'react'
import Header from './components/header/Header';
import Main from './components/main/Main';

const url = "https://dummyjson.com/products";
const App = () => {
  const [products, setProducts] = useState([]);

  async function fetchUrl(){
    try {
      const res = await fetch(url)
      const data = await res.json()
      const product = data.products
      setProducts(product);
      console.log(product);
    } catch (error) {
      console.log(error);      
    }
  }

  useEffect(() => {
    fetchUrl();
  }, []);

  return (
    <>
      <Header />
      <Main products={products} />
    </>
  );
}

export default App