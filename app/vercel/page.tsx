//======================================
const Vercel = () => {
  return (
    <div className="bg-slate-800 min-h-screen text-slate-200 px-3">
      <h1 className="mb-3">Vercel environment variables</h1>

      <div className="space-y-1">
      {Object.entries(process.env).map(([k,v])=> (
        <div key={k}>
          <span className="text-slate-400 mr-2">{k}</span> : {v}
          </div>
      )
      )}
      </div>
    </div>
  );
};
export default Vercel;
