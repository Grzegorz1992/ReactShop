export function FormPersonalData() {
	return (
		<form>
			<div>
				<div>
					<label htmlFor="name">IMIĘ:</label>
					<input type="text" id="name" name="name" />
				</div>
				<div>
					<label htmlFor="surname">NAZWISKO:</label>
					<input type="text" id="surname" name="surname" />
				</div>
			</div>
			<div>
				<label htmlFor="email">ADRES E-MAIL:</label>
				<input type="email" id="email" name="email" />
			</div>
		</form>
	);
}
