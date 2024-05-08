import axios from 'axios';
import { Button } from '@chakra-ui/react';
import { useEffect, useState } from 'react';

function App() {
	const [items, setItems] = useState<any>();

	const handleClick = () => {
		const item = {
			title: 'React',
			desciption: 'Acho q ta',
			price: 10,
		};

		axios
			.post('http://localhost:3000/items', item)
			.then(() => console.log('Foi'))
			.catch(() => console.log('N foi'));
	};

	useEffect(() => {
		axios
			.get('https://backend-peach-two.vercel.app/items')
			.then((data) => {
				setItems(data.data);
				console.log(items);
			})
			.catch(() => console.log('Não foi possível'));
	}, []);

	return (
		<div>
			<Button onClick={handleClick}>Click me</Button>
		</div>
	);
}

export default App;
