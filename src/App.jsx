const profile = {
  initials: "AO",
  name : "Amara Okafor",
  role : "Aspiring React Developer",
  bio : "I am learning React step by step. My goal is to build real,skills: ['HTML', 'CSS','JAVASCRIPT']",
  skills: "['HTML', 'CSS','JAVASCRIPT']"
};

const primaryButton = 
"flex-1 Cursor-pointer rounded-lg bg-cyan-700 px-4 py-2.5 font-semibold text-white transition hover: bg-cyan-800 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 active:scale-95";

const secondaryButton = 
"flex-1 cursor-pointer rounded-lg border border-slate-300 bg-white px-4 py-2.5 font-semibold text-slate-800 transition hover:bg-slate-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-700 active:scale-95";


function App(){
  return(
    <main className="flex min-h-screen items-center justify-center bg-slate-100 p-4">
    <article className="w=full max-w=sm rounded-2xl bg-white p-8 shadow-lg rind-1 ring-slate-200">
      <div 
      arail-hidden="true"
      className="mx-auto flex h-24 iems-center justify-center rounded-full bg-cyan-100 text-cyan-700">
        {profile.initials}
      </div> 

      <h1 className="mt-5 text-center text-2xl font-bold text-slate-900">
        {profile.name}
      </h1>

      <p className="text-center font-medium text-cyan-700">{profile.role}</p>
      <p className="mt-4 text-center leading-relaxed text-slate-600">{profile.bio}</p>

      <ul className="mt-5 flex-wrap justify-center gap-2">{profile.skills}</ul>

      <div className="mt-6 flex-col gap-3 sm:flex-row">
        <button className = {primaryButton} type="button">
          follow
        </button>

        <button className= {secondaryButton} type="button">message</button>

        <button 
        type= "button"
        disabled
        className="mt-3 w-full rounded-lg bg-slate-200 px-4 py-2.5 font-semibold text-slate-500 disabled:cursor-not-allowed disabled:opacity-60"
        >
          Download CV (coming soon)
        </button>
      </div>
    </article>
    </main>
  )
}

export default App;