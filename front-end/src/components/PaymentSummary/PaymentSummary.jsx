import styles from "./PaymentSummary.module.css";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import CAR_ICON from "../../assets/car.svg";
import { useContext, useState } from "react";
import { CurrencyContext } from "../../contexts/CurrencyContext";
import { CURRENCIES, CURRENCY_SIGN } from "../../constants/currencies";

export function PaymentSummary({ products }) {
	const [currency] = useContext(CurrencyContext);

	const [finishShopping, setFinishShopping] = useState(false);

	const deliveryCosts = {
		[CURRENCIES.USD]: 10,
		[CURRENCIES.PLN]: 49,
	};

	const minSumsForFreeDelivery = {
		[CURRENCIES.USD]: 100,
		[CURRENCIES.PLN]: 500,
	};

	const currencySign = CURRENCY_SIGN[currency];

	let sum = products.reduce((total, product) => {
		return (
			total +
			(currency === CURRENCIES.PLN ? product.pricePLN : product.priceUSD) *
				product.quantity
		);
	}, 0);

	const deliveryCost = deliveryCosts[currency];
	const minSumForFreeDelivery = minSumsForFreeDelivery[currency];

	const totalCost =
		sum === 0 ? 0 : sum > minSumForFreeDelivery ? sum : sum + deliveryCost;

	return (
		<div className={styles.cartSummary}>
			<h2 className={styles.heading}>Podsumowanie</h2>
			<div className={styles.cartRow}>
				<p>Suma częściowa </p>
				<p className={styles.resumeRow}>
					{sum} {currencySign}
				</p>
			</div>
			<div className={styles.cartRow}>
				<p>Koszt dostawy</p>
				<p className={styles.resumeRow}>
					{sum === 0 ? 0 : sum > minSumForFreeDelivery ? 0 : deliveryCost}{" "}
					{currencySign}
				</p>
			</div>
			<div className={`${styles.cartRow} ${styles.cartSummaryRow}`}>
				<p>Suma całkowita</p>
				<p className={styles.resumeRow}>
					{totalCost} {currencySign}
				</p>
			</div>
			<div className={styles.cartCheck}>
				<input
					className={styles.checkbox}
					type="checkbox"
					id="dataPrivacy"
					name="dataPrivacy"
				/>
				<label htmlFor="dataPrivacy">
					Akceptuję <span className={styles.blueSpan}>Regulamin</span> i{" "}
					<span className={styles.blueSpan}>Politykę Prywatności.</span>
				</label>
			</div>

			<FullWidthButton onClick={() => setFinishShopping(true)} isBlack={true}>
				ZAMÓW I ZAPŁAĆ
			</FullWidthButton>

			{finishShopping && (
				<p className={styles.finishShopping}>
					Dziękujemy za zakupy w naszym sklepie{" "}
					<button
						onClick={() => setFinishShopping(false)}
						className={styles.xbutton}
					>
						x
					</button>
				</p>
			)}

			<div className={styles.deliveryInfo}>
				<img src={CAR_ICON} alt="Car Icon" />
				<p>
					Darmowa dostawa od {minSumForFreeDelivery} {currencySign}
				</p>
			</div>
		</div>
	);
}
