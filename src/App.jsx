import Search from './Components/Search';
import List from './Components/List';
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
      <Search />
      <hr />
      <List list={list} />
    </div>
  );
}
export default App;
