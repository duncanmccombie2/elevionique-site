export default function Home() {
  return (
    <main style={styles.container}>
      <div style={styles.content}>
        
        {/* Logo / Brand */}
        <div style={styles.logo}>
          ELEVIONIQUE
        </div>

        <h1 style={styles.heading}>
          - Something Powerful Is Coming -
        </h1>

        <p style={styles.subtext}>
          Targeted daily nutrition designed to support energy, vitality, and long-term health.
        </p>

        <p style={styles.subtext}>
          We’re building something powerful. Launching soon.
        </p>

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
    maxWidth: "900px",
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
  footer: {
    marginTop: "40px",
    fontSize: "12px",
    opacity: 0.6,
  },
};