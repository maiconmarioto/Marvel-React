import md5 from 'js-md5';

const PUBLIC_KEY = 'ecd5e804d1a64ff875b12cc9b2dccb6f';
const PRIVATE_KEY = 'fcae9450db83ca640639be092c0e4a3bd4faaa1e';
const DATE = new Date().getTime();
const HASH = md5(DATE + PRIVATE_KEY + PUBLIC_KEY);
export const ROOT_URL = 'http://gateway.marvel.com/v1/public';
export const API_KEY = `apikey=${PUBLIC_KEY}&ts=${DATE}&hash=${HASH}`;