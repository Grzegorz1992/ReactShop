import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";
import { CategoryMenu } from "../CategoryMenu/CategoryMenu";
import { MainContent } from "../MainContent/MainContent";
import { Outlet } from "react-router-dom";

export function Layout() {
	return (
		<>
			<MainContent>
				<TopBar>
					<MainMenu />
					<Logo />
					<div>
						<CurrencySelector />
						<IconMenu />
					</div>
				</TopBar>
				<CategoryMenu />
				<Outlet />
			</MainContent>
			<Footer />
		</>
	);
}
