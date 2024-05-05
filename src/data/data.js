import image1 from "../assets/image/1.webp";
import image2 from "../assets/image/2.webp";
import image3 from "../assets/image/3.webp";
import image4 from "../assets/image/4.webp";
import image5 from "../assets/image/5.webp";
import image6 from "../assets/image/6.webp";
import image7 from "../assets/image/7.webp";
import image8 from "../assets/image/8.webp";
import image9 from "../assets/image/9.webp";
import image10 from "../assets/image/10.webp";
import image11 from "../assets/image/11.webp";
import image12 from "../assets/image/12.webp";
import image13 from "../assets/image/13.webp";

const data = [
  {
    id: 1,
    category: "Family",
    title: "Pulau Seribu Pesona",
    tour_location: "Bali, Indonesia",
    tour_duration: "3 Hari",
    price: 20000000,
    description:
      "Jelajahi keindahan alam dan budaya Bali dengan paket liburan eksklusif ini. Kunjungi tempat-tempat indah seperti Pantai Kuta, Ubud, dan Tanah Lot bersama keluarga Anda.",
    product_image: image1,
    destinations: [
      {
        id: 1,
        destination_name: "Pantai Kuta",
        destination_description:
          "Nikmati keindahan Pantai Kuta yang terkenal dengan pasir putihnya dan ombaknya yang cocok untuk berselancar. Tersedia berbagai aktivitas menyenangkan untuk dinikmati bersama keluarga.",
        destination_image: image2,
      },
      {
        id: 2,
        destination_name: "Ubud",
        destination_description:
          "Jelajahi kehidupan pedesaan di Ubud dan nikmati suasana tenang di antara sawah hijau. Kunjungi Monkey Forest dan berbelanja di pasar tradisional untuk mendapatkan oleh-oleh khas Bali.",
        destination_image: image1,
      },
      {
        id: 3,
        destination_name: "Tanah Lot",
        destination_description:
          "Saksikan matahari terbenam yang spektakuler di Pura Tanah Lot, salah satu tempat paling terkenal di Bali. Bangunan pura yang megah terletak di atas batu karang di tepi laut.",
        destination_image: image4,
      },
      {
        id: 4,
        destination_name: "Pulau Seribu",
        destination_description:
          "Nikmati keindahan pulau seribu dengan berbagai aktivitas menarik seperti snorkeling, diving, dan berjemur di pantai pasir putihnya.",
        destination_image: image1,
      },
    ],
    rundown: [
      {
        id: 1,
        title: "Hari 1",
        agenda:
          "Tiba di Bandara Ngurah Rai, penjemputan, dan check-in di hotel di sekitar Pantai Kuta. Menyaksikan matahari terbenam di Pantai Kuta.",
      },
      {
        id: 2,
        title: "Hari 2",
        agenda:
          "Perjalanan ke Ubud, mengunjungi Tegalalang Rice Terrace dan Monkey Forest. Makan siang di restoran lokal dan berbelanja di pasar tradisional. Kembali ke hotel dan istirahat.",
      },
      {
        id: 3,
        title: "Hari 3",
        agenda:
          "Kunjungan ke Pura Tanah Lot untuk menyaksikan matahari terbenam. Waktu luang di Pantai Canggu dan makan malam di Jimbaran dengan hidangan seafood segar.",
      },
    ],
  },
  {
    id: 2,
    category: "Solo",
    title: "Bali Adventure",
    tour_location: "Bali, Indonesia",
    tour_duration: "3 Hari",
    price: 25000000,
    description:
      "Jelajahi petualangan seru di Bali dengan paket liburan ini. Nikmati aktivitas menyenangkan seperti arung jeram di Sungai Ayung, snorkeling di Pulau Menjangan, dan trekking di Gunung Batur.",
    product_image: image2,
    destinations: [
      {
        id: 1,
        destination_name: "Sungai Ayung",
        destination_description:
          "Rasakan sensasi arung jeram di Sungai Ayung yang menawarkan rute yang menantang dan pemandangan alam yang menakjubkan. Aktivitas ini cocok untuk dinikmati bersama keluarga.",
        destination_image: image2,
      },
      {
        id: 2,
        destination_name: "Pulau Menjangan",
        destination_description:
          "Nikmati keindahan bawah laut di Pulau Menjangan dengan snorkeling. Anda akan bertemu dengan berbagai jenis biota laut yang memukau dan terumbu karang yang indah.",
        destination_image: image2,
      },
      {
        id: 3,
        destination_name: "Gunung Batur",
        destination_description:
          "Trekking di Gunung Batur akan memberikan pengalaman petualangan yang tak terlupakan. Nikmati pemandangan matahari terbit yang menakjubkan dari puncak gunung.",
        destination_image: image2,
      },
    ],
    rundown: [
      {
        id: 1,
        title: "Hari 1",
        agenda:
          "Tiba di Bandara Ngurah Rai dan penjemputan. Check-in di hotel di sekitar Ubud. Istirahat dan persiapan untuk petualangan besok.",
      },
      {
        id: 2,
        title: "Hari 2",
        agenda:
          "Arung jeram di Sungai Ayung. Makan siang di pinggir sungai. Petualangan dilanjutkan dengan snorkeling di Pulau Menjangan.",
      },
      {
        id: 3,
        title: "Hari 3",
        agenda:
          "Pendakian Gunung Batur di pagi hari untuk menyaksikan matahari terbit. Kembali ke hotel untuk sarapan dan check-out. Perjalanan selesai.",
      },
    ],
  },
  {
    id: 3,
    category: "Solo",
    title: "Bali Relaxation",
    tour_location: "Bali, Indonesia",
    tour_duration: "3 Hari",
    price: 18000000,
    description:
      "Nikmati liburan santai di Bali dengan paket ini. Santai di tepi pantai, pijat tradisional Bali, dan menikmati keindahan alam yang menenangkan di Ubud.",
    product_image: image3,
    destinations: [
      {
        id: 1,
        destination_name: "Pantai Seminyak",
        destination_description:
          "Santai dan nikmati suasana pantai di Pantai Seminyak yang terkenal dengan bar, restoran, dan klub malamnya. Tersedia berbagai aktivitas menyenangkan untuk dinikmati bersama keluarga.",
        destination_image: image3,
      },
      {
        id: 2,
        destination_name: "Ubud",
        destination_description:
          "Menyegarkan pikiran dan tubuh dengan pijat tradisional Bali di Ubud. Rasakan sensasi relaksasi yang mendalam di tengah-tengah alam yang indah.",
        destination_image: image3,
      },
      {
        id: 3,
        destination_name: "Tegalalang Rice Terrace",
        destination_description:
          "Nikmati pemandangan sawah terasering yang indah di Tegalalang Rice Terrace. Cocok untuk berfoto-foto dan bersantai menikmati suasana pedesaan.",
        destination_image: image3,
      },
    ],
    rundown: [
      {
        id: 1,
        title: "Hari 1",
        agenda:
          "Tiba di Bandara Ngurah Rai, penjemputan, dan check-in di hotel di sekitar Pantai Seminyak. Menikmati waktu luang di pantai dan persiapan untuk hari-hari berikutnya.",
      },
      {
        id: 2,
        title: "Hari 2",
        agenda:
          "Hari ini diisi dengan pijat tradisional Bali di Ubud. Berjalan-jalan di sekitar desa Ubud dan mengunjungi Tegalalang Rice Terrace.",
      },
      {
        id: 3,
        title: "Hari 3",
        agenda:
          "Waktu luang di Pantai Sanur untuk bersantai dan menikmati suasana pantai. Perjalanan selesai dengan drop-off di Bandara Ngurah Rai.",
      },
    ],
  },
  {
    id: 4,
    category: "Family",
    title: "Bali Cultural Immersion",
    tour_location: "Bali, Indonesia",
    tour_duration: "3 Hari",
    price: 20000000,
    description:
      "Telusuri kekayaan budaya Bali dengan paket liburan ini. Ikuti upacara adat, kunjungi desa tradisional, dan cicipi kuliner khas Bali yang autentik.",
    product_image: image4,
    destinations: [
      {
        id: 1,
        destination_name: "Desa Penglipuran",
        destination_description:
          "Jelajahi kehidupan desa tradisional Bali di Desa Penglipuran. Anda dapat melihat arsitektur tradisional Bali dan berinteraksi dengan penduduk setempat.",
        destination_image: image4,
      },
      {
        id: 2,
        destination_name: "Pura Besakih",
        destination_description:
          "Kunjungi Pura Besakih, pura terbesar dan tertua di Bali. Anda dapat mengikuti upacara keagamaan dan mengagumi arsitektur dan ornamen yang indah.",
        destination_image: image4,
      },
      {
        id: 3,
        destination_name: "Kuliner Khas Bali",
        destination_description:
          "Nikmati beragam hidangan khas Bali yang autentik, mulai dari babi guling hingga lawar. Anda akan merasakan kekayaan cita rasa Bali yang unik.",
        destination_image: image4,
      },
    ],
    rundown: [
      {
        id: 1,
        title: "Hari 1",
        agenda:
          "Tiba di Bandara Ngurah Rai dan penjemputan. Check-in di hotel di sekitar Ubud. Menikmati waktu luang untuk bersantai dan persiapan kegiatan besok.",
      },
      {
        id: 2,
        title: "Hari 2",
        agenda:
          "Kunjungan ke Desa Penglipuran untuk mempelajari kehidupan desa tradisional Bali. Makan siang dengan hidangan khas Bali. Berlanjut ke Pura Besakih untuk mengagumi keindahan pura.",
      },
      {
        id: 3,
        title: "Hari 3",
        agenda:
          "Pagi ini, ikuti upacara keagamaan di Pura Besakih. Lanjutkan dengan tur kuliner khas Bali untuk mencicipi berbagai hidangan tradisional. Perjalanan selesai dengan drop-off di Bandara Ngurah Rai.",
      },
    ],
  },
  {
    id: 5,
    category: "Family",
    title: "Bali Nature Retreat",
    tour_location: "Bali, Indonesia",
    tour_duration: "3 Hari",
    price: 23000000,
    description:
      "Hadapi petualangan alam di Bali dengan paket liburan ini. Telusuri keindahan alam dengan trekking ke air terjun, bersepeda di pedalaman Bali, dan mengunjungi taman burung eksotis.",
    product_image: image5,
    destinations: [
      {
        id: 1,
        destination_name: "Air Terjun Tegenungan",
        destination_description:
          "Nikmati keindahan Air Terjun Tegenungan, salah satu air terjun paling indah di Bali. Anda dapat berenang di kolam alami di bawah air terjun atau bersantai di sekitar area yang teduh.",
        destination_image: image5,
      },
      {
        id: 2,
        destination_name: "Taman Burung Bali",
        destination_description:
          "Kunjungi Taman Burung Bali dan lihat berbagai spesies burung yang eksotis dan langka. Anda dapat menyaksikan pertunjukan burung dan berinteraksi dengan burung-burung tersebut.",
        destination_image: image5,
      },
      {
        id: 3,
        destination_name: "Baturiti Village",
        destination_description:
          "Jelajahi pedalaman Bali dengan bersepeda di sekitar desa Baturiti. Anda akan melewati hamparan sawah hijau, hutan tropis, dan desa-desa tradisional Bali yang indah.",
        destination_image: image5,
      },
    ],
    rundown: [
      {
        id: 1,
        title: "Hari 1",
        agenda:
          "Tiba di Bandara Ngurah Rai dan penjemputan. Check-in di hotel di sekitar Ubud. Menikmati waktu luang untuk bersantai dan persiapan kegiatan besok.",
      },
      {
        id: 2,
        title: "Hari 2",
        agenda:
          "Trekking ke Air Terjun Tegenungan untuk menikmati keindahan alam. Berlanjut ke Taman Burung Bali untuk mengamati berbagai spesies burung eksotis.",
      },
      {
        id: 3,
        title: "Hari 3",
        agenda:
          "Bersepeda di pedalaman Bali sekitar desa Baturiti. Nikmati pemandangan alam yang indah dan interaksi dengan penduduk setempat. Perjalanan selesai dengan drop-off di Bandara Ngurah Rai.",
      },
    ],
  },
  {
    id: 6,
    category: "Group",
    title: "Bali Wellness Retreat",
    tour_location: "Bali, Indonesia",
    tour_duration: "4 Hari",
    price: 25000000,
    description:
      "Recharge your mind, body, and soul with this wellness retreat in Bali. Experience yoga sessions, spa treatments, and healthy cuisine amidst the serene natural surroundings of Ubud.",
    product_image:image6,
    destinations: [
      {
        id: 1,
        destination_name: "Ubud",
        destination_description:
          "Immerse yourself in the tranquil ambiance of Ubud, the heart of Bali's wellness scene. Participate in daily yoga sessions, meditation, and mindfulness practices.",
        destination_image:image8,
      },
      {
        id: 2,
        destination_name: "Spa & Wellness Centers",
        destination_description:
          "Indulge in rejuvenating spa treatments and holistic wellness therapies at renowned wellness centers in Ubud. Restore your balance and vitality.",
        destination_image:image7,
      },
      {
        id: 3,
        destination_name: "Organic Cuisine",
        destination_description:
          "Nourish your body with wholesome and nutritious organic cuisine prepared by expert chefs. Enjoy farm-to-table dining experiences amidst lush green surroundings.",
        destination_image:image6,
      },
      {
        id: 4,
        destination_name: "Taman Burung Bali",
        destination_description:
          "Kunjungi Taman Burung Bali dan lihat berbagai spesies burung yang eksotis dan langka. Anda dapat menyaksikan pertunjukan burung dan berinteraksi dengan burung-burung tersebut.",
        destination_image: image5,
      },
    ],
    rundown: [
      {
        id: 1,
        title: "Day 1",
        agenda:
          "Arrive in Bali and transfer to your wellness retreat center in Ubud. Settle in and unwind with a welcome drink. Enjoy a relaxing evening and healthy dinner.",
      },
      {
        id: 2,
        title: "Day 2",
        agenda:
          "Start your day with a rejuvenating yoga session amidst nature. Followed by a nutritious breakfast. Spend the day indulging in spa treatments and wellness activities.",
      },
      {
        id: 3,
        title: "Day 3",
        agenda:
          "Continue your wellness journey with morning yoga and meditation. Explore the local surroundings of Ubud or opt for additional spa treatments. Evening relaxation session.",
      },
      {
        id: 4,
        title: "Day 4",
        agenda:
          "Conclude your wellness retreat with a final yoga session and healthy breakfast. Checkout from the retreat center and transfer to the airport for your departure.",
      },
    ],
  },
];

export default data