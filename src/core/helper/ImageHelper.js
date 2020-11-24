import React from 'react';
import "../../styles.css"

const ImageHelper = ({ product })=>{
    const imageurl = product ? product.image : `/home/vishal/Pictures/Wallpapers/24078.jpg`;
    return(
        <div className="rounded  p-2">
            <img src={imageurl}
            style={{ maxHeight:"auto",width:"100%" }}
            className=" rounded ImageHelperContainer"
            alt="" 
            />
        </div>
    );
};

export default ImageHelper;