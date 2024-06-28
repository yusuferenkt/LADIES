import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { Container, Row } from 'reactstrap';

export default function Search(props) {
    const {keyword} = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:3001/api/get/keyword=${keyword}`).then(response => response.json()).then(data => {setProducts(data);}).catch(error => {console.error(error)});
    }, []);
  return (
    <div>
        <h1>{keyword} için arama sonuçları</h1>
        <Container fluid>
          <ProductList  products={products}/>
        </Container>
        
    </div>
  )
}
