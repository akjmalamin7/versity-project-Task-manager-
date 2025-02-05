import { TaskCount } from "@/shared/redux/features/tasks/task.models";
import Card from "@/shared/ui/card";
import Text from "@/shared/ui/text";

const AnalyticsCard = ({_id,count}:TaskCount) => {
  return (
    <Card cardStyle="border">
      <Card.CardHeader padding="md">
        <Text size="lg" element="h3" fontWeight="semiBold" color="white" className="mb-[10px]">{_id || ""}</Text>
        <Text size="lg" element="h3" fontWeight="semiBold" color="white">{count || ""}</Text>
      </Card.CardHeader>
    </Card>
  );
};

export default AnalyticsCard;
