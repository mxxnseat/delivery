export default ({cb, children, Class})=>{
    return <button onClick={cb} className="product__buy btn" className={Class ? Class.map(cl=>cl+" ")+"btn" : "btn"}>{children}</button>
}