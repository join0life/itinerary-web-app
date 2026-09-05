import { clsx, type ClassValue } from "clsx";
import { min } from "date-fns";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

const adjectives = [
  "행복한",
  "슬픈",
  "화난",
  "지친",
  "활기찬",
  "조용한",
  "시끄러운",
  "따뜻한",
  "차가운",
  "부드러운",
  "강한",
  "약한",
  "빠른",
  "느린",
  "밝은",
  "어두운",
  "현명한",
  "용감한",
  "겸손한",
  "정직한",
  "친절한",
  "엄격한",
  "귀여운",
  "멋진",
  "신비로운",
  "공정한",
  "냉철한",
  "신중한",
  "논리적인",
  "객관적인",
  "분석적인",
  "통찰력있는",
  "예리한",
  "진지한",
  "사려깊은",
  "정의로운",
  "합리적인",
  "균형잡힌",
  "엄정한",
  "철저한",
  "똑똑한",
  "차분한",
  "상냥한",
  "대담한",
  "유쾌한",
  "활발한",
  "열정적인",
  "창의적인",
  "재미있는",
  "낙천적인",
];

const nouns = [
  "판다",
  "호랑이",
  "독수리",
  "돌고래",
  "여우",
  "늑대",
  "곰",
  "사자",
  "매",
  "고래",
  "토끼",
  "코끼리",
  "기린",
  "원숭이",
  "펭귄",
  "고슴도치",
  "다람쥐",
  "공룡",
  "앵무새",
  "햄스터",
];

export const getRandomNickname = () => {
  const adjective = adjectives[Math.floor(Math.random() * adjectives.length)];
  const noun = nouns[Math.floor(Math.random() * nouns.length)];
  const number = Math.floor(Math.random() * 100);

  return `${adjective}${noun}${number}`;
};

export const combinedDateAndTime = (date: Date, time: string) => {
  const [hours, minutes] = time.split(":");

  const newDate = new Date(date);
  newDate.setHours(Number(hours), Number(minutes), 0, 0);

  return newDate;
};

/**
 *  오늘 날짜가 포함된 주의 날짜(ex. 29, 30, 31,...) 반환
 * @param baseDate: Date
 * @returns date: Date[]
 */
export const getThisWeekDates = (baseDate: Date) => {
  const day = baseDate.getDay();

  const sunday = new Date(baseDate);
  sunday.setDate(baseDate.getDate() - day);

  return Array.from({ length: 7 }).map((_, index) => {
    const date = new Date(sunday);
    date.setDate(sunday.getDate() + index);
    return date;
  });
};

/**
 * 해당 날짜가 속한 주의 일요일 반환
 * @param date: Date
 * @returns 
 */
export const getWeekStart = (date: Date) => {
  const d = new Date(date);
  const day = d.getDay(); // 0 (일) ~ 6 (토)
  d.setDate(d.getDate() - day);
  return d;
};

export const getGridRow = (date: Date) => {
  const hour = date.getHours();
  const minutes = date.getMinutes();

  return hour + minutes / 60 + 2;
};

export const isSameDay = (a: Date, b: Date) =>
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

/**
 * 오늘 날짜가 포함된 주의 일요일 00:00:00.000부터
 * 토요일 23:59:59:999까지의 Date 객체를 반환
 * @param date: Date
 * @returns { start: Date, end: Date }
 */
export const getThisWeekRange = (date: Date) => {
  const start = new Date(date);
  start.setDate(start.getDate() - start.getDay());
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 7);
  end.setHours(0, 0, 0, 0);

  return { start, end };
};

/**
 * Date 객체를 "YYYY년 M월 D일 H시 m분" 형식의 문자열로 반환
 * ex. 2026. 01. 06. 오전 06:33
 * @param date: Date
 * @returns string
 */
export const formatDateWithTime = (date: Date) => {
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
};

/**
 * Date 객체를 "YYYY년 M월 D일" 형식의 문자열로 반환
 * ex. 2026. 01. 06.
 * @param date: Date
 * @returns string
 */
export const formatDate = (date: Date) => {
  return date.toLocaleString("ko-KR", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });
};
