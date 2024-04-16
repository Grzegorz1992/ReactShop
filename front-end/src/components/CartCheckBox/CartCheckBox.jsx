import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import styles from "./CartCheckBox.module.css";
import { Link } from "react-router-dom";

export function CartCheckBox() {
	return (
		<>
			<div className={styles.checkboxContainer}>
				<div className={styles.inputContainer}>
					<h2 className={styles.heading}>Ochrona danych</h2>
					<input
						className={styles.checkbox}
						type="checkbox"
						id="dataPrivacy"
						name="dataPrivacy"
					/>
					<label htmlFor="dataPrivacy">
						Akceptuję <span className={styles.blueSpan}>Regulamin sklepu</span>{" "}
						i zapoznałem się z{" "}
						<span className={styles.blueSpan}>Polityką Prywatności.</span> Przed
						wysłaniem nam swoich danych, koniecznie zapoznaj się z{" "}
						<span className={styles.blueSpan}>Polityką Prywatności</span>, w
						której znajdziesz informacje o administratorze Twoich danych
						osobowych, Twoich prawach, w jakim celu przetwarzane są Twoje dane,
						przez jaki okres, kim są odbiorcy Twoich danych oraz wszelkie inne
						informacje, które dotyczą ochrony Twoich danych osobowych.
					</label>
				</div>
				<div className={styles.inputContainer}>
					<h2 className={styles.heading}>Newsletter</h2>
					<input
						className={styles.checkbox}
						type="checkbox"
						id="Newsletter"
						name="Newsletter"
					/>
					<label htmlFor="Newsletter">
						Tak, chcę otrzymywać wiadomości w newsletterze o nowościach,
						zniżkach i kodach rabatowych. Akceptuję{" "}
						<span className={styles.blueSpan}>Regulamin Newslettera</span> i
						zapoznałem się z{" "}
						<span className={styles.blueSpan}>Polityką Prywatności</span>.
					</label>
					<Link to={"/platnosc"}>
						<FullWidthButton isBlack={true}>PRZEJDŹ DALEJ</FullWidthButton>
					</Link>
				</div>
			</div>
		</>
	);
}
