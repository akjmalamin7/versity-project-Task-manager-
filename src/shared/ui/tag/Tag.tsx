import Text from "../text";

interface TagProps {
  tag: string;
}
const Tag = ({ tag }: TagProps) => {
  let content = null;
  switch(tag){
    case "new":{
      content = <Text className="bg-blue-700 px-[8px] py-[1px] rounded-[20px] capitalize" size="sm" color="white">{tag}</Text>
    }
    break;
    case "progress":{
      content = <Text className="bg-teal-700 px-[8px] py-[1px] rounded-[20px] capitalize" size="sm" color="white">{tag}</Text>
    }
    break;
    case "completed":{
      content = <Text className="bg-green-700 px-[8px] py-[1px] rounded-[20px] capitalize" size="sm" color="white">{tag}</Text>
    }
    break;
    case "canceled":{
      content = <Text className="bg-red-700 px-[8px] py-[1px] rounded-[20px] capitalize" size="sm" color="white">{tag}</Text>
    }
    break;
    default:{
      content = <Text className="bg-blue-500 px-[8px] py-[1px] rounded-[20px] capitalize" size="sm" color="white">{tag}</Text>
    }
    break

  }
  return <>{content}</>
};

export default Tag;
