import React, {useState, useEffect} from 'react'
import Slider from '../components/Slider';
import ProductFilter from '../components/ProductFilter';
import ProductList from '../components/ProductList';
import { Row, Col } from 'reactstrap';

export default function Main() {
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("Tümü");
  const handleCategoryChange = (newCategory) =>
  {
    setCategory(newCategory);
    if (newCategory === "Tümü")
    {
      fetch('http://localhost:3001/api/get').then(response => response.json()).then(data => {setProducts(data);}).catch(error => {console.error(error)});
    }
    else
    {
      fetch(`http://localhost:3001/api/get/category=${newCategory}`).then(response => response.json()).then(data => {setProducts(data);}).catch(error => {console.error(error)});
    }
  }
  useEffect(() => {
    if (category === "Tümü")
    {
      fetch('http://localhost:3001/api/get').then(response => response.json()).then(data => {setProducts(data);}).catch(error => {console.error(error)});
    }
    // fetch('http://localhost:3001/api/get').then(response => response.json()).then(data => {setProducts(data);}).catch(error => {console.error(error)});
  },[]);
  return (
    <div>
        <Slider/>
        {/* <ProductFilter/>
        <ProductList/> */}
        <Row>
            <Col xs="6" sm="5" md="4" lg="3" xl="2"><ProductFilter category={category} setCategory={handleCategoryChange}/></Col>
            <Col><ProductList products={products}/></Col>
        </Row>
    </div>
  )
}
