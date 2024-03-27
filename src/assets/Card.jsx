import React, { useContext, useState } from 'react'
import contextcreate from '../App'

function Card({data}) {

const [Quantity,setQuantity]=useState(0);

return (

<div className="col-12 col-md-6 m-3">
        <div className="card px-5">
        <img src={data.img} className="card-img-top" alt="..."/>
        <div className="card-body">

            <h5 className="card-title">{data.title}</h5>
            <br />

            <p className="card-text"><strong className="pe-3">Description:</strong>{data.description}</p>

            <p className="card-text list-group-item text-dark"><strong className="pe-3 ">Rating:</strong><span className='text-warning'>{data.rating}</span></p>

            <div className='list-group list-group-flush'> 

                <p className="card-text list-group-item text-danger"><strong className="pe-3 ">Stock:</strong>{data.stock}</p>

                <div className="row">
                    <p className="col-6 "><strong className="pe-3">Price:</strong>${data.price}</p>

                </div>

                <div className="row">

                    <p className="col-6 "><strong>Quantity:</strong></p>

                    <div className="col-6 d-flex justify-content-end text-success">
                        <input type="number" className='btn btn-outline-danger' defaultValue={0} min={0} max={data.stock} 
                        onChange={(e)=>{
                            setQuantity(e.target.value)
                        }}
                        />
                    </div>
                


                </div>
<hr />
                <div className="row text-success">
                    <p className="col-6 "><strong>Discount:</strong></p>

                    <div className="col-6 d-flex justify-content-end text-success">
                        <p><strong>{data.discountPercentage}%</strong></p>
                    </div>
                    
                </div>

            </div>
            
            <hr />

            <div className="row text-danger">

            <p className="col-6 "><strong>Total:</strong></p>

                    <div className="col-6 list-group-item  d-flex justify-content-end ">
                        <h5><strong className='text-danger bg-warning-subtle'>${Quantity * data.price}</strong></h5>
                    </div>
                    
            </div>

        </div>


        </div>
    </div>

)
}

export default Card