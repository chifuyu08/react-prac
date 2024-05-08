import css from "./Display.module.css"

// eslint-disable-next-line react/prop-types
const Display = ({displayVal}) =>{
    return(
        <input type="text" className={css.display} value={displayVal} readOnly/>
    )
};

export default Display;