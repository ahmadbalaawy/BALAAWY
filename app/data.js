// ===============================================================
//  بيانات التطبيق — عدّل هون وبس
//  ضيف روابط البث اللي بتملكها أو عندك ترخيص إلها (m3u8 / mp4)
// ===============================================================
window.APP_DATA = {
  appName: "بلعاوي TV",

  // القنوات المباشرة
  // كل قناة: يا "url" وحدة، يا "servers": [{ name, url }, ...]
  // إذا سيرفر ما اشتغل، التطبيق بيجرب اللي بعده لحاله
  channels: [

    // قطر — الكأس (من سيرفرات قناة الكأس الرسمية)
    { id: "alkass1", name: "الكأس 1", category: "رياضة الخليج", flag: "🇶🇦", country: "قطر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://liveeu-gcp.alkassdigital.net/alkass1-p/main.m3u8" }
      ] },
    { id: "alkass2", name: "الكأس 2", category: "رياضة الخليج", flag: "🇶🇦", country: "قطر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://liveeu-gcp.alkassdigital.net/alkass2-p/main.m3u8" }
      ] },
    { id: "alkass3", name: "الكأس 3", category: "رياضة الخليج", flag: "🇶🇦", country: "قطر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://liveeu-gcp.alkassdigital.net/alkass3-p/main.m3u8" }
      ] },
    { id: "alkass4", name: "الكأس 4", category: "رياضة الخليج", flag: "🇶🇦", country: "قطر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://liveeu-gcp.alkassdigital.net/alkass4-p/main.m3u8" }
      ] },
    { id: "alkass5", name: "الكأس 5", category: "رياضة الخليج", flag: "🇶🇦", country: "قطر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://liveeu-gcp.alkassdigital.net/alkass5-p/main.m3u8" },
        { name: "سيرفر 2", url: "https://liveakgr.alkassdigital.net/hls/live/2097037/Alkass5azq/master.m3u8" }
      ] },

    // الإمارات — أبوظبي ودبي (Mangomolo، مزوّد البث الرسمي)
    { id: "adsports1", name: "أبوظبي الرياضية 1", category: "رياضة الخليج", flag: "🇦🇪", country: "الإمارات", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://admdn1.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/playlist.m3u8" },
        { name: "سيرفر 2", url: "https://admdn1ta.cdn.mangomolo.com/adsports1/smil:adsports1.stream.smil/.m3u8" }
      ] },
    { id: "adsports2", name: "أبوظبي الرياضية 2", category: "رياضة الخليج", flag: "🇦🇪", country: "الإمارات", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://admdn5.cdn.mangomolo.com/adsports2/smil:adsports2.stream.smil/playlist.m3u8" }
      ] },
    { id: "dubai1", name: "دبي الرياضية 1", category: "رياضة الخليج", flag: "🇦🇪", country: "الإمارات", logo: "",
      servers: [
        { name: "سيرفر 1", url: "http://dmivll.mangomolo.com/dubaisports/smil:dubaisports.smil/playlist.m3u8" },
        { name: "سيرفر 2", url: "https://dmitwlvvll.cdn.mangomolo.com/dubaisportshd/smil:dubaisportshd.smil/chunklist.m3u8" }
      ] },
    { id: "dubai3", name: "دبي الرياضية 3", category: "رياضة الخليج", flag: "🇦🇪", country: "الإمارات", logo: "",
      servers: [
        { name: "سيرفر 1", url: "http://dmitwlvvll.cdn.mangomolo.com/dubaisportshd5/smil:dubaisportshd5.smil/chunklist.m3u8" }
      ] },

    // البحرين والكويت
    { id: "bahrain1", name: "البحرين الرياضية 1", category: "رياضة الخليج", flag: "🇧🇭", country: "البحرين", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://5c7b683162943.streamlock.net/live/ngrp:sportsone_all/playlist.m3u8" }
      ] },
    { id: "bahrain2", name: "البحرين الرياضية 2", category: "رياضة الخليج", flag: "🇧🇭", country: "البحرين", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://5c7b683162943.streamlock.net/live/ngrp:bahrainsportstwo_all/playlist.m3u8" }
      ] },
    { id: "kuwait", name: "الكويت الرياضية", category: "رياضة الخليج", flag: "🇰🇼", country: "الكويت", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://hiplayer.hibridcdn.net/t/kwmedia-kwtvsports.m3u8" }
      ] },

    // الشام وشمال أفريقيا — ⚠️ ما انفحصوا، شكل الروابط مش مأكد، إذا ما اشتغلوا احذفهم
    { id: "jordan", name: "الأردن الرياضية", category: "رياضة الشام", flag: "🇯🇴", country: "الأردن", logo: "",
      servers: [
        { name: "سيرفر 1", url: "http://jrtv-live.ercdn.net/jordansports/jordansports.m3u8" }
      ] },
    { id: "palestine", name: "فلسطين الرياضية", category: "رياضة الشام", flag: "🇵🇸", country: "فلسطين", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://palestine-live.ercdn.net/palestinesports/palestinesports.m3u8" }
      ] },
    { id: "lebanon", name: "لبنان الرياضية", category: "رياضة الشام", flag: "🇱🇧", country: "لبنان", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://teleliban-live.ercdn.net/tlsports/tlsports.m3u8" }
      ] },
    { id: "nile", name: "نايل سبورت", category: "رياضة شمال أفريقيا", flag: "🇪🇬", country: "مصر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://nilesport-live.ercdn.net/nilesports/nilesports.m3u8" }
      ] },
    { id: "tunisia", name: "تونس الرياضية", category: "رياضة شمال أفريقيا", flag: "🇹🇳", country: "تونس", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://tunisiasport-live.ercdn.net/tunisiasport/tunisiasport.m3u8" }
      ] },
    { id: "arriadia", name: "الرياضية المغربية", category: "رياضة شمال أفريقيا", flag: "🇲🇦", country: "المغرب", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://snrt-live.ercdn.net/arriadia/arriadia.m3u8" }
      ] },
    { id: "algeria", name: "الجزائرية الرياضية", category: "رياضة شمال أفريقيا", flag: "🇩🇿", country: "الجزائر", logo: "",
      servers: [
        { name: "سيرفر 1", url: "https://algeriasport-live.ercdn.net/algeriasport/algeriasport.m3u8" }
      ] }
  ],

  // المسلسلات وحلقاتها
  series: [
    {
      id: "series-1",
      title: "مسلسل تجريبي",
      category: "دراما",
      poster: "",
      description: "مثال على مسلسل. بدّل الروابط بروابط حلقاتك.",
      episodes: [
        { title: "الحلقة 1", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" },
        { title: "الحلقة 2", url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8" }
      ]
    }
  ]
};
