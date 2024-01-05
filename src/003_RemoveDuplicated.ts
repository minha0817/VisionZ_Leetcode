// * 오름차순으로 정렬된 숫자 배열에서 반복되지 않는 수들을 오름차순으로 배열 앞쪽으로 모아오시오.
// * 반드시 주어진 배열을 변경할 것
// *
// * 예제 1)
// * nums = [1,1,2]
// * output = [1,2,_] 마지막 숫자는 아무거나 상관없음

// *
// * 예제 2)
// * nums = [0,0,0,1,2,2,2,3,3,3,3,4,4,5]
// * output = [0,1,2,3,4,5,_,_,_,_,_,_,_,_] 마지막 숫자들은 아무거나 상관없음

//

function removeDuplicated(nums: number[]): number {

  // const existedNumSet = new Set(); 

  // existedNumSet.add(nums[0]);
  // for (let i = 1; i < nums.length; i++) {
  //   if (existedNumSet.has(nums[i])) {
  //     nums.splice(i, 1);
  //     i = i - 1
  //   } else {
  //     existedNumSet.add(nums[i]);
  //   }
  // }
  // return existedNumSet.size

    //만약에 nums[i]가 그 전 index의 애랑 비교했을때 같으면 
    //그 nums[i]을 지우고 인덱스도 하나 줄여 
    //다르면 그 다음 인덱스로 넘어가 
    for(let i =0; i < nums.length; i++) {
      if(nums[i] === nums[i+1]) {
        nums.splice(i +1, 1)
        i = i - 1
      }
    }
    console.log('nums', nums);
    return nums.length

}

console.log("result", removeDuplicated([0,0,0,1,2,2,2,3,3,3,3,4,4,5]));
