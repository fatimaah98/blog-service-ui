<template>
    <main id="content">
      <aside>
        <div>
          <a href="#">
            <img src="~/assets/images/logo.png" alt="" class="web-logo" />
          </a>
        </div>
        <div class="links">
          <a href="#" class="active-link"> <i class="fa-solid fa-house"></i></a>
          <a href="#"> <i class="fa-solid fa-bell"></i> </a>
          <a href="#"> <i class="fa-regular fa-bookmark"></i> </a>
          <a href="#"> <i class="fa-solid fa-receipt"></i> </a>
          <a href="#"> <i class="fa-regular fa-pen-to-square"></i> </a>
        </div>
        <div>
          <button class="profile-button">
            <img src="~/assets/images/user.png" alt="" />
          </button>
        </div>
      </aside>
      <section class="content">
        <div class="container">
          <div class="new-tweet-button">
            <div class="plus-icon">
              <i class="fa-solid fa-plus"></i>
            </div>
            <span> عضو خبرنامه سبزبلاگ شوید ! 😍 </span>
          </div>
          <div class="show-by">
            <button class="active">جدید ترین ها</button>
            <button>دنبال شده ها</button>
          </div>

          <div class="articles">
            <article class="article">
              <div class="article-data">
                <div class="article-author">
                  <span>
                    <img
                      src="~/assets/images/admin.jpg"
                      class="user-profile"
                      alt=""
                    />
                  </span>
                  <span>پیمان احمدی</span>
                  <span class="article-release-date">4 روز پیش</span>
                </div>
                <div>
                  <a href="/pages/article/">
                    <h3>چگونه انسان شاد تری باشیم؟</h3>
                  </a>
                  <p class="article-caption">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div class="article-footer">
                  <div class="categories">
                    <span> زندگی </span>
                    <span> شادی </span>
                    <span> جامعه </span>
                  </div>
                  <div>
                    <span class="gray-text">
                      <i class="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article-cover">
                <img src="~/assets/images/social.jpg" alt="Article title :)" />
              </div>
            </article>
            <article class="article">
              <div class="article-data">
                <div class="article-author">
                  <span>
                    <img
                      src="~/assets/images/admin.jpg"
                      class="user-profile"
                      alt=""
                    />
                  </span>
                  <span>پیمان احمدی</span>
                  <span class="article-release-date">4 روز پیش</span>
                </div>
                <div>
                  <a href="/pages/article/">
                    <h3>چگونه انسان شاد تری باشیم؟</h3>
                  </a>
                  <p class="article-caption">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div class="article-footer">
                  <div class="categories">
                    <span> زندگی </span>
                    <span> شادی </span>
                    <span> جامعه </span>
                  </div>
                  <div>
                    <span class="gray-text">
                      <i class="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article-cover">
                <img src="~/assets/images/social.jpg" alt="Article title :)" />
              </div>
            </article>
            <article class="article">
              <div class="article-data">
                <div class="article-author">
                  <span>
                    <img
                      src="~/assets/images/admin.jpg"
                      class="user-profile"
                      alt=""
                    />
                  </span>
                  <span>پیمان احمدی</span>
                  <span class="article-release-date">4 روز پیش</span>
                </div>
                <div>
                  <a href="/pages/article/">
                    <h3>چگونه انسان شاد تری باشیم؟</h3>
                  </a>
                  <p class="article-caption">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div class="article-footer">
                  <div class="categories">
                    <span> زندگی </span>
                    <span> شادی </span>
                    <span> جامعه </span>
                  </div>
                  <div>
                    <span class="gray-text">
                      <i class="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article-cover">
                <img src="~/assets/images/social.jpg" alt="Article title :)" />
              </div>
            </article>
            <article class="article">
              <div class="article-data">
                <div class="article-author">
                  <span>
                    <img
                      src="~/assets/images/admin.jpg"
                      class="user-profile"
                      alt=""
                    />
                  </span>
                  <span>پیمان احمدی</span>
                  <span class="article-release-date">4 روز پیش</span>
                </div>
                <div>
                  <a href="/pages/article/">
                    <h3>چگونه انسان شاد تری باشیم؟</h3>
                  </a>
                  <p class="article-caption">
                    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و
                    با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه
                    و مجله در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی
                    تکنولوژی مورد نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای
                    کاربردی می باشد، کتابهای زیادی در شصت و سه درصد گذشته حال و
                    آینده، شناخت فراوان جامعه و متخصصان را می طلبد، تا با نرم
                    افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص
                    طراحان خلاقی، و فرهنگ پیشرو در زبان فارسی ایجاد کرد، در این
                    صورت می توان امید داشت که تمام و دشواری موجود در ارائه
                    راهکارها، و شرایط سخت تایپ به پایان رسد و زمان مورد نیاز
                    شامل حروفچینی دستاوردهای اصلی، و جوابگوی سوالات پیوسته اهل
                    دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
                  </p>
                </div>
                <div class="article-footer">
                  <div class="categories">
                    <span> زندگی </span>
                    <span> شادی </span>
                    <span> جامعه </span>
                  </div>
                  <div>
                    <span class="gray-text">
                      <i class="fa-regular fa-bookmark"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div class="article-cover">
                <img src="~/assets/images/social.jpg" alt="Article title :)" />
              </div>
            </article>
          </div>
        </div>
      </section>
      <div class="right-nav">
        <div>
          <div class="profile-card">
            <img
              src="~/assets/images/admin.jpg"
              alt=""
              class="profile-picture"
            />
            <div>
              <p class="profile-name">پیمان احمدی</p>
              <a href="/pages/dashboard/" class="go-to-dashboard">
                ورود به پنل مدیریت
              </a>
            </div>
          </div>
          <div class="get-unlimitted">خرید اشتراک ویژه</div>

          <div class="search-bar">
            <input type="search" placeholder="جستجو کنید .." />
          </div>
          <div>
            <div class="read-now">
              <p class="live-circle"></p>
              <span> محبوب ترین های امروز </span>
            </div>

            <div class="mini-articles">
              <article class="mini-article">
                <div class="article-author">
                  <img
                    src="~/assets/images/admin.jpg"
                    alt="mini article"
                    class="user-profile"
                  />
                  <div>
                    <p>پیمان احمدی</p>
                  </div>
                </div>
                <div class="article-caption-card">
                  <a href="#">
                    <p class="article-caption">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ،
                      و با استفاده از طراحان گرافیک است، چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است، و برای
                      شرایط فعلی
                    </p>
                  </a>
                </div>
              </article>
            </div>
          </div>
        </div>
      </div>
    </main>
</template>