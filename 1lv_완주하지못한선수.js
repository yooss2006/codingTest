function solution(functionparticipant, completion) {
  participant.sort();
  completion.sort();
  let answer = "";
  for (let i = 0; i < participant.length; i++) {
    if (participant[i] !== completion[i]) {
      return participant[i];
    }
  }
}
