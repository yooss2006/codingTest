function solution(bridge_length, weight, truck_weights) {
  let bridge = Array(bridge_length).fill(0);
  let bridge_truck_total_weight = 0;
  let answer = 0;
  while (truck_weights.length + bridge_truck_total_weight) {
    ++answer;
    let escape_truck_weight = bridge.shift();
    bridge_truck_total_weight -= escape_truck_weight;
    const go_truck_weight = truck_weights[0];
    if (bridge_truck_total_weight + go_truck_weight > weight) {
      bridge.push(0);
    } else {
      let cur_truck_weight = truck_weights.shift() ?? 0;
      bridge.push(cur_truck_weight);
      bridge_truck_total_weight += cur_truck_weight;
    }
  }
  return answer;
}

console.log(solution(100, 100, [10, 10, 10, 10, 10, 10, 10, 10, 10, 10]));
