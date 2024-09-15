import { useState } from "react"
import "./ToggleSwitch.css"
import { IoIosSwitch } from "react-icons/io";

export const ToggleSwitch = () => {
    const [value, setValue] = useState(false);

    const handleToggleSwitch = () => {
        setValue(!value);
    }

    return (
        <>
            <h1 style={{color: "#000", textAlign: "center"}}>Toggle Switch <IoIosSwitch /></h1>
            <div className="toggle-switch" style={{ backgroundColor: value? "green": ""}} onClick={handleToggleSwitch}>
                <div className={`switch ${value ? "on" : "off"}`}>
                    <span className="switch-state">{value ? "on" : "off"}</span>
                </div>
            </div>
        </>
    )
}
