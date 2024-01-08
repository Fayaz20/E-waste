import React from 'react';
import './grid.css';

function Grid() {
    return (
        <>
            <div id="grid-section">
                <h1 style={{ textAlign: 'center', color: 'white', fontFamily: 'sans-serif', fontWeight: 'bolder', fontSize: '50px' }}>EXPLORE ABOUT E-WASTES</h1>

                <div className="glass-search-bar">
                <i class="gg-search"></i>
                    <input type="text" placeholder="Search for specific electronic wastes" className="search-input" />
                </div>
                <div className='parent-grid'>
                    <div className="image-box">
                        <img
                            src="https://cdn.thewirecutter.com/wp-content/media/2023/06/bestlaptops-2048px-9765.jpg" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'sans-serif' }}>LAPTOP</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                    <div className="image-box">
                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2022/3/BK/TA/UG/148618475/vivo-y19-mobile-phones.jpg" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>MOBILE PHONE</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                    <div className="image-box">
                        <img
                            src="https://5.imimg.com/data5/SELLER/Default/2022/8/QC/AX/EG/14979481/2o5a1015-hdr-edit-500x500.jpg" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>CPU</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                </div>
                <div className='parent-grid'>
                    <div className="image-box">
                        <img
                            src="https://www.grangerwasteservices.com/wp-content/uploads/2017/09/AdobeStock_121086159-batteries-1024x613.jpg" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'sans-serif' }}>BATTERIES</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                    <div className="image-box">
                        <img
                            src="https://pisces.bbystatic.com/image2/BestBuy_US/Gallery/pol_Build-your-own-PC-MMT-284546-1129-der-201710.jpg;maxHeight=455;maxWidth=978" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>PROCESSORS</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                    <div className="image-box">
                        <img
                            src="https://www.pcworld.com/wp-content/uploads/2023/08/pcw-best-wireless-mice-primary-100866905-orig.jpg?quality=50&strip=all" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>MOUSE</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                </div>
                <div className='parent-grid'>
                    <div className="image-box">
                        <img
                            src="https://i.dell.com/is/image/DellContent/content/dam/images/products/electronics-and-accessories/dell/keyboards/aw510k/aw510k-ckb-3060rf-gy.psd?fmt=pjpg&pscan=auto&scl=1&wid=3724&hei=2419&qlt=100,1&resMode=sharp2&size=3724,2419&chrss=full&imwidth=5000" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontWeight: 'bold', fontFamily: 'sans-serif' }}>KEYBOARD</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                    <div className="image-box">
                        <img
                            src="https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RWEIWg?ver=8b86&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>MONITOR</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                    <div className="image-box">
                        <img
                            src="https://www.imperialworldtrade.com/images/products/electric-cables.jpg" // Replace with your image URL
                            alt="Image"
                            className="image"
                        />
                        <h2 style={{ color: '#fff', fontFamily: 'sans-serif' }}>WIRES AND CABLES</h2>
                        <button className="view-button">VIEW</button>
                    </div>
                </div>
            </div>






        </>
    );
}

export default Grid;
