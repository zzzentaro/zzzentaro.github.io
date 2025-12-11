export async function load({ fetch }) {
	try {
		const res = await fetch('https://prts.zzzentaro.workers.dev/' + Date.now());
		const avatarUrl = await res.text();
		return { avatarUrl };
	} catch (error) {
		console.error('Failed to load avatar:', error);
		return { avatarUrl: 'https://prts.zzzentaro.workers.dev/0' };
	}
}
