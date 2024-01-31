import NavBar from "../features/navbar/Navbar";
import ProductDetail from "../features/product-list/components/ProductList";

function Home() {
    return (
        <div>
            <NavBar>
                <ProductDetail></ProductDetail>
            </NavBar>
        </div>
    );
}

export default ProductDetail;