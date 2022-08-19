const posts = [];

setInterval(getPosts, 1000)

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((posts) => {
            output += `<li>${posts.title} - last updated ${~~(((new Date().getTime()) - (posts.createdAt)) / 1000)} seconds ago</li>`;
        });
        document.body.innerHTML = output;
    }, 3000);
}

const createPost = async (post) => {

    try{
        return await new Promise((resolve, reject) => {
            setTimeout(() => {
                const error = false;
                if (!error) {
                    resolve(posts.push({ ...post, createdAt: new Date().getTime() }))
                } else {
                    reject('Error: Something went wrong!');
                }
            }, 2000);
        })
    } catch(err) {
        console.log(err)
    }
}

const deletePost = async () => {

try{
    return await new Promise((resolve, reject) => {
        setTimeout(() => {
            let error = false;
            if (posts.length === 0) {
                error = true
            }
            if (!error) {
                resolve(posts.pop())
            } else {
                reject('Error: Array is empty now!');
            }
        }, 2000);
    })
}catch(err) {
    console.log(err)
}
}

function updateLastUserActivityTime() {

    return new Promise((resolve) => {
        setTimeout(() => {
            posts.createdAt = new Date().toLocaleString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true })
            resolve(posts.createdAt)
            console.log(posts.createdAt)
        }, 1000);
    })
}

function userupdatesPost() {
    Promise.all([createPost, updateLastUserActivityTime])
        .then((values) => console.log(values)).catch(err => console.log(err));
}

async function init() {
    await createPost({ title: 'Post 1', body: 'This is post 1' })
    await createPost({ title: 'Post 2', body: 'This is post 2' })
    await createPost({ title: 'Post 3', body: 'This is post 3' })
    await createPost({ title: 'Post 4', body: 'This is post 4' })
    await deletePost()
    updateLastUserActivityTime().then(userupdatesPost)
    userupdatesPost()
    getPosts()
}

init()
