export function Navbar() {
  return (
    <nav className="navbar">
      <h1>Blog</h1>
      <div className="links">
        <a href="/">Home</a>
        <a href="/create" style={
          {
            color: "white",
            backgroundColor: "#f1356d",
            borderRadius: "8px"
          }
        }>Novo post</a>
      </div>
    </nav>
  );
}