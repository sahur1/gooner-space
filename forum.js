// forum app code from https://youtu.be/Hixx31BX5kY
var container = document.querySelector('ol');
// add default threads
for (let thread of threads) {
  var html = `
    <li class="row">
      <a href="/thread.html?${thread.id}">
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
      </a>
    </li>
  `;
  container.insertAdjacentHTML('beforeend', html);
}

// write thread html using thread object
function addThread(thread) {
  var threadHtml = `
    <li class="row">
      <a href="/thread.html?${thread.id}">
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
      </a>
    </li>
  `;
  container.insertAdjacentHTML('afterbegin', threadHtml);
}

// add event listener on thread submit button
var btn = document.getElementById('add-thread');
btn.addEventListener('click', function() {
  // create thread object with user input
  var txt = document.querySelector('textarea');
  var thread = {
    id: threads.length + 1,
    title: txt.value,
    author: "Ritwik",
    date: Date.now(),
    content: "Thread content",
    comments: []
  };
  // insert thread into thread list, reset input value and save thread list
  addThread(thread);
  txt.value='';
  threads.unshift(thread);
  localStorage.setItem('threads', JSON.stringify(threads));
});