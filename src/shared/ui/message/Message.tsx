import Text from "../text";

interface Props{
  message?:string;
}
const Message = ({message}:Props) => {
  return (
    <div>
      <Text element="h3">{message}</Text>
    </div>
  )
}

export default Message