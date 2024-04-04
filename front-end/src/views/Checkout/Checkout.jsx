import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
import { FormCustomerAddress } from "../../components/FormCustomerAddress/FormCustomerAddress";
import { FormPersonalData } from "../../components/FormPersonalData/FormPersonalData";

export function Checkout() {
	return (
		<FlexContainer>
			<FormPersonalData />

			<FormCustomerAddress />
		</FlexContainer>
	);
}
