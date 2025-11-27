export default function Banner() {
  return (
    <section style={styles.banner}>
      <h1 style={styles.title}>Lẩu Khế – Tươi Ngon & Đậm Vị</h1>
      <p style={styles.desc}>
        Thưởng thức nồi lẩu chuẩn vị với nước dùng thanh mát, nguyên liệu sạch và không gian dễ chịu.
      </p>
      <button style={styles.btn}>Đặt bàn ngay</button>
    </section>
  );
}

const styles = {
  banner: {
    textAlign: "center",
    padding: "120px 20px",
    background: "linear-gradient(#eaf7f1, #ffffff)",
  },
  title: {
    fontSize: "40px",
    color: "#5a7f68",
  },
  desc: {
    marginTop: "10px",
    fontSize: "18px",
    color: "#555",
  },
  btn: {
    marginTop: "25px",
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    background: "#7fbf98",
    border: "none",
    cursor: "pointer",
    color: "white",
  }
};
