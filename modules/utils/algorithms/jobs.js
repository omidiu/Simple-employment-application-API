const lowerIdx = (arr, min) => {
  let l = 0,
    h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid]["salary"] >= min) h = mid - 1;
    else l = mid + 1;
  }
  return l;
};

const higherIdx = (arr, max) => {
  let l = 0,
    h = arr.length - 1;
  while (l <= h) {
    let mid = Math.floor((l + h) / 2);
    if (arr[mid]["salary"] <= max) l = mid + 1;
    else h = mid - 1;
  }
  return h;
};

const jobsInRange = (jobs, min, max) => {
  jobs = jobs.sort((job1, job2) => job1.salary - job2.salary);

  const l = lowerIdx(jobs, min);
  const h = higherIdx(jobs, max);

  return jobs.slice(l, h + 1);
};

module.exports = { jobsInRange };
