import http from "../http-common";

class FoodService {
    getFoodById(id) {
        return http.get(`/food/${id}`)
    }
    getOptions() {
        return http.get('/options')
    }
    createFood(data) {
        return http.post('/food/new', data)
    }
    updateFood(id, data) {
        return http.put(`/food/${id}`, data)
    }
    deleteFood(id) {
        return http.delete(`/food/${id}`)
    }
}

export default new FoodService()