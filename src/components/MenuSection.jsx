export default function MenuSection() {
  const menu = [
    { name: "Lẩu Khế Thanh Mát", price: "199.000đ" },
    { name: "Lẩu Thái Tôm", price: "259.000đ" },
    { name: "Thịt Bò Mỹ", price: "89.000đ" },
    { name: "Combo Lẩu Gia Đình", price: "399.000đ" },
  ];

  return (
    <section id="menu" style={styles.container}>
      <h2>Menu</h2>
      <div style={styles.list}>
        {menu.map((item, i) => (
          <div style={styles.card} key={i}>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  list: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
    gap: "20px",
    marginTop: "30px",
  },
  card: {
    padding: "20px",
    borderRadius: "12px",
    background: "#f5faf7",
    border: "1px solid #dceee3",
  }
};
