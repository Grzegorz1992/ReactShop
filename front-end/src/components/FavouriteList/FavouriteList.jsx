import { CenteredContent } from "../CenteredContent/CenteredContent";
import { FavouriteProduct } from "../FavouriteProduct/FavouriteProduct";
import styles from "./FavouriteList.module.css";

export function FavouriteList({ products }) {
	return (
		<CenteredContent>
			<div className={styles.favouritesList}>
				<h2>Ulubione</h2>
				<div>
					{products.map((product) => {
						return <FavouriteProduct key={product.id} product={product} />;
					})}
				</div>
			</div>
		</CenteredContent>
	);
}
