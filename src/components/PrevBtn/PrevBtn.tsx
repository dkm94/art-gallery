import { IPrevBtnProps } from "../../../types"

const PrevBtn = ({ mode, text, setSlidePrev, slidePrev, selectedGallery, prevOne, getBack }: IPrevBtnProps ) => {
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
    if(typeof getBack !== "undefined"){
      getBack()
    }
  }

  const isDisabled = ():boolean => {
    if(typeof selectedGallery !== "undefined" && selectedGallery < 2){
      return true;
    }
    return false;
  }

  //TODO: onmouse pour gérer le hover (je pense que ça ne fonctionne pas à cause du composant Cursor) // Ajouter grâce à la classe btn-expand

  return (
    <div 
      className="prev-wrapper" 
      onMouseOver={handleMouseOver} 
      onMouseOut={handleMouseOut} 
      style={{ position: mode === "selected" ? "absolute" : "unset", top: mode === "selected" ? "20%" : ""} } 
    >
      <button
        className={`prev-btn btn-expand ${slidePrev ? "prev-btn-animation" : ""} ${selectedGallery === 1 ? "disable-btn" : ""}`} 
        onClick={handleClick} 
        disabled={isDisabled()}
      >{text}</button>
      <div className={`prev-line ${slidePrev ? "prev-line-animation" : ""}`}/>
    </div>
  )
}

export default PrevBtn