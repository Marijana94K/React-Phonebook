

function List({ list, onDelete }) {
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>Ime</th>
            <th>Telefon</th>
          </tr>
        </thead>
        <tbody>
          {list.map((contact) => (
            <tr className="directory" key={contact.id}>
              <td className="directory__item">{contact.name}</td>
              <td className="directory__item">{contact.phone}</td>
              <td>
      
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default List;