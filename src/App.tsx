export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        
        {/* Logo (optional) */}
        <div style={styles.logo}>
          ELEVIONIQUE
        </div>

        <h1 style={styles.heading}>
          Something Powerful is Coming
        </h1>

        <p style={styles.subtext}>
          Elevionique is building a next-generation wellness platform designed to support your health, energy, and longevity.
        </p>

        <p style={styles.subtext}>
          We’re launching soon.
        </p>

        <div style={styles.emailBox}>
          <input
            type="email"
            placeholder="Enter your email"
            style={styles.input}
          />
          <button style={styles.button}>
            Notify Me
          </button>
        </div>

        <p style={styles.footer}>
          © {new Date().getFullYear()} Elevionique. All rights reserved.
        </p>

      </div>
    </main>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  container: {
    height: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: "linear-gradient(135deg, #0f172a, #1e3a8a)",
    color: "white",
    fontFamily: "system-ui, sans-serif",
    textAlign: "center",
    padding: "20px",
  },
  content: {
    maxWidth: "600px",
  },
  logo: {
    fontSize: "28px",
    letterSpacing: "6px",
    marginBottom: "30px",
    fontWeight: 600,
  },
  heading: {
    fontSize: "42px",
    marginBottom: "20px",
    fontWeight: 700,
  },
  subtext: {
    fontSize: "18px",
    opacity: 0.8,
    marginBottom: "15px",
  },
  emailBox: {
    display: "flex",
    marginTop: "30px",
    gap: "10px",
    justifyContent: "center",
    flexWrap: "wrap",
  },
  input: {
    padding: "12px 16px",
    borderRadius: "8px",
    border: "none",
    minWidth: "250px",
  },
  button: {
    padding: "12px 18px",
    borderRadius: "8px",
    border: "none",
    backgroundColor: "#22c55e",
    color: "white",
    fontWeight: 600,
    cursor: "pointer",
  },
  footer: {
    marginTop: "40px",
    fontSize: "12px",
    opacity: 0.6,
  },
};