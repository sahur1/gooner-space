// forum app code from https://youtu.be/Hixx31BX5kY
var container = document.querySelector('ol');
// add default threads
for (let thread of threads) {
  addThread(thread);
}

// write thread html using thread object
function addThread(thread) {
  var threadHtml = `
    <li class="row">
      <div id="${thread.id}" class="upvotejs">
        <a class="upvote"></a>
        <span class="count">0</span>
        <a class="downvote"></a>
      </div>
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
  Upvote.create(thread.id);
}

// add event listener on thread submit button
function insertThread() {
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
}

$(function(){
  $("form[name=threadcontent]").validate({
    rules: {
      threadcontent: "required"
    },
    messages: {
      threadcontent: "Please enter your submission"
    },
    submitHandler: function(){
      insertThread();
      return false;
    }
  });

  $("form[name=location]").validate({
    rules: {
      location: "required"
    },
    messages: {
      location: "Please enter a valid address"
    }
  });
});
