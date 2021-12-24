const Home = {
  async render() {
    return `
    <section class="home" id="home">
        <div class="swiper home-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide">
                    <div class="box" style="background: var(--image-color),url(img/hero-1.jpg) no-repeat;">
                        <div class="content">
                            <span>never stop</span>
                            <h3>exploring</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                            <a href="#main-content" class="btn">get started</a>
                        </div>
                    </div>
                </div>

                <div class="swiper-slide">
                  <div class="box second" style="background: var(--image-color), url(img/hero-2.jpg) no-repeat;">
                      <div class="content">
                          <span>make tour</span>
                          <h3>amazing</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                          <a href="#main-content" class="btn">get started</a>
                      </div>
                  </div>
              </div>

              <div class="swiper-slide">
                  <div class="box" style="background: var(--image-color), url(img/hero-3.jpg) no-repeat;">
                      <div class="content">
                          <span>explore the</span>
                          <h3>new world</h3>
                          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit unde ex molestias soluta consequatur saepe aliquam, excepturi delectus consequuntur minus!</p>
                          <a href="#main-content" class="btn">get started</a>
                      </div>
                  </div>
              </div>
          </div>

          <div class="swiper-button-next"></div>
          <div class="swiper-button-prev"></div>

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
                          <a href="https://tokopedia.link/uVECIjvAfmb" class="fas fa-shopping-cart"></a>
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
                          <a href="https://tokopedia.link/2ZxN76pAfmb" class="fas fa-shopping-cart"></a>
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
                          <a href="https://tokopedia.link/q3RPsieAfmb" class="fas fa-shopping-cart"></a>
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
                          <a href="https://tokopedia.link/ahvTcqlAfmb" class="fas fa-shopping-cart"></a>
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
                          <a href="https://tokopedia.link/HsCMctWzfmb" class="fas fa-shopping-cart"></a>
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
                          <a href="https://tokopedia.link/M52dWb6zfmb" class="fas fa-shopping-cart"></a>
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