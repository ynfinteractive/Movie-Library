const {
    DataStore
} = require('notarealdb');
const store = new DataStore('./data');
module.exports = {
    movies: store.collection('movies'),
    actors: store.collection('actors'),
    authors: store.collection('authors')
};