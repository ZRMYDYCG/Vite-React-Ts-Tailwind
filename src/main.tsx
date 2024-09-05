import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// 1. ！表示是做了一个非空断言, 就是告诉编译器这个变量肯定有值, 否则会报错
/**
 * @description 不使用非空断言的写法
 *
 * const root = document.getElementById('root')
 * if (!root) {
 *  ReactDOM.createRoot(root).render(
 *   <React.StrictMode>
 *     <App />
 *   </React.StrictMode>
 * )
 * }
 * */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
