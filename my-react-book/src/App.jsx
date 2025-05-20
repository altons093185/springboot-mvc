import { useState } from 'react'
import { useEffect } from 'react'

import './App.css'


function App() {
  const [books, setBooks] = useState([]); // 書籍列表
  const [form, setForm] = useState({ id: null, name: '', price: '', amount: '', pub: false }); // 表單內容

  const API_URL = "http://localhost:8080/book";

  // 讀取書籍資料

  useEffect(() => {
    fetchBooks();
  }, []);


// 讀取書籍資料  
  const fetchBooks = async () => {
    try {
      const res = await fetch(API_URL);
      const result =  await res.json();
      setBooks(result.data || []);
    } catch (error) {
      console.error('讀取書籍錯誤:', error);
    }
  };


  // 新增或更新
  const handleAdd = () => {
   

  };

// 編輯功能
const handleEdit = () => {

}

// 刪除功能
const handleDelete = async (id) => {
  if (!window.confirm('確定要刪除這本書嗎？')) return;
  try{
    const res = await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    const result = await res.json();
    console.log(result);
    // console.log(res);
     if (res.ok) {
        fetchBooks();
      } else {
        alert(result.message || '刪除失敗');
      }
    } catch (err) {
      console.error('刪除錯誤:', err);
    }
  };


  return (
    <div>
      <h2>書籍管理系統(使用 fetch)</h2>
      <form>
        書名: <input name="name" required /><p />
        價格: <input name="price" required /><p />
        數量: <input name="amount" required /><p />
        出刊: <input name="pub" type="checkbox" /><p />
        <button type="submit" onClick={()=>handleAdd}>新增</button>
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
              <button type='button' onClick={()=>handleEdit}>編輯</button>
              <button type='button' onClick={()=>handleDelete(book.id)}>刪除</button>
            </td>
          </tr>))}

        </tbody>
      </table>
    </div>

  )
  
}

export default App