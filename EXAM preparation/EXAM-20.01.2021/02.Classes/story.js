class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];

    }

    get likes() {
        if (this._likes.length === 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length === 1) {
            return `${this._likes[0]} likes this story!`
        } else if (this._likes.length > 1) {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`
        }
    }


    like(username) {
        if (this._likes.includes(username)) {
            throw new Error("You can't like the same story twice!");
        } else if (username === this.creator) {
            throw new Error("You can't like your own story!");
        } else {
            this._likes.push(username);
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (this._likes.includes(username) === false) {
            throw new Error("You can't dislike this story!");
        } else if (this._likes.includes(username)) {
            let index = this._likes.indexOf(username);
            this._likes.splice(index, 1);
            return `${username} disliked ${this.title}`
        }


    }

    comment(username, content, id) {
        let toFind = this._comments.find(el => el.Id === id);
        if (toFind === undefined) {
            this._comments.push({
                'Id': this._comments.length + 1,
                'Username': username,
                'Content': content,
                'Replies': []
            });
            return `${username} commented on ${this.title}`;
        } else if (toFind) {
            toFind['Replies'].push({
                'Id': `${toFind['Id']}.${toFind['Replies'].length + 1}`,
                'Username': username,
                'Content': content
            });
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let result = [];
        result.push(`Title: ${this.title}`);
        result.push(`Creator: ${this.creator}`);
        result.push(`Likes: ${this._likes.length}`);
        result.push('Comments:');

        if (sortingType === 'asc') {
            this._comments.sort((a, b) => {
                return a['Id'] - b['Id'];
            });

            this._comments.forEach(el => {
                if (el['Replies'].length === 0) {
                    result.push(`-- ${el['Id']}. ${el['Username']}: ${el['Content']}`);
                } else {
                    el['Replies'].sort((a, b) => {
                        return a['Id'] - b['Id'];
                    })
                    let arr = el['Replies'].map(el1 => el1 = `--- ${el1['Id']}. ${el1['Username']}: ${el1['Content']}`);

                    result.push(`-- ${el['Id']}. ${el['Username']}: ${el['Content']}\n${arr.join('\n')}`);
                }

            });
        } else if (sortingType === 'desc') {
            this._comments.sort((a, b) => {
                return b['Id'] - a['Id'];
            });

            this._comments.forEach(el => {
                if (el['Replies'].length === 0) {
                    result.push(`-- ${el['Id']}. ${el['Username']}: ${el['Content']}`);
                } else {
                    el['Replies'].sort((a, b) => {
                        return b['Id'] - a['Id'];
                    })
                    let arr = el['Replies'].map(el1 => el1 = `--- ${el1['Id']}. ${el1['Username']}: ${el1['Content']}`);

                    result.push(`-- ${el['Id']}. ${el['Username']}: ${el['Content']}\n${arr.join('\n')}`);
                }

            });
        } else if (sortingType === 'username') {
            this._comments.sort((a, b) => {
                return a['Username'].localeCompare(b['Username']);
            });

            this._comments.forEach(el => {
                if (el['Replies'].length === 0) {
                    result.push(`-- ${el['Id']}. ${el['Username']}: ${el['Content']}`);
                } else {
                    el['Replies'].sort((a, b) => {
                        return a['Username'].localeCompare(b['Username']);
                    })
                    let arr = el['Replies'].map(el1 => el1 = `--- ${el1['Id']}. ${el1['Username']}: ${el1['Content']}`);

                    result.push(`-- ${el['Id']}. ${el['Username']}: ${el['Content']}\n${arr.join('\n')}`);
                }

            });
        }


        return result.join('\n');
    }
}


let art = new Story("My Story", "Anny");
console.log(art.likes)
console.log(art.like("John"))
console.log(art.likes)
// console.log(art.dislike("Sally"))
console.log(art.like("Ivan"))
console.log(art.like("Steven"))
// console.log(art.like("Steven"))
// console.log(art.like("Anny"))
console.log(art.likes)
console.log(art.comment("Anny", "Some Content"))
console.log(art.comment("Ammy", "New Content", 1))
console.log(art.comment("Zane", "Reply", 2))
console.log(art.comment("Jessy", "Nice :)"))
console.log(art.comment("SAmmy", "Reply@", 2))

console.log(art.toString('asc'))