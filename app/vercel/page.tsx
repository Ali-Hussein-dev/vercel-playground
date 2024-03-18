//======================================
const Vercel = () => {
  console.log(process.env);
  return (
    <div className="">
      Vercel environment variables
      <pre>{JSON.stringify(process.env, null, 2)}</pre>
    </div>
  );
};
export default Vercel;
