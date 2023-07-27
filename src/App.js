import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

function App() {
	const QueryClient = new QueryClient();

	return (
		<QueryClientProvider client={QueryClient}>
			<div className='App'>
				<h1>hello</h1>
			</div>
			<ReactQueryDevtools />
		</QueryClientProvider>
	);
}

export default App;
