import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavourtieProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouriteList.module.css";

export function FavouriteList({ products }) {
	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{products.map((product) => {
						return <FavourtieProduct key={product.id} product={product} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
}
