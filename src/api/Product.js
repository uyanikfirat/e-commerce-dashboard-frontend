import {
  get, post, patch, _delete
} from '@/api/Api';

export default class Product {

  static async get() {
    return get('/product');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`/product/${id}`);
  }

  static async create(data) {
    return post('/product', data);
  }

  static async update(data) {
    return patch(`/product/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`/product/${id}`);
  }


}
