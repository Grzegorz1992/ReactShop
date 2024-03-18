import { Layout } from "../../components/Layout/Layout";
import { ExpandableMenu } from "../../components/ExpandableMenu/ExpandableMenu";
import { Breadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { FlexContainer } from "../../components/FlexContainer/FlexContainer";
export function ProductDetails() {
	return (
		<Layout>
			<FlexContainer>
				<ExpandableMenu />
				<Breadcrumbs />
			</FlexContainer>
		</Layout>
	);
}
