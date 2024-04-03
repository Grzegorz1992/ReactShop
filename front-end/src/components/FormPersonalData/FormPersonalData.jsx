import styles from "./FormPersonalData.module.css";
export function FormPersonalData() {
	return (
		<>
      
			<form className={styles.form}>
            <h2>Informacje dotyczące danych osobowych</h2>
				<div className={styles.personalDataContainer}>
					<div className={styles.inputContainer}>
						<label htmlFor="name">IMIĘ:</label>
						<input
							type="text"
							id="name"
							name="name"
							placeholder="Wprowadź imię..."
						/>
					</div>
					<div className={styles.inputContainer}>
						<label htmlFor="surname">NAZWISKO:</label>
						<input
							type="text"
							id="surname"
							name="surname"
							placeholder="Wprowadź nazwisko..."
						/>
					</div>
				</div>
				<div className={styles.inputContainer}>
					<label htmlFor="email">ADRES E-MAIL:</label>
					<input
						type="email"
						id="email"
						name="email"
						placeholder="Twój adres e-mail"
                        className={styles.emailInput}
					/>
				</div>
			</form>
		</>
	);
}
