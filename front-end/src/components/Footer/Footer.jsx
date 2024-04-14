import styles from "./Footer.module.css";

export function Footer() {
	return (
		<>
			<div className={styles.footer}>
				<div className={styles.ulSection}>
					<div className={styles.ulContainer}>
						<h2 className={styles.heading}>WEARHOUSE</h2>
						<ul className={styles.footerList}>
							<div className={styles.liContainer}>
								<li>O nas</li>
								<li>Praca</li>
								<li>Dla mediów</li>
								<li>Polityka prywatności</li>
								<li>Nasze sklepy</li>
								<li>Kontakt</li>
							</div>
							<div className={styles.liContainer}>
								<li>Regulamin zakupów</li>
								<li>Regulamin kart podarunkowych</li>
								<li>Zapisz się do Newslettea</li>
								<li>Regulamin Newslettera</li>
							</div>
						</ul>
					</div>

					<div className={styles.ulContainer}>
						<h2 className={styles.heading}>OBSŁUGA KLIENTA</h2>
						<ul className={styles.footerList}>
							<div className={styles.liContainer}>
								<li>Dostawa i płatności</li>
								<li>Zwroty</li>
								<li>FAQ - produkty</li>
							</div>
							<div className={styles.liContainer}>
								<li>FAQ - sklep</li>
								<li>Jak pakujemy prezenty</li>
								<li>Dział reklamacji</li>
							</div>
						</ul>
					</div>
				</div>

				<p className={styles.footerEnding}>
					© 2024 WEARHOUSE - korzystając z serwisu WEARHOUSE akceptujesz jego
					regulamin{" "}
				</p>
			</div>
		</>
	);
}
