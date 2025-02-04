import Text from "@/shared/ui/text";
interface Props{
  title?:string;
}
const PageHeader = ({title="Page title"}:Props) => {
  return (
    <div className="pt-[10px] pb-[20px]">
      <Text element="h1" fontWeight="medium" color="white" size="xl">
       {title}
      </Text>
    </div>
  );
};

export default PageHeader;
