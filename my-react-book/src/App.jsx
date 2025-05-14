import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'


function App() {
  const [books, setBooks] = useState([]);
  const url = "http://localhost:8080/book";

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(data => {
        setBooks(data.data);
     })
      .catch(err => {
        console.log("載入失敗", err);
      });
  }, [])


  const handleAdd = (e) => {
  console.log("handleAdd");
  }


  return (
    <div>
      <h2>書籍管理系統(使用 fetch)</h2>
      <form>
        書名: <input name="name" required /><p />
        價格: <input name="price" required /><p />
        數量: <input name="amount" required /><p />
        出刊: <input name="pub" type="checkbox" /><p />
        <button type="submit" onClick={handleAdd}>新增</button>
      </form>
      <table border="1" cellPadding="4" cellSpacing="0">
        <caption>📖 書籍列表</caption>
        <thead>
          <tr>
          <th>ID</th>
          <th>書名</th>
          <th>價格</th>
          <th>數量</th>
          <th>出刊</th>
          <th>操作</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
          <tr key={book.id}>
            <td>{book.id}</td>
            <td>{book.name}</td>
            <td>{book.price}</td>
            <td>{book.amount}</td>
            <td>{book.pub?"是":"否"}</td>

            <td>
              <button type='button'>編輯</button>
              <button type='button'>刪除</button>
            </td>
          </tr>))}

        </tbody>
      </table>
    </div>

  )
  
}

export default App