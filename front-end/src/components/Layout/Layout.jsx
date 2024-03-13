import { CurrencySelector } from "../CurrencySelector/CurrencySelector";
import { Footer } from "../Footer/Footer";
import { Logo } from "../Logo/Logo";
import { MainMenu } from "../MainMenu/MainMenu";
import { IconMenu } from "../IconMenu/IconMenu";
import { TopBar } from "../TopBar/TopBar";

export function Layout() {
	return (
		<>
			<TopBar>
				<MainMenu />
				<Logo />
				<div>
					<CurrencySelector />
					<IconMenu />
				</div>
			</TopBar>

			<Footer />
		</>
	);
}
