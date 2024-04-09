import { CartCheckBox } from "../../components/CartCheckBox/CartCheckBox";
import { FormContainer } from "../../components/FormContainer/FormContainer";

import { FormPersonalData } from "../../components/FormPersonalData/FormPersonalData";

export function Checkout() {
	return (
		<FormContainer>
			<FormPersonalData />
			<CartCheckBox />
		</FormContainer>
	);
}
