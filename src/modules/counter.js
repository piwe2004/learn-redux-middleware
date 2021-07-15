// 액션함수
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';

// 액션 생성 함수
export const increase = () => ({type:INCREASE});
export const decrease = () => ({type:DECREASE});

// 초기값 (상태가 객체가 아니라 그냥 숫자여도 상관없습니다.)