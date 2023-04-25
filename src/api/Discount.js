import {
  get, post, patch, _delete
} from '@/api/Api';

export default class Discount {

  static async get() {
    return get('/discount');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`/discount/${id}`);
  }

  static async create(data) {
    return post('/discount', data);
  }

  static async update(data) {
    console.log(data)
    return patch(`/discount/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`/discount/${id}`);
  }


}
