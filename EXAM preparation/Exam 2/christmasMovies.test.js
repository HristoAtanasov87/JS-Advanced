const ChristmasMovies = require('./02. Christmas Movies_Resources');
const { expect } = require('chai');

describe('movies tests', () => {
    let instance = undefined;
    beforeEach(() => {
        instance = new ChristmasMovies();
    });

    it('constructor', () => {
        expect(Array.isArray(instance.movieCollection)).to.be.true;
        expect(instance.movieCollection.length).to.equal(0);
        expect(typeof instance.watched).to.equal('object');
        expect(Object.entries(instance.watched).length).to.equal(0);
        expect(Array.isArray(instance.actors)).to.be.true;
        expect(instance.actors.length).to.equal(0);
    });


    it('buyMovie', () => {
        expect(instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern'])).to.equal(`You just got Home Alone to your collection in which Macaulay Culkin, Joe Pesci, Daniel Stern are taking part!`);

        expect(() => { instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']) }).to.throw(`You already own Home Alone in your collection!`);

    });

    it('discardMovie', () => {
        expect(() => { instance.discardMovie('movieName') }).to.throw(`movieName is not at your collection!`);

        instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        expect(() => { instance.discardMovie('Home Alone') }).to.throw(`Home Alone is not watched!`);
        expect(instance.movieCollection.find(movie => movie.name === 'Home Alone')).to.be.undefined;

        instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        instance.watchMovie('Home Alone');
        expect(instance.discardMovie('Home Alone')).to.equal(`You just threw away Home Alone!`);
        expect(instance.watched.hasOwnProperty('Home Alone')).to.be.false;
    });

    it('watchMovie', () => {
        expect(() => { instance.watchMovie('Home Alone') }).to.throw('No such movie in your collection!');
        instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        instance.watchMovie('Home Alone');
        expect(instance.watched['Home Alone']).to.equal(1);
        instance.watchMovie('Home Alone');
        expect(instance.watched['Home Alone']).to.equal(2);
    });

    it('favouriteMovie', () => {
        expect(() => { instance.favouriteMovie() }).to.throw('You have not watched a movie yet this year!');

        instance.buyMovie('Home Alone', ['Macaulay Culkin', 'Joe Pesci', 'Daniel Stern']);
        instance.watchMovie('Home Alone');
        expect(instance.favouriteMovie()).to.equal(`Your favourite movie is Home Alone and you have watched it 1 times!`);
    });

    it('mostStarredActor', () => {
        expect(() => { instance.mostStarredActor() }).to.throw('You have not watched a movie yet this year!');

        instance.buyMovie('Home Alone', ['Macaulay Culkin']);
        instance.buyMovie('Home Alone2', ['Macaulay Culkin']);
        expect(instance.mostStarredActor()).to.equal(`The most starred actor is Macaulay Culkin and starred in 2 movies!`);
    });
})