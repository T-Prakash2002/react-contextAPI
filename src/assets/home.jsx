import React, { createContext, useContext } from 'react'
import {contextcreate} from '../App'
import Nav from './Nav';
import Card from './Card';

export const co=createContext();

function Home() {

const value=useContext(contextcreate);  



return (

    
        <div className='container-fluid border rounded-2'>
            
            <div className="row">
                <Nav />
            </div>
            <div className="row rod d-flex  justify-content-center">
                {
                    value.map(item=>{

                    
                        return (
                        
                        <Card key={item.id} data={item}/>
                        
                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home