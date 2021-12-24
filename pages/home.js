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
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article2.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article3.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article4.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article5.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
              <div class="swiper-slide slide">
                  <img src="img/article6.jpg" alt="">
                  <div class="icons">
                      <a href="#"> <i class="fas fa-calendar"></i> 21st may, 2021 </a>
                      <a href="#"> <i class="fas fa-user"></i> by admin </a>
                  </div>
                  <h3>blog title goes here.</h3>
                  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit, deserunt.</p>
                  <a href="#" class="btn">read more</a>
              </div>
  
          </div>
  
      </div>

      <div class="swiper-button-next"></div>
      <div class="swiper-button-prev"></div>
  
  </section>
  <section class="shop" id="shop">

      <h1 class="heading">featured products</h1>
  
      <div class="swiper product-slider">
  
          <div class="swiper-wrapper">
  
              <div class="swiper-slide slide">
                  <div class="image">
                      <img src="img/Hydroton Hidroton Jerman Media Tanam Hidroponik Import 1 Liter.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
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
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
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
                      <img src="images/product-3.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
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
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
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
                      <img src="images/product-1.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
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
                      <img src="images/product-2.jpg" alt="">
                      <div class="icons">
                          <a href="#" class="fas fa-shopping-cart"></a>
                          <a href="#" class="fas fa-eye"></a>
                          <a href="#" class="fas fa-share"></a>
                      </div>
                  </div>
                  <div class="content">
                      <h3>survival kits</h3>
                      <div class="price"> $5.00 - $25.00 </div>
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