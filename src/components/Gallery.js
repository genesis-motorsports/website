import React, {useEffect, useState } from 'react'
import "./Gallery.css"
import img1 from "../images/gallery/1.jpg"
import img2 from "../images/gallery/2.jpeg"
import img3 from "../images/gallery/3.jpeg"
import img4 from "../images/gallery/4.jpeg"
import img5 from "../images/gallery/5.jpeg"
import img6 from "../images/gallery/6.jpeg"
import img7 from "../images/gallery/7.jpeg"
import img8 from "../images/gallery/8.jpeg"
import img9 from "../images/gallery/9.jpeg"
import img10 from "../images/gallery/10.jpeg"
import img11 from "../images/gallery/11.jpeg"
import img12 from "../images/gallery/12.jpeg"
import img13 from "../images/gallery/13.jpeg"
import img14 from "../images/gallery/14.jpeg"


const Gallery = (props) => {
    const galleryImgArray = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12, img13, img14]
    const [ind, setInd] = useState(0)
    const handleImageClick = (index) => {
        const i = index
        setInd(i)
        document.getElementById("myModal").style.display = "flex";
        document.getElementById("img").src = galleryImgArray[index];
        // console.log(`index of the image clicked is ${index}`)
        // console.log(`ind state variable is ${ind}`)
    }

    const closeModal = () => {
        document.getElementById("myModal").style.display = "none";
        // console.log(`closed the modal with last ind as ${ind}`)
    }

    const goPrevious = () => {
        const i = ind === 0 ? ind : ind-1
        setInd(i)
        document.getElementById("img").src = galleryImgArray[ind]
        // console.log(`clicked prev button, ind now is ${ind}`)
    }

    const goNext = () => {
        const i = ind === galleryImgArray.length - 1 ? ind : ind+1
        setInd(i)
        document.getElementById("img").src = galleryImgArray[ind]
        // console.log(`clicked next button, ind now is ${ind}`)
    }

    useEffect(()=> {
        document.getElementById("img").src = galleryImgArray[ind]
        // console.log(`component rendered as ind becomes ${ind}`)
    })

  return (
    <div className='outer-home'>
        <div className="image-overlay">
            <div className="container" id={`${props.ids.gallery}`}>
                <h4 className="gallery-heading">GALLERY</h4>
                <div className="gallery-container">
                {galleryImgArray.map((imgNo, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={imgNo} alt="Gallery" className='gallery-img' onClick={()=>{
                            handleImageClick(index)
                        }}/>
                    </div>
                ))}
                <div className="modal" id="myModal">
                    <span className="close" onClick={closeModal}>&times;</span>
                    <div className="prev-img-next">
                        <span className='prev-next-btn' onClick={goPrevious}>&#8249;</span>
                        <img className="modal-content" id="img" alt='Modal'></img>
                        <span className='prev-next-btn' onClick={goNext}>&#8250;</span>
                    </div>
                </div>
                </div>
            </div>
        </div>
        <div className="hr"></div>
    </div>
  )
}

export default Gallery