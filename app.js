// functions
const findFail = (elm, count) => {
  if (parseInt(elm[count].textContent) < 60) {
    elm[count].style.color = "#FF0000";
  }
};

const find100 = (elm, count) => {
  if (parseInt(elm[count].textContent) === 100) {
    elm[count].style.backgroundColor = "#FFF64D";
  }
};

const getAvg = (elm, count) => {
  let sum = 0;
  for (let j = 2; j < elm.length; j++) {
    sum += parseInt(elm[j].textContent);
  }
  return sum / count;
};

const getRank = (arr) =>
  arr.map((x, y, z) => z.filter((w) => w > x).length + 1);

// 新增平均、排名欄位
const thead = document.querySelector("thead tr");
const node1 = document.createElement("th");
node1.innerText = "avg";
thead.append(node1);
const node2 = document.createElement("th");
node2.innerText = "rank";
thead.append(node2);

// 選定 tbody 表格位置
const trs = document.querySelectorAll("tbody tr");
let avg = [];

for (let i = 0; i < trs.length; i++) {
  const ths = trs[i].querySelectorAll("th");
  let subjectCount = 4;
  const nodeAvg = document.createElement("th");
  nodeAvg.innerText = `${getAvg(ths, subjectCount)}`;
  trs[i].append(nodeAvg);
  avg.push(getAvg(ths, subjectCount));
  for (let j = 2; j < ths.length; j++) {
    findFail(ths, j);
    find100(ths, j);
  }
}

//最後再求出排名;
for (let i = 0; i < trs.length; i++) {
  const node = document.createElement("th");
  node.innerText = `${getRank(avg)[i]}`;
  trs[i].append(node);
}
