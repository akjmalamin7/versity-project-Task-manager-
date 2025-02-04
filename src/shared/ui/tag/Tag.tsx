import Text from "../text";

interface TagProps {
  tag: string;
}
const Tag = ({ tag }: TagProps) => {
  let content = null;
  switch(tag){
    case "new":{
      content = <Text className="bg-blue-300550" color="white">{tag}</Text>
    }
    break;
    case "progress":{
      content = <Text className="bg-green-300" color="white">{tag}</Text>
    }
    break;
    case "completed":{
      content = <Text className="bg-green-600" color="white">{tag}</Text>
    }
    break;
    case "canceled":{
      content = <Text className="bg-red-600" color="white">{tag}</Text>
    }
    break;
    default:{
      content = <Text className="bg-blue-300550" color="white">{tag}</Text>
    }
    break

  }
  return <>{content}</>
};

export default Tag;
