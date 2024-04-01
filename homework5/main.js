const person = {
    name: 'Alan Turing',
    theme: {
      backgroundColor: 'black',
      color: 'pink'
    }
  };
  
  export default function TodoList() {
    return (
      <div style={person.theme}>
        <h1>{person.name}'s Todos</h1>
        <img
          className="avatar"
          src="https://upload.wikimedia.org/wikipedia/commons/1/17/Alan_Turing_%281912-1954%29_in_1936_at_Princeton_University.jpg"
          alt="Alan Turing"
        />
        <ul>
          <li>Known as father of computer science</li>
          <li>Developed the Turing Machine in 1936</li>
          <li>During World War 2, Turing broke the German Enigma Code</li>
        </ul>
      </div>
    );
  }