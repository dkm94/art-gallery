import { IPrevBtnProps } from "../../../types"

const PrevBtn = ({ text, setSlidePrev, slidePrev, selectedGallery, prevOne, getBack }: IPrevBtnProps ) => {
  const handleMouseOver: React.MouseEventHandler<HTMLDivElement> = ():void => {
    if(typeof setSlidePrev !== "undefined"){
      setSlidePrev(true)
    }
  }
  const handleMouseOut: React.MouseEventHandler<HTMLDivElement> = ():void => {
    if(typeof setSlidePrev !== "undefined"){
      setSlidePrev(false)
    }
  }

  const handleClick: React.MouseEventHandler<HTMLButtonElement> = ():void => {
    if(typeof prevOne !== "undefined"){
      prevOne()
      return;
    }
    getBack
  }

  const isDisabled = ():boolean => {
    if(typeof selectedGallery !== "undefined" && selectedGallery < 2){
      return true;
    }
    return false;
  }

  return (
    <div className="prev-wrapper" onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
        <button 
        className={`prev-btn ${slidePrev ? "prev-btn-animation" : ""} ${selectedGallery === 1 ? "disable-btn" : ""}`} 
        onClick={handleClick} 
        disabled={isDisabled()}
        >{text}</button>
        <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
    </div>
  )
}

export default PrevBtn