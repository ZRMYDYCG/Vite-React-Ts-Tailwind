import './App.css'
import TsxBasicGrammar from './01-tsx-basic/tsx-basic-grammar.tsx'
import Index from './02-react-components/Card'

function App() {
  return (
    <>
        <div>TypeScript + React + Tailwind CSS</div>
        <hr />
        <TsxBasicGrammar />
        <hr />
        <Index />
        <hr />
        <button onClick={() => window.onShow()}>调用MessageBox组件</button>
    </>
  )
}

export default App
