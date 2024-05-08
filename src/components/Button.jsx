import css from "./Button.module.css"
// eslint-disable-next-line react/prop-types
const Button=({buttonClick})=>{
    const name=['C','1','2','+','3','4','-','5','6','*','7','8','/','=','9','0','.','%'];
return (
        <>
        <div className="buttonContainer">
          <div className="container text-center">
            <div className={`row row-cols-3 ${css.digits}`}>
              {name.map((items)=>(
                <button className={`col btn btn-outline-secondary ${css.buttonFont}`} key={items} onClick={buttonClick}>{items}</button>
              ))}
            </div>
          </div>
        </div>
        </>
)};

export default Button; 