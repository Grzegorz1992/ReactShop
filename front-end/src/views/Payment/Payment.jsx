import { FormShipment } from "../../components/FormShipment/FormShipment";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { FormPaymanet } from "../../components/FormPayment/FormPayment";
import { CartContext } from "../../contexts/CartContext";
import { useContext } from "react";
import { PaymentSummary } from "../../components/PaymentSummary/PaymentSummary";

export function Payment() {
	const [cartItems] = useContext(CartContext);
	return (
		<FlexContainer>
			<FormShipment />
			<FormPaymanet />
			<PaymentSummary products={cartItems} />
		</FlexContainer>
	);
}
