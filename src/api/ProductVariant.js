import {
  get, post, patch, _delete
} from '@/api/Api';

export default class ProductVariant {

  static async get() {
    return get('/product-variant');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`/product-variant/${id}`);
  }

  static async create(data) {
    return post('/product-variant', data);
  }

  static async update(data) {
    console.log(data)
    return patch(`/product-variant/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`/product-variant/${id}`);
  }


}
