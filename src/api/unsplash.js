import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization:
          'Client-ID aef0adcd81f1f94ecebd3a27e8d1da9f206e619677969171acacdd94c8af173a'
      }
});