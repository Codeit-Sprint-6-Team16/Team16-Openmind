export const timeDifference = (createdAt) => {
  const now = new Date();
  const before = new Date(createdAt);
  const time = now - before; //getTime차이
  const timeDifferenceInSeconds = Math.floor(time / 1000);
  // 초를 시, 분, 초로 변환
  const hours = Math.floor((timeDifferenceInSeconds % 86400) / 3600);
  const day = Math.floor(timeDifferenceInSeconds / 86400);
  return { day: day, hours: hours };
};
// 년, 주, 일, 시, 분, 초
//
// `${day}일전` `${hours}시간전`
