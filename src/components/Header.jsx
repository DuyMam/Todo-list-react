export default function Header() {
  return (
    <header style={styles.header}>
      <h2 style={styles.logo}>Lẩu Khế</h2>
      <nav style={styles.nav}>
        <a href="#menu">Menu</a>
        <a href="#promo">Khuyến mãi</a>
        <a href="#contact">Liên hệ</a>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    padding: "20px 40px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    background: "#ffffffcc",
    backdropFilter: "blur(10px)",
    position: "sticky",
    top: 0,
    zIndex: 100,
  },
  logo: {
    margin: 0,
    color: "#5a7f68",
    fontWeight: "bold",
    fontSize: "28px",
  },
  nav: {
    display: "flex",
    gap: "25px",
  }
};
