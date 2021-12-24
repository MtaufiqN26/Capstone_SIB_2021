const Articles = {
    async render() {
      return `
      <section class="services">
        <h1 class="heading"> Articles for you </h1>
        <div class="box-container">

            <div class="box">
                <img src="img/article1.jpg" alt="">
                <h3>Bercocok Tanam Dengan Sistem Hidroponik Berbasis Ramah Lingkungan Melalui Pemanfaatan Sampah Botol Plastik</h3>
                <p>Sampah plastik termasuk botol plastik adalah jenis sampah yang sangat sulit terurai sehingga menimbulkan masalah kebersihan 
                dan kesehatan lingkungan. Secara umum masyarakat belum memiliki kemampuan dalam mengolah sampah botol plastik sehingga terjadi 
                penumpukan. Sampah botol plastik tersebut belum termanfaatkan menjadi sesuatu yang berguna.</p>
                <a href="http://ejournal.urindo.ac.id/index.php/PAMAS/article/view/724" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article2.jpg" alt="">
                <h3>Sistem Pembangkit Listrik Tenaga Surya untuk Tanaman Hidroponik</h3>
                <p>Maraknya menanam tanaman dengan cara Hidroponik saat ini, banyak digemari karena tidak memerlukan tanah dan lahan yang luas. 
                Dengan menanam dengan cara hidroponik, hasil panen akan lebih cepat namun perlu untuk memperhatikan ketepatan dalam pemberian nutrisi, 
                intensitas cahaya dan suhu sekitar tanaman. Menanam hidroponik menggunakan metode NFT (Nutrient Film Technique) dibutuhkan aliran air 
                yang tetap terjaga, tujuannya untuk mengalirkan air nutrisi pada akar tanaman.</p>
                <a href="https://repository.unilak.ac.id/1578/" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article3.jpg" alt="">
                <h3>INISIASI TEKNOLOGI HIDROPONIK GUNA MEWUJUDKAN KETAHANAN PANGAN MASYARAKAT PESANTREN</h3>
                <p>Hidroponik adalah inovasi yang dilakukan untuk berbudidaya tanaman pada lahan yang sempit tanpa membutuhkan tanah sebagai
                 media tanam. Nutrisi tanaman hidroponik diaplikasikan dalam bentuk cair bersamaan dengan air yang berfungsi sebagai media. Aerasi 
                 dilakukan dengan bantuan pompa air untuk memenuhi kebutuhan udara bagi tanaman hidroponik.  Hidroponik semakin banyak diterapkan 
                 mulai dari kalangan masyarakat umum, instansi pemerintahan dan swasta serta lembaga pendidikan. </p>
                <a href="https://jurnal.umj.ac.id/index.php/JPMT/article/view/6142" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article4.jpg" alt="">
                <h3>KUALITAS MUTU SAYUR KASEPAK (KANGKUNG, SELADA, DAN PAKCOY) DENGAN SISTEM BUDIDAYA AKUAPONIK DAN HIDROPONIK</h3>
                <p>Aquaponic is considered one of alternative culture system to improve production and quality of leafy vegetables by combining 
                soil less culture and fish farming. Utilization of fish manure contained in waste water provides nutrient sources for growing plants.</p>
                <a href="https://jurnal.unej.ac.id/index.php/JAGT/article/view/15481" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article5.jpg" alt="">
                <h3>Peningkatan Pengetahuan dan Ketertarikan Remaja pada Hidroponik Berbasis Organik</h3>
                <p>Hidroponik adalah salah satu perangkat teknologi bertani untuk daerah perkotaan (urban farming) yang memiliki keterbatasan
                 lahan berupa tanah. Seiring dengan semakin meningkatnya kesadaran masyarakat akan aspek kesehatan diperlukan asupan bahan-bahan
                  organik/alami yang digunakan dalam budidaya hidroponik. Kenyataannya, hidroponik organik masih sangat jarang dikenal dan diterapkan 
                  padahal selain pertimbangan pada aspek kesehatan juga sangat memungkinkan untuk menghasilkan hasil budidaya yang tidak kalah dengan hidroponik sistem konvensional. </p>
                <a href="http://jurnal.unpad.ac.id/pkm/article/view/25365" class="btn">read more</a>
            </div>

            <div class="box">
                <img src="img/article6.jpg" alt="">
                <h3>PENERAPAN MODEL HIDROPONIK SEBAGAI UPAYA PENGHEMATAN LAHAN TANAM DI DESA BABADAN KECAMATAN NGAJUM KABUPATEN MALANG</h3>
                <p>Lahan pertanian di Kabupaten Malang semakin berkurang seluas 10-15 hektar selama 15 tahun terakhir. Konversi lahan pertanian 
                menjadi masalah yang besar untuk prospek kedepan, sehingga perlu adanya solusi. Hidroponik merupakan salah satu solusi yang dapat 
                mengatasi masalah tersebut, terutama di desa Babadan serta didukung oleh kondisi fisik wilayahnya.</p>
                <a href="http://journal2.um.ac.id/index.php/jgp/article/view/13346" class="btn">read more</a>
            </div>
            
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
  
  export default Articles;