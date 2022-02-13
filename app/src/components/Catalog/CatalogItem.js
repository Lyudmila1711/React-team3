import React from "react";
import { Link, useParams } from 'react-router-dom';
import { toys } from '../../data';
import '../../styles/CatalogItem.css'

export default function CatalogItem() {

    const {id} = useParams();

    return (
        <div className='catalog-items'>
            {toys.filter((item) => item.id === id)
                .map((item, index) => (
                    <div className='catalog-items-context' key={index}>
                        <div className='catalog-items-page'>
                            <div>
                                <img src={item.image} width='300px' height='400px' />
                            </div>
                            <div className='text-description'>
                                <h2 className='name-catalog'>{item.name}</h2>
                                <p className='desript-catalog'>{item.description}</p>
                                <p className='count-input'><input type="text" value="123" /></p>
                                <p className='select-input' >
                                    <select className='select-input-1'>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                    </select>
                                </p>
                            </div>
                        </div>
                        

                        <div className='price-btn-items'>
                            <div>
                                <p className='item-price-catalog'>Ціна: {item.price} грн.</p>
                            </div>

                            <div>
                                <Link to='/catalog'>
                                    <button className='btn-1'>Повернутись назад</button>
                                </Link>

                                <button className='btn-2'>Додати до корзини</button>
                            </div>

                        </div>

                    </div>

                ))}

        </div>

    );
}
