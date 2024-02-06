const list = [
  {
    title: 'React',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'Redux',
    url: 'https://redux.js.org/',
    author: 'Anthony Obi',
    num_comments: 1,
    points: 2,
    objectID: 1,
  },
];

function App() {
  const welcome = {
    greeting: 'Hey',
    title: 'React',
  };

  return (
    <div>
      <h1>
        hello {welcome.greeting} {welcome.title} application{' '}
      </h1>
      <label htmlFor="search">Search:</label>
      <input id="search" type="text" />
      <hr />
      <ul>
        {list.map(function (item) {
          return (
            <li key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>{item.points}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default App;
