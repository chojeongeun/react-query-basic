import { useQuery } from '@tanstack/react-query';

function UserInfo() {
	const fetchUser = async ({ queryKey }) => {
		console.log(queryKey[1]);
		const response = await fetch(`https://jsonplaceholder.typicode.com/users/${queryKey[1]}`);
		return await response.json();
	};

	const { data, isLoading, isSuccess, isError } = useQuery(['user', 2], fetchUser, {
		refetchOnWindowFocus: false,
		refetchOnMount: false,
		staleTime: 1000 * 5, //디폴트 0ms
		cacheTime: 1000 * 5, //캐시에 데이터 유지시켜주는 시간 디폴트 5분 해당 시간 뒤에 GC에 의해 메모리에서 값 제거
	});
	console.log(data);
	console.log('isLoading', isLoading);
	console.log('isSuccess', isSuccess);

	return (
		<div>
			<h1>UserInfo</h1>
			{isSuccess && <h2>Name: {data.name}</h2>}
		</div>
	);
}

export default UserInfo;
