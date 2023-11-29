import Accordion from "./components/Accordion"

function App() {
    const items = [
        {
            id:'djaidjas',
            label: 'Can I use React on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id:'sjajsa',
            label: 'Can I use JavaScript on a project?',
            content: 'You can use React on any project you want.'
        },
        {
            id: 'ajkslsa',
            label: 'Can I use CSS on a project?',
            content: 'You can use React on any project you want.'
        }
    ]

  return (
    <Accordion items />
  )
}

export default App