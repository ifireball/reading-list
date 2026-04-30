import { loadData } from '$lib/load-data';

/** @type {import('./$types').PageServerLoad} */
export async function load() {
    const data = await loadData();
    return {
        data
    };
}
