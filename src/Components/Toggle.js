const [flag, setFlag] = React.useState(true);
  const Title = "Title";
  return(
    <div>
      {flag && <h1>{Title}</h1>}
      <button onClick={() => setFlag(prev => !prev)}>Toggle</button>
    </div>
  )