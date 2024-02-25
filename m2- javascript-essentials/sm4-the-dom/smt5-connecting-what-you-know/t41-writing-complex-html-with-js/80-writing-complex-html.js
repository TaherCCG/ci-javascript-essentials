let books = [
    {
        title: "The Girl With the Dragon Tattoo",
        author: "Stieg Larsson",
        published: 2005
    },
    {
        title: "Harry Potter and the Goblet of Fire",
        author: "JK Rowling",
        published: 2000
    },
    {
        title: "Thinking, Fast and Slow",
        author: "Daniel Kahneman",
        published: 2011
    },
    {
        title: "Days Without End",
        author: "Sebastian Barry",
        published: 2016
    },
    {
        title: "The Silence of the Girls",
        author: "Pat Barker",
        published: 2018
    },
];

// Write your code here

function buildTable() {
    let html = `
    <table>
      <thead>
        <tr>
          <th>Title</th>
          <th>Author</th>
          <th>Published</th>
        </tr>
      </thead>
      <tbody>
  `;
    for (let book of books) {
        let rowHtml = `
    <tr class="book-row">
      <td>${book.title}</td>
      <td>${book.author}</td>
      <td>${book.published}</td>
    </tr>
  `;
        html += rowHtml;
    }
    html += `
    </tbody>
  </table>
  `;

    return html;

}

let table = buildTable();

document.getElementById('books-table').innerHTML = table;
