export default defineEventHandler(event => {
  return {
    message: "Welcome!",
    date: Date.now(),
  }
});
