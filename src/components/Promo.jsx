export default function Promo() {
  return (
    <section id="promo" style={styles.container}>
      <h2>Khuyến mãi</h2>
      <div style={styles.box}>
        🎉 Giảm 10% cho hóa đơn từ 300.000đ  
        🎉 Tặng nước ngọt cho nhóm 4 người  
      </div>
    </section>
  );
}

const styles = {
  container: {
    padding: "80px 20px",
    textAlign: "center",
  },
  box: {
    marginTop: "20px",
    background: "#e9f4ef",
    padding: "25px",
    borderRadius: "10px",
    display: "inline-block",
    fontSize: "18px",
  }
};
