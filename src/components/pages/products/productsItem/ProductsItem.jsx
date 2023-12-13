import { useDispatch, useSelector } from 'react-redux';
import styles from './Products.module.css'
import { useEffect } from 'react';
import { } from '../../../../store/slices/categoriesSlice';
import { getProducts } from '../../../../store/slices/productsSlice';


const ProductsItem = () => {
    const dispatch = useDispatch()
    const { status, error, productsAll } = useSelector((state) => state.products)

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    return <>


        <h2>All products</h2>
        <div className={styles.productsContainer}>
            {error && <h2>Error: {error}</h2>}
            {status === "loading" && <h2>Loading....</h2>}
            {productsAll.map((product) => {

                if (product.discont_price) {
                    const percentDiscount = Math.floor(
                        100 - (product.discont_price * 100) / product.price

                    );

                    return (

                        <div key={product.id}>

                            <div className={styles.productsCardsContainer}>
                                <div className={styles.productDiscount}>
                                    <p>-{percentDiscount}%</p>
                                    <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                                </div>
                                <p className={styles.productInfo}>{product.title}</p>
                                <div className={styles.priceContainer}>
                                    <p className={styles.productDiscontPrice}>{`${"$"}${product.discont_price}`}</p>
                                    <p className={styles.productPrice}>{`${"$"}${product.price}`}</p>
                                </div>
                            </div>
                        </div>

                    );
                }


                return (

                    <div key={product.id} >
                        <div className={styles.productsCardsContainer}>
                            <div className={styles.productDiscount}>
                                <img src={`http://localhost:3333${product.image}`} alt={product.title} />
                            </div>
                            <p className={styles.productInfo}>{product.title}</p>
                            <div className={styles.priceContainer}>
                                <p className={styles.productDiscontPrice}>{`${"$"}${product.price}`}</p>
                            </div>
                        </div>
                    </div>

                );
            })}
        </div>
    </>
}

export default ProductsItem;