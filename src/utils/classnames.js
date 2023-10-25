function classNames(...args) {
  return args
    .flat()
    .filter(x => typeof x === "string")
    .join(" ");
}

export default classNames