window.DANSUN_DATA = {
  me: { id: "u1", nickname: "지민", bio: "계획은 단순하게", avatar: "../../assets/avatar-dog-yellow.png" },
  projects: [
    { id: 1, name: "제주 3박 4일", description: "친구 5명 · 11월 12일 출발", owner: "지민", joined: true },
    { id: 2, name: "속초 주말 워케이션", description: "노트북 챙기고 바다 보면서 일하기", owner: "현우", joined: false },
    { id: 3, name: "부산 먹방 원정대", description: "돼지국밥부터 밀면까지 코스 정리", owner: "예린", joined: false }
  ],
  todos: [
    { owner: "지민", avatar: "../../assets/avatar-dog-yellow.png", items: [
      { id: 11, title: "성산일출봉 일출 보기", confirmed: true },
      { id: 12, title: "렌터카 예약", confirmed: true },
      { id: 13, title: "흑돼지 저녁 예약", confirmed: false } ] },
    { owner: "현우", avatar: "../../assets/avatar-dog.png", items: [
      { id: 21, title: "숙소 최종 확정", confirmed: false },
      { id: 22, title: "카페 리스트 정리", confirmed: false } ] }
  ],
  events: [
    { id: 11, title: "성산일출봉 일출", startHour: 6, endHour: 8 },
    { id: 12, title: "우도 자전거", startHour: 10, endHour: 12 },
    { id: 13, title: "흑돼지 저녁", startHour: 18, endHour: 20 }
  ]
};
