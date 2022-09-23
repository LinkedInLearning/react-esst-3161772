export function getTimeFromServer() {
  return new Promise((r) => {
    setTimeout(() => {
      const date = new Date();
      r(`${date.getHours()}:${date.getMinutes()}`);
    }, 350);
  });
}
