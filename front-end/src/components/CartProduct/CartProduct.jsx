import styles from "./CartProduct.module.css";
import REMOVE_ICON from "../../assets/remove.svg";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";

export function CartProduct({ product }) {
	const [currency] = useContext(CurrencyContext);
	const [, , deleteProductFromCart] = useContext(CartContext);
	const price =
		(currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD) *
		product.quantity;

	return (
		<div className={styles.favouriteProduct}>
			<img src={product.photos[0]} alt={product.productName} />
			<div className={styles.favouriteProductInfo}>
				<div className={styles.topRow}>
					<h3>
						{product.brand} {product.productName}
					</h3>
					<p>{price}</p>
				</div>
				<p className={styles.priceRow}>
					<span>Cena: </span>
					{price}
					{CURRENCY_SIGN[currency]}
				</p>
				<p className={styles.quantityRow}>
					<span>Ilość: </span>
					{product.quantity}
				</p>
				<div className={styles.buttonRow}>
					<button
						onClick={() => {
							deleteProductFromCart(product);
						}}
					>
						<img src={REMOVE_ICON} alt="Usuń" />
						Usuń
					</button>
				</div>
			</div>
		</div>
	);
}
