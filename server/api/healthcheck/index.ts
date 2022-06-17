export default defineEventHandler((event) => {
  return {
    message: "Everything is working perfectly!",
    date: Date.now(),
  };
});
