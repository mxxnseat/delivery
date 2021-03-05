export default ({cb, children})=>{
    return <button onClick={cb} className="product__buy btn">{children}</button>
}