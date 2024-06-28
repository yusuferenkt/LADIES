import React, {useState, useEffect} from 'react'
import ProductCard from './ProductCard'
import {Container, Row, Col} from 'reactstrap';

export default function ProductList(props) {
  const [products, setProducts] = useState(props.products);
  useEffect(() => {
    setProducts(props.products);
  },[]);
  return (
    <Row>
        {props.products.map((product,index) => (
            <Col xs="12" sm="6" md="4" lg="4" xl="3">
                <ProductCard key={index} product={product}/>
            </Col>
        ))}
        
    </Row>
  )
}
