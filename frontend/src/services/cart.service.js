import http from '../http-common';

class CartDataService {
    getList(data) {
        return http.get(`/cart?list=${data}`)
    }
}

export default new CartDataService();