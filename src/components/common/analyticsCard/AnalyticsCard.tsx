import { TaskCount } from "@/shared/redux/features/tasks/task.models";
import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";

const AnalyticsCard = ({_id,count}:TaskCount) => {
  return (
    <Card cardStyle="border">
      <Card.CardHeader padding="md">
        <Text size="xl" element="h2" fontWeight="semiBold"  textAlign="center" color="white" className="mb-[10px] capitalize" >{_id || ""}</Text>
        <Text size="xl" element="h3" fontWeight="semiBold" textAlign="center"  color="white">{count || ""}</Text>
      </Card.CardHeader>
    </Card>
  );
};

export default AnalyticsCard;
