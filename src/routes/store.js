import { writable } from 'svelte/store';

// cart array which will be added in home and used in checkout to display your products
export const cart = writable([]);
