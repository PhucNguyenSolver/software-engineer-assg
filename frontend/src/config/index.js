const IS_DEV = false

const API_ENDPOINT_DEV = 'http://localhost:8080/'
const API_ENDPOINT_PROD = 'https://nihouse-server.vercel.app/'
export const API_ENDPOINT = IS_DEV ? API_ENDPOINT_DEV : API_ENDPOINT_PROD