import React, {useState} from 'react'

export default function ProductFilter(props) {
  const [activeFilter, setActiveFilter] = useState('Tümü');
  const [category, setCategory] = useState(props.category);
  const handleClick = (event) => {
    setActiveFilter(event.target.innerHTML);
    setCategory(event.target.innerHTML);
    props.setCategory(event.target.innerHTML);
    // fetch(`http://localhost:3001/api/get/${activeFilter}`).then(response => response.json()).then(data => {setProducts(data);}).catch(error => {console.error(error)});
  }

  return (
    <div className='store my-5'>
        <div className='filter__background'>
            <ul className='filter'>        
              <li className={activeFilter === 'Tümü' ? 'active' : ''} onClick={handleClick}>Tümü</li>
              <li className={activeFilter === 'Makyaj' ? 'active' : ''} onClick={handleClick}>Makyaj</li>
              <li className={activeFilter === 'Parfüm' ? 'active' : ''} onClick={handleClick}>Parfüm</li>
              <li className={activeFilter === 'Cilt Bakışı' ? 'active' : ''} onClick={handleClick}>Cilt Bakışı</li>
              <li className={activeFilter === 'Vücut ve Banyo' ? 'active' : ''} onClick={handleClick}>Vücut ve Banyo</li>
              <li className={activeFilter === 'Saç' ? 'active' : ''} onClick={handleClick}>Saç</li>
            </ul>
        </div>
    </div>
  )
}
