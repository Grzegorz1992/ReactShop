import style from "./Hero.module.css";
import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FullWidthButton } from "../FullWidthButton/FullWidthButton";
import { NavLink, useParams } from "react-router-dom";

export function Hero({ heroImage }) {
	const params = useParams();
	return (
		<div
			className={style.hero}
			style={{ backgroundImage: `url(${heroImage})` }}
		>
			<CenteredContent>
				<div className={style.contentWrapper}>
					<h2 className={style.heading}>Letnie promocje do <span className={style.promo}>-70%</span></h2>
					<p>Tylko najlepsze okazje</p>
					<NavLink to={`/${params.gender}/odziez`}>
						<FullWidthButton>Sprawdź produkty</FullWidthButton>
					</NavLink>
				</div>
			</CenteredContent>
		</div>
	);
}
