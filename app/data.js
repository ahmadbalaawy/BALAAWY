// ===============================================================
//  بيانات التطبيق — عدّل هون وبس
//  ضيف روابط البث اللي بتملكها أو عندك ترخيص إلها (m3u8 / mp4)
// ===============================================================
window.APP_DATA = {
  appName: "بلعاوي TV",

  // القنوات المباشرة
  channels: [
    {
      id: "demo-1",
      name: "قناة تجريبية 1",
      category: "منوعات",
      logo: "",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    },
    {
      id: "demo-2",
      name: "قناة تجريبية 2",
      category: "أفلام",
      logo: "",
      url: "https://test-streams.mux.dev/x36xhzz/x36xhzz.m3u8"
    }
    // مثال:
    // { id: "ch-3", name: "اسم القناة", category: "أخبار", logo: "https://.../logo.png", url: "https://.../index.m3u8" },
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
