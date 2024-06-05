function displayLikes(likes) {
    const countofLikes=likes.length
    if (countofLikes===0){
        return 'no one likes this'
    }
    else if (countofLikes===1){
        return `${likes[0]} likes this`
    }
    else if (countofLikes===2){
        return `${likes[0]} and ${likes[1]} like this`
    }
    else if (countofLikes===3){
        return `${likes[0]}, ${likes[1]} and ${likes[2]} like this`
    }
    else if (countofLikes>3){
        return `${likes[0]}, ${likes[1]} and ${countofLikes-2} others like this`
    }
}

module.exports = displayLikes;


// - If no one likes it, it should return `'no one likes this'`
// - If one person likes it, it should return `'{name} likes this'`
// - If two people like it, it should return `'{name1} and {name2} like this'`
// - If three people like it, it should return `'{name1}, {name2} and {name3} like this'`
// - If more than three people like it, it should return `'{name1}, {name2} and {x} others like this'`