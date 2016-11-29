
import fetch from 'isomorphic-fetch';
const API_KEY = 'a46a979f39c49975dbdd23b378e6d3d5';
const API_ENDPOINT = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${API_KEY}&format=json&nojsoncallback=1&per_page=5`;
const API_CATEGORY = 'http://m.jcpenney.com/v4/categories/root?rwdcb=20161115162531';

export const fetchCourse = () => {
  return fetch(API_ENDPOINT).then(function (response) {
    return response.json().then(function (json) {
      return json.photos.photo.map(
        ({farm, server, id, secret}) => `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`
      );
    })
  })
};

export const fetchCategory = () => {
  return fetch(API_CATEGORY).then(function(response) {
    return response.json().then(function (json) {
      return json.groups;
    })
  })
}
