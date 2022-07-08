// default thread data
var defaultThreads = [
  {
    id: 1,
    title: "How is everyone feeling about the signing of Gabriel Jesus?",
    author: "Aaron",
    date: Date.now(),
    content: "Fabrizio Romano announced earlier that a £45m deal has been struck with Man City for the Brazilian forward.",
    comments: [
      {
        author: "Jack",
        date: Date.now(),
        content: "Absolutely stoked! Think this is a brilliant bit of business from Edu and Mikel"
      },
      {
        author: "MR",
        date: Date.now(),
        content: "Buzzing!!!"
      }
    ]
  },
  {
    id: 2,
    title: "Don't think Raphinha is worth it",
    author: "Ritwik",
    date: Date.now(),
    content: "Leeds have reportedly set the asking price at £65m with both Spurs and Chelsea interested.",
    comments: [
      {
        author: "James",
        date: Date.now(),
        content: "Disagree mate, I think he would be a quality addition especially if we can move Pepe on."
      },
      {
        author: "Harry",
        date: Date.now(),
        content: "I feel the same way, we should be prioritizing our midfield options."
      }
    ]
  }
];

// if threads exist in localStorage, get and display else save default threads 
var threads = defaultThreads;
if (localStorage && localStorage.getItem('threads')) {
  threads = JSON.parse(localStorage.getItem('threads'));
} else {
  threads = defaultThreads;
  localStorage.setItem('threads', JSON.stringify(defaultThreads));
}