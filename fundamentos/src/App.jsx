import './App.css'
import FirstComponent from './components/FirstComponent'
import TemplateExpression from './components/TemplateExpression'



function App() {
  return (
    <div>

{/* Chamando o componente que criamos */}
      <FirstComponent/>

{/* Chamando o segundo componente que criamos */}
      <TemplateExpression/>

    </div>
  )
}

export default App
