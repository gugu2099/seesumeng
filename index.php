<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./css/style.css">
    <link rel="stylesheet" href="./css/reset.css">
    

    <!-- swiper -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
    
    <title>SEESUMENG</title>
    
</head>
<body>

    <!-- header -->

    <!-- <div data-include-path="./header.html" id="header"></div> -->

    <?php include "header.php"; ?>
    <!-- //header -->

<div id="wrap">

    <!-- section1 -->
<section id="section1">
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
            <div class="swiper-slide slide1">

                <video src="img/v1.mp4" class="video" autoplay="" muted="" loop="" playsinline="">
                    <source src="img/v1.mp4" type="video/mp4">
                </video>

                <div class="slideText">
                    <h2>
                        <i>BIM / 2D / 3D<br>SHOP DRAWING / EXAMINE / INQUIRY</i>
                    </h2>
                </div>

            </div>
            <div class="swiper-slide slide2">

                <video src="img/v2.mp4" class="video" autoplay="" muted="" loop="" playsinline="">
                    <source src="img/v2.mp4" type="video/mp4">
                </video>

                <div class="slideText">
                    <h2>
                        <i>WHEN THE FUTURE BEGINS,<br>SEESUM ENGINEERING</i>
                    </h2>
                </div>

            </div>
            <div class="swiper-slide slide3">
                <video src="img/v3.mp4" class="video" autoplay="" muted="" loop="" playsinline="">
                    <source src="img/v3.mp4" type="video/mp4">
                </video>
                <div class="slideText">
                    <h2>
                        SEESUMENG<br>BUILDING MATERIALS INTERNATINAL TRADE
                    </h2>
                </div>
            </div>
            <div class="swiper-slide slide4">
                <video src="img/v5.mp4" class="video" autoplay="" muted="" loop="" playsinline="">
                    <source src="img/v5.mp4" type="video/mp4">
                </video>
                <div class="slideText">
                    <h2>
                        SEESUMENG<br>SMART STORE & SHOPPING MALL
                    </h2>
                </div>

            </div>
        </div>
        <div class="swiper-button-next"></div>
        <div class="swiper-button-prev"></div>
        <div class="swiper-pagination"></div>
    </div>
</section>

<!-- section2 -->
<section id="section2">

    <div>
        <ul class="ta">
            <li class="ta1">
                <a href="">
                    <p>
                        IDENTITY
                    </p>
                </a>
            </li>
            <li class="ta2">
                <a href="">
                    <p>
                        ENG
                    </p>
                </a>
            </li>
            <li class="ta3">
                <a href="">
                    <p>
                        TRADE
                    </p>
                </a>
            </li>
        </ul>
    </div>

    <div class="tBox">
        <ul class="tw">
            <li class="tw1">
                <a href="">
                    <p>
                        SHOP
                    </p>
                </a>
            </li>
            <li class="tw2">
                <a href="">
                    <p>
                        BIM
                    </p>
                </a>
            </li>
        </ul>

        <ul class="te">
            <div class="teG1">
                <li class="te1">
                    <a href="">
                        <p>
                            MEMBER
                        </p>
                    </a>
                </li>
                <li class="te2">
                    <a href="">
                        <p>
                            MATERRIAL
                        </p>
                    </a>
                </li>
            </div>
            <div class="teG2">
                <li class="te3">
                    <a href="">
                        <p>
                            LOCATION
                        </p>
                    </a>
                </li>
            </div>
        </ul>
    </div>

</section>

</div>


    <!-- footer -->
    <!-- <div data-include-path="./footer.html" id="footer"></div> -->
    <!-- <?php include "footer.php"; ?> -->
    <!-- //footer -->

<!-- swiper -->
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>

<script src="./js/main.js"></script>

</body>

</html>