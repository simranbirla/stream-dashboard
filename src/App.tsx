
import './App.css'
import DataVisualization from './components/DataVisualization'
import KeyMetrics from './components/KeyMetrics'
import Table from './components/table/Table'

function App() {

  return (
    <div className='flex h-[100vh] flex-col '>
      <KeyMetrics />
      <DataVisualization />
      <Table />
    </div>
  )
}

export default App
