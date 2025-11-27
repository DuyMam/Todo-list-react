export default function About() {
  return (
    <section style={styles.container}>
      <h2>Về Nhà hàng Lẩu Khế</h2>
      <p style={styles.text}>
        Chúng tôi mang đến trải nghiệm ẩm thực nhẹ nhàng, tươi mát và đầy đủ dưỡng chất.
        Nguyên liệu được tuyển chọn kỹ càng, nước dùng ninh củ tự nhiên.
      </p>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  text: {
    maxWidth: "700px",
    margin: "0 auto",
    fontSize: "17px",
    lineHeight: "1.6",
    color: "#666",
  }
};
