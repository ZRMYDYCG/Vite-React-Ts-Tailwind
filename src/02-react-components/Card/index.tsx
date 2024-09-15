/**
 * @Author: ZRM
 * @Date: 2024-09
 * @LastEditors: ZRM
 * @LastEditTime: 2024-09
 * @Description: Card 组件, React 中没有全局组件和局部组件的概念
 */
import './index.css'
export default function Index() {
    return <div className="card">
        <header>
            <div>标题</div>
            <div>副标题</div>
        </header>
        <main>
            内容区域
        </main>
        <footer>
            <button>确定</button>
            <button>取消</button>
        </footer>
    </div>
}