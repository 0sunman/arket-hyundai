
const ProductDescription = ({id, description, brand})=>(
    <div className="listGrid__element---description" dataId={id}>
        <h2>{description.name}</h2>
        <p className="priceValue">{description.price} 원</p>
        {
            brand === "arket" && (
            <dl>
                <dt className="color">COLOUR</dt>
                <dt>Off White</dt>
            </dl>    
            )
        }
        {
            brand === "stories" && (
            <dl>
                <dt>Colour : </dt>
                <dt>White</dt>
            </dl>    
            )
        }
    </div>
    )


export default ProductDescription