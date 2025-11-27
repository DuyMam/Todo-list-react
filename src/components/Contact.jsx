export default function Contact() {
  return (
    <section id="contact" style={styles.container}>
      <h2>Liên hệ</h2>
      <p>📍 Địa chỉ: Đang cập nhật</p>
      <p>☎ Hotline: 0123 456 789</p>
      <button style={styles.btn}>Gọi đặt bàn</button>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  btn: {
    marginTop: "20px",
    padding: "12px 24px",
    borderRadius: "8px",
    background: "#7fbf98",
    color: "white",
    border: "none",
    cursor: "pointer",
  }
};
