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

  static async create(data, headers) {
    return post('/product', data, headers);
  }

  static async update(data ,headers) {
    const id = data.get("id");
    const response = await post(`${'product'}/${id}`, data, headers);
    return response;
  }

  static async delete(id) {
    return _delete(`/product/${id}`);
  }


}
