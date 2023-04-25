import {
  get, post, patch, _delete
} from '@/api/Api';

export default class ProductCategory {

  static async get() {
    return get('/product-category');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`/product-category/${id}`);
  }

  static async create(data) {
    return post('/product-category', data);
  }

  static async update(data) {
    return patch(`/product-category/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`/product-category/${id}`);
  }


}
