const About = {
  async render() {
    return `
      <section class="about" id="about">
          <div class="image">
              <img src="icons/layer2.svg" alt="">
          </div>
      
          <div class="content">
              <h3>Hydroponics is the key</h3>
              <p>Dilansir dari Balai Besar Pelatihan Pertanian Lembang, hidroponik adalah teknik budidaya yang menggunakan arang sekam atau media tanam lainnya dengan memanfaatkan unsur hara yang dibutuhkan tanaman dalam bentuk cair yang sudah diracik untuk diberikan ke tanaman dengan cara disiramkan atau melalui irigasi tetes.</p>
              <p>Budidaya sayuran bisa dilakukan dengan cara hidroponik. Sayuran yang umum ditanam dengan cara hidroponik adalah selada, kangkung, bayam, seledri, tomat, dan sebagainya.</p>
              <p>Menanam tanaman dengan sistem hidroponik merupakan cara yang ramah lingkungan karena budidayanya tidak membutuhkan pestisida secara berlebihan. Sistem hidroponik pun dapat menjadi solusi untuk berkebun di lahan yang sempit atau terbatas (urban farming). Menanam dengan sistem hidroponik dapat menggunakan berbagai media tanaman, salah satu yang sering digunakan adalah rockwool. Rockwool digunakan sebagai media tanam hidroponik karena memiliki kemampuan menahan air dan udara dalam jumlah besar yang sangat dibutuhkan untuk pertumbuhan akar dan penyerapan nutrisi pada metode hidroponik.</p>
              <a href="#" class="btn">read more</a>
          </div>
      </section>
      `;
  },

  async afterRender() {
    const main = document.querySelector('#main-content');
    main.style.display = 'none';
    try {
      main.style.display = 'block';

    } catch (err) {
      main.style.display = 'block';
      console.log(err);
    }
  },
};

export default About;
