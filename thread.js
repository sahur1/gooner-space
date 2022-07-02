// find and display thread
var id = window.location.search.slice(1);
var thread = threads.find(t => t.id == id);
var header = document.querySelector('.forum-header');
var headerHtml = `
    <h4 class="title">
        ${thread.title}
    </h4>
    <div class="bottom">
        <p class="timestamp">
            ${new Date(thread.date).toLocaleString()}
        </p>
        <p class="comment-count">
            ${thread.comments.length} comments
        </p>
    </div>
`;
header.insertAdjacentHTML('beforeend', headerHtml);

// write comment html using comment object
function addComment(comment) {
    var commentHtml = `
        <div class="comment">
            <div class="comment-meta">
                <p class="user">
                    ${comment.author}
                </p>
                <p class="comment-ts">
                    ${new Date(comment.date).toLocaleString()}
                </p>
            </div>
            <div class="comment-content">
                ${comment.content}
            </div>
        </div>
    `;
    comments.insertAdjacentHTML('beforeend', commentHtml);
}

// add comments for default threads
var comments = document.querySelector('.comments');
for (let comment of thread.comments) {
    addComment(comment);
}

// insert comment on user submission
var btn = document.querySelector('button');
btn.ariaDisabled = true;
btn.addEventListener('click', function() {
    var txt = document.querySelector('textarea');
    var comment = {
        content: txt.value,
        date: Date.now(),
        author: 'Aaron'
    };
    addComment(comment);
    txt.value = '';
    thread.comments.push(comment);
    localStorage.setItem('threads', JSON.stringify(threads));
});