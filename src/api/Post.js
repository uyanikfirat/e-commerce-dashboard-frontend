import {
  get, post, patch, _delete
} from '@/api/Api';

export default class Post {

  static async get() {
    return get('/post');
  }

  static async paginator(url) {
    return get(url);
  }

  static async find(id) {
    return get(`/post/${id}`);
  }

  static async create(data) {
    return post('/post', data);
  }

  static async update(data) {
    return patch(`/post/${data.id}`, data);
  }

  static async delete(id) {
    return _delete(`/post/${id}`);
  }


}
