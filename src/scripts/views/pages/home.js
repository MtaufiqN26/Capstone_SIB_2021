const Home = {
  async render() {
    return `
    <section class="home" id="home">
        <div class="swiper home-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="box" style="background: var(--image-color),url(img/hero-1.jpg) no-repeat;">
                        <div class="content">
                            <h3>Harta</h3>
                            <p>Tidak Akan Berguna Jika Alam Bahkan Tidak Ada.</p>
                            <a href="#main-content" class="btn">get started</a>
                        </div>
                    </div>
                </div>
                <div class="swiper-slide">
                  <div class="box second" style="background: var(--image-color), url(img/hero-2.jpg) no-repeat;">
                      <div class="content">
                          <h3>Pahamilah</h3>
                          <p> perasaan alam agar Anda tahu pentingnya alam bagi kehidupan Anda.</p>
                          <a href="#main-content" class="btn">get started</a>
                      </div>
                  </div>
              </div>
              <div class="swiper-slide">
                  <div class="box" style="background: var(--image-color), url(img/hero-3.jpg) no-repeat;">
                      <div class="content">
                          <h3>Belajarlah</h3>
                          <p>Belajarlah mencintai alam karena itu sama halnya dengan menjaga milik Tuhan</p>
                          <a href="#main-content" class="btn">get started</a>
                      </div>
                  </div>
              </div>
          </div>
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
      </div>
    </section>

    <section class="category" id="category">
        <h1 class="heading">hydroponics idea!</h1>
        <div class="box-container">
            <div class="box">
                <img src="img/1.-Selada.jpg" alt="Selada">
                <h3>Selada</h3>
                <p>Selada merupakan tanaman yang paling umum ditanam secara hidroponik, karena dapat tumbuh dengan sangat cepat dalam sistem menanam ini. Perawatannya pun tidak sulit sama sekali. Tanaman ini sangat cocok untuk pemula di bidang tanam-menanam Hidroponik.</p>
                <a href="#" class="btn">read more</a>
            </div>
            <div class="box">
                <img src="img/2.-Tomat.jpg" alt="Tomat">
                <h3>Tomat</h3>
                <p>Sayuran yang satu ini masih diperdebatkan statusnya sebagai buah atau sayur. Meskipun begitu, yang jelas tomat mengandung vitamin A yang bagus untuk kesehatan kulit dan kekebalan tubuh. Sudah banyak petani komersial yang menanam tomat secara hidroponik. .</p>
                <a href="#" class="btn">read more</a>
            </div>
            <div class="box">
                <img src="img/3.-Lobak.jpg" alt="Lobak">
                <h3>Lobak</h3>
                <p>Nah, beda dengan tanaman sayuran sebelumnya, lobak tidak membutuhkan lampu atau panas, melainkan suhu dingin. Bibit lobak tumbuh dalam jangka waktu sekitar 3-7 hari.</p>
                <a href="#" class="btn">read more</a>
            </div>
            <div class="box">
                <img src="img/4.-Kale.jpg" alt="Kale">
                <h3>Kale</h3>
                <p>Beberapa tahun belakangan, sayuran satu ini sedang sangat populer apalagi di kalangan pegiat makanan dan gaya hidup sehat. Kandungan gizi dan manfaatnya yang melimpah menjadikan sayuran ini masuk ke dalam golongan superfood.</p>
                <a href="#" class="btn">read more</a>
            </div>
            <div class="box">
                <img src="img/5.-Timun.jpg" alt="Timun">
                <h3>Timun</h3>
                <p>Timun merupakan sayuran yang memiliki banyak manfaat. Mulai dari garnish atau hiasan untuk hidangan spesial, pelengkap jus, dimakan secara mentah, sampai digunakan untuk perawatan kecantikan.</p>
                <a href="#" class="btn">read more</a>
            </div>
            <div class="box">
                <img src="img/6.-Bayam.jpg" alt="Bayam">
                <h3>Bayam</h3>
                <p>Sama dengan sayur dedaunan yang sudah disebutkan sebelumnya, bayam dapat tumbuh dengan baik jika ditanam menggunakan air. Maka dari itu, tanaman ini sangat cocok jika ditanam menggunakan sistem hidroponik.</p>
                <a href="#" class="btn">read more</a>
            </div>
        </div>
    </section>

    <section class="blogs" id="blogs">

      <h1 class="heading"> our daily posts </h1>
  
      <div class="swiper blogs-slider">
  
          <div class="swiper-wrapper">
  
              <div class="swiper-slide slide">
                  <img src="img/article1.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Bercocok Tanam Dengan Sistem Hidroponik Berbasis Ramah Lingkungan Melalui Pemanfaatan Sampah Botol Plastik</h3>
                <p>Sampah plastik termasuk botol plastik adalah jenis sampah yang sangat sulit terurai sehingga menimbulkan masalah kebersihan 
                dan kesehatan lingkungan. Secara umum masyarakat belum memiliki kemampuan dalam mengolah sampah botol plastik sehingga terjadi 
                penumpukan. Sampah botol plastik tersebut belum termanfaatkan menjadi sesuatu yang berguna.</p>
                <a href="http://ejournal.urindo.ac.id/index.php/PAMAS/article/view/724" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article2.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Sistem Pembangkit Listrik Tenaga Surya untuk Tanaman Hidroponik</h3>
                <p>Maraknya menanam tanaman dengan cara Hidroponik saat ini, banyak digemari karena tidak memerlukan tanah dan lahan yang luas. 
                Dengan menanam dengan cara hidroponik, hasil panen akan lebih cepat namun perlu untuk memperhatikan ketepatan dalam pemberian nutrisi, 
                intensitas cahaya dan suhu sekitar tanaman. Menanam hidroponik menggunakan metode NFT (Nutrient Film Technique) dibutuhkan aliran air 
                yang tetap terjaga, tujuannya untuk mengalirkan air nutrisi pada akar tanaman.</p>
                <a href="https://repository.unilak.ac.id/1578/" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article3.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>INISIASI TEKNOLOGI HIDROPONIK GUNA MEWUJUDKAN KETAHANAN PANGAN MASYARAKAT PESANTREN</h3>
                <p>Hidroponik adalah inovasi yang dilakukan untuk berbudidaya tanaman pada lahan yang sempit tanpa membutuhkan tanah sebagai
                 media tanam. Nutrisi tanaman hidroponik diaplikasikan dalam bentuk cair bersamaan dengan air yang berfungsi sebagai media. Aerasi 
                 dilakukan dengan bantuan pompa air untuk memenuhi kebutuhan udara bagi tanaman hidroponik.  Hidroponik semakin banyak diterapkan 
                 mulai dari kalangan masyarakat umum, instansi pemerintahan dan swasta serta lembaga pendidikan. </p>
                <a href="https://jurnal.umj.ac.id/index.php/JPMT/article/view/6142" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article4.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>KUALITAS MUTU SAYUR KASEPAK (KANGKUNG, SELADA, DAN PAKCOY) DENGAN SISTEM BUDIDAYA AKUAPONIK DAN HIDROPONIK</h3>
                <p>Aquaponic is considered one of alternative culture system to improve production and quality of leafy vegetables by combining 
                soil less culture and fish farming. Utilization of fish manure contained in waste water provides nutrient sources for growing plants.</p>
                <a href="https://jurnal.unej.ac.id/index.php/JAGT/article/view/15481" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article5.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>Peningkatan Pengetahuan dan Ketertarikan Remaja pada Hidroponik Berbasis Organik</h3>
                <p>Hidroponik adalah salah satu perangkat teknologi bertani untuk daerah perkotaan (urban farming) yang memiliki keterbatasan
                 lahan berupa tanah. Seiring dengan semakin meningkatnya kesadaran masyarakat akan aspek kesehatan diperlukan asupan bahan-bahan
                  organik/alami yang digunakan dalam budidaya hidroponik. Kenyataannya, hidroponik organik masih sangat jarang dikenal dan diterapkan 
                  padahal selain pertimbangan pada aspek kesehatan juga sangat memungkinkan untuk menghasilkan hasil budidaya yang tidak kalah dengan hidroponik sistem konvensional. </p>
                <a href="http://jurnal.unpad.ac.id/pkm/article/view/25365" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article6.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>PENERAPAN MODEL HIDROPONIK SEBAGAI UPAYA PENGHEMATAN LAHAN TANAM DI DESA BABADAN KECAMATAN NGAJUM KABUPATEN MALANG</h3>
                <p>Lahan pertanian di Kabupaten Malang semakin berkurang seluas 10-15 hektar selama 15 tahun terakhir. Konversi lahan pertanian 
                menjadi masalah yang besar untuk prospek kedepan, sehingga perlu adanya solusi. Hidroponik merupakan salah satu solusi yang dapat 
                mengatasi masalah tersebut, terutama di desa Babadan serta didukung oleh kondisi fisik wilayahnya.</p>
                <a href="http://journal2.um.ac.id/index.php/jgp/article/view/13346" class="btn">read more</a>
              </div>
  
          </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>

      </div>
  
  </section>
  <section class="shop" id="shop">

      <h1 class="heading">featured products</h1>
  
      <div class="swiper product-slider">
  
          <div class="swiper-wrapper">
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter.jpg" alt="">
                      <div class="icons">
                          <a 
                          href="https://tokopedia.link/uVECIjvAfmb" 
                          class="fas fa-shopping-cart" 
                          target="_blank"
                          rel="noopener noreferrer"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter</h3>
                      <div class="price"> Rp17.400 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Paket Hidroponik Fullset 18 Lubang.jpg" alt="">
                      <div class="icons">
                          <a 
                          href="https://tokopedia.link/2ZxN76pAfmb" 
                          target="_blank"
                          rel="noopener noreferrer"
                          class="fas fa-shopping-cart"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>Paket Hidroponik Fullset 18 Lubang</h3>
                      <div class="price"> Rp449.000 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/PAKET PEMULA DENGAN POMPA HIDROPONIK TOWER VERTIKULTUR 16 LUB.jpg" alt="">
                      <div class="icons">
                          <a href="https://tokopedia.link/q3RPsieAfmb" 
                          target="_blank"
                          rel="noopener noreferrer"
                          class="fas fa-shopping-cart"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>PAKET PEMULA DENGAN POMPA HIDROPONIK TOWER VERTIKULTUR 16 LUB</h3>
                      <div class="price"> Rp185.000 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Rockwool Cultilene Media Tanam Hidroponik asli Import per slab.jpg" alt="">
                      <div class="icons">
                          <a href="https://tokopedia.link/ahvTcqlAfmb" 
                          target="_blank"
                          rel="noopener noreferrer"
                          class="fas fa-shopping-cart"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>Rockwool Cultilene Media Tanam Hidroponik asli Import per slab</h3>
                      <div class="price"> Rp77.000 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Gully talang kotak hidroponik aquaponik dg tutup atas tanpa lubang.jpg" alt="">
                      <div class="icons">
                          <a href="https://tokopedia.link/HsCMctWzfmb" 
                          target="_blank"
                          rel="noopener noreferrer"
                          class="fas fa-shopping-cart"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>Gully talang kotak hidroponik aquaponik dg tutup atas tanpa lubang</h3>
                      <div class="price"> Rp33.300 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Dutch Bucket Hidroponik 8L, 2 Netpot Hitam 10cm.jpg" alt="">
                      <div class="icons">
                          <a href="https://tokopedia.link/M52dWb6zfmb" 
                          target="_blank"
                          rel="noopener noreferrer"
                          class="fas fa-shopping-cart"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>Dutch Bucket Hidroponik 8L, 2 Netpot Hitam 10cm</h3>
                      <div class="price"> Rp24.000 </div>
                      <div class="stars">
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star"></i>
                          <i class="fas fa-star-half-alt"></i>
                      </div>
                  </div>
              </div>
  
          </div>
  
          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>
  
      </div>
  
  </section>
      `;
  },

  async afterRender() {
    const main = document.querySelector('#main-content');
    main.style.display = 'none';
    try {
        main.style.display = 'block';
        var swiper = new Swiper(".home-slider", {
            loop:true, 
            grabCursor:true,
            navigation: {
                nextEl: ".swiper-button-next",
                prevEl: ".swiper-button-prev",
            },
        });
        var swiper = new Swiper(".blogs-slider", {
            loop:true, 
            grabCursor:true,
            spaceBetween: 10,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                768: {
                  slidesPerView: 2,
                },
                991: {
                  slidesPerView: 3,
                },
            },
        });
        var swiper = new Swiper(".product-slider", {
            loop:true, 
            grabCursor:true,
            spaceBetween: 20,
            navigation: {
              nextEl: ".swiper-button-next",
              prevEl: ".swiper-button-prev",
            },
            breakpoints: {
                0: {
                  slidesPerView: 1,
                },
                640: {
                  slidesPerView: 2,
                },
                768: {
                  slidesPerView: 3,
                },
                1024: {
                  slidesPerView: 4,
                },
            },
        });
    } catch (err) {
      main.style.display = 'block';
      console.log(err);
    }    
  },
};

export default Home;