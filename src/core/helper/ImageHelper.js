import React from 'react';

const ImageHelper = ({ product })=>{
    const imageurl = product ? product.image : `/home/vishal/Pictures/Wallpapers/24078.jpg`;
    return(
        <div className="rounded border border-light p-2">
            <img src={imageurl}
            style={{ maxHeight:"100%",maxWidth:"100%" }}
            className="mb-3 rounded"
            alt="" 
            />
        </div>
    );
};

export default ImageHelper;