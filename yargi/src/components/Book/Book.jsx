import React from 'react'
import './Book.css'
import gallery_1 from '../../assets/loi1.jpg'
import gallery_2 from '../../assets/loi2.jpg'
import gallery_3 from '../../assets/loi4.jpg'
import gallery_4 from '../../assets/loi5.jpg'
const TheCodeofHammurabi='../../public/Constructionindustry.pdf'
const Racial='../../public/TheCodeofHammurabi.pdf'
const lawyer='../../public/The lawyer bubble.pdf'
const constru='../../public/Racialjustice.pdf'
const Book = () => {
    const downloadFile = (url) => {
        const fileName = url.split('/').pop();
        const aTag = document.createElement('a');
        aTag.href = url;
        aTag.setAttribute('download', fileName);
        document.body.appendChild(aTag);
        aTag.click();
        aTag.remove();
    };
  return (
    <div className='book-page'>
      <div className="books">
        <div className='book-item'>
        <div class="item">
    <img src={gallery_1} alt="" />
    <div class="botombook">
      <p>Racial justice</p>
      <button class="btn dark-btn"onClick={()=>{downloadFile(constru)}}>Télécharger</button>
    </div>
  </div>
  <div class="item">
    <img src={gallery_2} alt="" />
    <div class="botombook">
      <p>The Code of Hammurabi</p>
      <button class="btn dark-btn" onClick={()=>{downloadFile(TheCodeofHammurabi)}}>Télécharger </button>
    </div>
  </div>
  <div class="item">
    <img src={gallery_3} alt="" />
    <div class="botombook">
      <p>The Lawyer Bubble</p>
      <button class="btn dark-btn"onClick={()=>{downloadFile(lawyer)}}>Télécharger</button>
    </div>
  </div>
  <div class="item">
    <img src={gallery_4} alt="" />
    <div class="botombook">
      <p>Racial Justice</p>
      <button class="btn dark-btn "onClick={()=>{downloadFile(Racial)}}>Télécharger </button>
    </div>
  </div>
        </div>
      </div>
    </div>
  )
}

export default Book
