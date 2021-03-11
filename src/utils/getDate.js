export default function getDate() {
  let options = { year: "numeric", month: "long", day: "numeric" };
  let today = new Date();
  return today.toLocaleDateString("en-US", options);
}
