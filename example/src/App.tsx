import './App.css';
import { InputAmount } from 'input-amount';
import { useState } from 'react';

function App() {
	const [value, setValue] = useState<number>();
	return (
		<div className='App'>
			<header className='App-header'>
				<InputAmount
					onChange={(e: any, v: number) => {
						console.log('Value is ==> ', v);
						setValue(v);
					}}
					decimalCharacter={','}
					digitGroupSeparator={'.'}
					value={value}
					currencySymbol={'$'}
					decimalCharacterAlternative={','}
					leadingZero={'keep'}
				/>
			</header>
		</div>
	);
}

export default App;
