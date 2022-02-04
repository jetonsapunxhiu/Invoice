function Product(props) {
    const { element } = props; 
    return (
        <div className="product">
            Description: {element.description}  
            <br />
            price: {element.price}

            <br />
            <input placeholder="Select how many products" type="number" />
            <button>Add on cart</button>
        </div>
    );
}

export default Product;

// const {element} eshte variabel qe e caktojm,
// dhe e perdorim me poshte per prop. = props;
// psh. element.discription e mer prop nga,
// product si prop i description ne products.js ose
// element.price e mer nga products.js elementin price.