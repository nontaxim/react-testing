import { GreetProps } from './greet.types'

export const Greet = (props: GreetProps) => {
  return <div>hello {props.name ? props.name : 'Guest'}</div>
}
