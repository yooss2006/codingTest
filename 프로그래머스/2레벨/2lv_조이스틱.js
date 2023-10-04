function solution(name) {
  const target = name.split("");
  const target_visited = [...target].map((item) =>
    item === "A" ? true : false
  );
  let cur_situation = [Array(name.length).fill("A"), 0];
  let answer = 0;

  while (cur_situation[0].join("") !== name) {
    if (!target_visited[cur_situation[1]]) {
      const targetAscii = target[cur_situation[1]].codePointAt();
      const goLength = targetAscii - "A".codePointAt();
      const backLength = "Z".codePointAt() + 1 - targetAscii;
      const gap = goLength < backLength ? goLength : backLength;
      answer += gap;
      cur_situation[0][cur_situation[1]] = target[cur_situation[1]];
      target_visited[cur_situation[1]] = true;
    }
    let nextIndex = target.findIndex((_, index) => !target_visited[index]);
    if (nextIndex === -1) return answer;
    const moveGap =
      Math.abs(cur_situation[1] - nextIndex) <
      Math.abs(target.length + cur_situation[1] - nextIndex)
        ? Math.abs(cur_situation[1] - nextIndex)
        : Math.abs(target.length + cur_situation[1] - nextIndex);
    console.log(moveGap, cur_situation, nextIndex);
    answer += moveGap;
    cur_situation[1] = nextIndex;
  }
  return answer;
}

console.log(solution("BABABABABABBABABAAB"));
