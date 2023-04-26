import {
  get, post, patch, _delete
} from '@/api/Api';

export default class Shipping {

  static async get() {
    return get('/shipping');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`/product-shipping/${id}`);
  }

  static async create(data) {
    return post('/product-shipping', data);
  }

  static async update(data) {
    console.log(data)
    return patch(`/product-shipping/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`/product-shipping/${id}`);
  }


}
