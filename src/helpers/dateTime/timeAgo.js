import TimeAgo from 'javascript-time-ago';
import id from 'javascript-time-ago/locale/id';

const timeAgo = time => {
  TimeAgo.addLocale(id);

  const initialize = new TimeAgo('id-ID');

  return initialize.format(time);
};

export default timeAgo;
