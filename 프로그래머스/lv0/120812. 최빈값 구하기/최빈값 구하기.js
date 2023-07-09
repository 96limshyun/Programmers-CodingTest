function solution(array) {
    let sort_array = array.sort((a,b) => a - b);
    let Cnt = 0;
    let Max = -1 // 최빈값
    let MaxRepeatCnt = 0; // 최빈값이 몇번 반복 되는지
    let ReaeatCnt = 0;    // 현재 똑같은 숫자가 몇번 등장했는지
    let BeforeNumber = -1; // 지금 보고있는 숫자 이전 숫자
    let isDupMax = false;
    while(Cnt < array.length){
        if (BeforeNumber !== array[Cnt]) {
            RepeatCnt = 1;
        } else {
            RepeatCnt = RepeatCnt + 1;
        }
        
        if(RepeatCnt === MaxRepeatCnt) {
            if(Max !== array[Cnt]){
                isDupMax = true;
            }
        }
        
        if (RepeatCnt > MaxRepeatCnt) {
            Max = array[Cnt];
            MaxRepeatCnt = RepeatCnt;
            isDupMax = false;
        }
        BeforeNumber = array[Cnt];
        Cnt = Cnt + 1;
    }

    if (isDupMax) return -1;
    return Max;
}

