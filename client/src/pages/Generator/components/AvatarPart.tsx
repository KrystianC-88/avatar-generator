import React, {useRef} from 'react'
import { IPart } from '../../../interfaces/avatarInterface'

interface props {
    part: IPart,
    clickEvent: Function
}

function AvatarPart({part, clickEvent }: props) {

    const partRef = useRef<HTMLDivElement>(null)

    const handleClick = () =>{
        clickEvent(part)
        console.log(`AvatarPart event`)
    }

    const borderColor = part.isChosen ? 'border-green-500' : 'border-yellow-500'
    const borderColorHover = part.isChosen ? 'hover:border-green-400' : 'hover:border-yellow-200'
    console.log(borderColorHover)
    return (
        <div onClick={handleClick} ref={partRef} className={`border inline-block ${borderColor} m-2 hover:cursor-pointer ${borderColorHover}`}>
            <img src={part.img} className={"w-40"} />
        </div>
    )
}

export default AvatarPart;
