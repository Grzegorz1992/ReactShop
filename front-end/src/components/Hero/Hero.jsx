import styles from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { NavLink, useParams } from "react-router-dom";

export function Hero({ heroImage }) {
	const params = useParams();
	return (
		<div
			className={styles.hero}
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<CenteredContent>
				<div className={styles.contentWrapper}>
					<h2 className={styles.heading}>
						Letnie promocje do <span className={styles.promo}>-70%</span>
					</h2>
					<p>Tylko najlepsze okazje</p>
					<NavLink to={`/${params.gender}/odziez`}>
						<FullWidthButton>Sprawdź produkty</FullWidthButton>
					</NavLink>
				</div>
			</CenteredContent>
		</div>
	);
}
