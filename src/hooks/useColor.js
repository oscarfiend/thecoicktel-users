import { useState } from "react"

const useColor = (sendColor="#000000") => {
   const [color, setColor] = useState(sendColor)
 
   const changeColor=(col)=>{
       setColor(col)
   }

   return [color,changeColor]

}

export default useColor
