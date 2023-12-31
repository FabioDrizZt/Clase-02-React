import AnimatedButton from './AnimatedButton'
import Counter from './Counter'
import CounterClass from './CounterClass'

export default function LocalApp() {
  return (
    <div>
      <AnimatedButton />
      <Counter init={0} />
      <CounterClass />
    </div>
  )
}
