const {
    DataStore
} = require('notarealdb');
const store = new DataStore('./data');
const Query = {
    // Fetch list of movie
    movies: () => store.collection('movies').list(),
}
const Mutation = {
    // Create new movie in movie list
    createmovie: (root, args, context, info) => {
        let movieObj = store.collection('movies');
        let idCount = movieObj.list().length;
        const newmovie = {
            id: `${idCount++}`,
            titleMovies: args.titleMovies,
            descriptionMovies: args.descriptionMovies
        }
        movieObj.create(newmovie);
        return newmovie
    },
    // Update movie detail based on id
    updatemovie: (root, args, context, info) => {
        let movieList = store.collection('movies');
        movieList.update({
            id: args.id,
            titleMovies: args.titleMovies,
            descriptionMovies: args.descriptionMovies
        });
        return movieList.list()
    },
    // Delete specific movie from list
    deletemovie: (root, args, context, info) => {
        let movieList = store.collection('movies');
        movieList.delete(args.id);
        return movieList.list()
    },
    createactor: (root, args, context, info) => {
        let actorObj = store.collection('actors');
        let idCount = actorObj.list().length;
        const newactor = {
            id: `${idCount++}`,
            actor: args.actor,
            idMovies: args.idMovies
        }
        actorObj.create(newactor);
        return newactor
    },
    // Update actor detail based on id
    updateactor: (root, args, context, info) => {
        let actorList = store.collection('actors');
        actorList.update({
            id: args.id,
            actor: args.actor,
            idMovies: args.idMovies
        });
        return actorList.list()
    },
    // Delete specific actor from list
    deleteactor: (root, args, context, info) => {
        let actorList = store.collection('actors');
        actorList.delete(args.id);
        return actorList.list()
    },
    createauthor: (root, args, context, info) => {
        let authorObj = store.collection('authors');
        let idCount = authorObj.list().length;
        const newauthor = {
            id: `${idCount++}`,
            author: args.author,
            idMovies: args.idMovies
        }
        authorObj.create(newauthor);
        return newauthor
    },
    // Update actor detail based on id
    updateactor: (root, args, context, info) => {
        let actorList = store.collection('authors');
        authorList.update({
            id: args.id,
            author: args.author,
            idMovies: args.idMovies
        });
        return authorList.list()
    },
    // Delete specific author from list
    deleteauthor: (root, args, context, info) => {
        let authorList = store.collection('authors');
        authorList.delete(args.id);
        return authorList.list()
    }
}
module.exports = {
    Query,
    Mutation
}