import { CartCheckBox } from "../../components/CartCheckBox/CartCheckBox";
import { FormContainer } from "../../components/FormContainer/FormContainer";
import { FormCustomerAddress } from "../../components/FormCustomerAddress/FormCustomerAddress";
import { FormPersonalData } from "../../components/FormPersonalData/FormPersonalData";

export function Checkout() {
	return (
		<FormContainer>
			<FormPersonalData />
			<FormCustomerAddress />
			<CartCheckBox />
		</FormContainer>
	);
}
