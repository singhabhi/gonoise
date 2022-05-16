import React, { useState } from 'react'
import './Styles/Navbar.css'
import { logo } from '../JsonData.js/images'
import NavbarModal from './Model/NavbarModal/NavbarModal'
import ProductsType from './ProductCase/ProductsType'
export default function Navbar() {
    const [menu, SetMenu] = useState(true)


// document.addEventListener('mouseup' , (e)=>{
//     var panel = document.getElementById('AccordionoID');
//     var toogleBtn = document.getElementById('tooglebtn');
//     if(e.pageX===24 && e.pageY ===21 && menu === false || menu === false && e.target !== panel  ){
//         SetMenu(true)
//     }else {
//         if(e.pageX===24 && e.pageY ===21 && menu === false ){
//         SetMenu(true)
//         }
//     }
// })

    const menuToogle = (e) => {
        console.log(e)
        if (menu === false) {
            SetMenu(true)
        }
        else {
            SetMenu(false)
        }
    }


    return (
        <>
            <header className='bg-neutral-900 py-1 ' style={{ lineHeight: "36px" }}>
                <div className='grid grid-cols-6'>
                    <div className='cursor-pointer'   onClick={menuToogle} ><img id="tooglebtn" style={{ paddingTop: "10px", paddingLeft: "10px" }} src={menu ? `https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/mobile-menu.svg?v=140109299008397858811635748412` : `https://cdn.shopify.com/s/files/1/0997/6284/t/314/assets/close-icon-white-react.svg?v=82956483883518439201635748412`} alt="loading" /></div>
                    <div className="col-span-4 grid ">
                        {
                            logo ?
                                logo.map((i, index) => (
                                    <img key={index} className='m-auto' style={{ width: "122px", height: "auto" }} src={i.NavbarLogo ? i.NavbarLogo : ""} alt="loading .." />
                                ))
                                : ""
                        }

                    </div>
                    <div className="relative">
                        <img src="https://cdn.shopify.com/s/files/1/0997/6284/files/cart-bag-new.svg?v=5749620504844230698" className="absolute" style={{ top: "4.3px" }} />
                    </div>
                </div>
            </header>
            {
                menu ? ' ' :
                    <div id="AccordionoID" className="AccordionoID bg-neutral-900 ">{
                        Array(5).fill().map((_, i) => (
                            <NavbarModal key={i} title={<p>how are your </p>}>
                                {
                                  <ProductsType/>
                                }
                            </NavbarModal>
                        ))
                    }
                    </div>
            }

        </>
    )
}
