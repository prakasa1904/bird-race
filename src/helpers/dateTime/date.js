import 'dayjs/locale/id';
import dayjs from 'dayjs';

export default function dateWrapper(dateInput) {
  return {
    new: dayjs(dateInput).$d,
    format: format =>
      dayjs(dateInput)
        .locale('en')
        .format(format),
  };
}
