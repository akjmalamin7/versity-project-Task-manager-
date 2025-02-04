import TimeIcon from "@/assets/icons/timeIcon";
import moment from "moment";
import Text from "../text";

interface Props {
  dateString?: string;
}
const DateFormate = ({ dateString }: Props) => {
  const formattedDate = moment(dateString).format("DD-MM-YYYY");

  return (
    <div className="flex gap-[4px] items-center">
      <div className="flex">
        <TimeIcon />
      </div>
      <Text size="sm" fontWeight="regular" color="white">
        {formattedDate}
      </Text>
    </div>
  );
};

export default DateFormate;
