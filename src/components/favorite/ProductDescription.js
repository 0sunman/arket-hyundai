
const ProductDescription = ({id, description})=>(
    <div className="listGrid__element---description" dataId={id}>
        <h2>{description.name}</h2>
        <p>{description.price} 원</p>
        <dl>
            <dt className="color">COLOUR</dt>
            <dt>Off White</dt>
        </dl>
    </div>
    )


export default ProductDescription