import { FormShipment } from "../../components/FormShipment/FormShipment";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { FormPaymanet } from "../../components/FormPayment/FormPayment";

export function Payment() {
	return (
		<FlexContainer>
			<FormShipment />
			<FormPaymanet />
		</FlexContainer>
	);
}
