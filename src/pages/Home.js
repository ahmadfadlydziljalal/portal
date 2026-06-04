import React, { useState, useMemo } from "react";
import Card from "../components/Card";
import { SearchIcon } from "@heroicons/react/outline";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("semua");

  const cards = {
    tms: {
      background: "bg-yellow-200",
      textColor: "text-dark",
      title: "Website PT. Pelayaran Tresnamuda Sejati",
      url: "https://tresnamuda.co.id",
      description:
        "TMS Lines is have 35 years experiences with track record in shipping shows by the major principals presentation such as Wan Hai Lines, Interasia Lines, New Pacific Papua New Guinea Trades, and many more. ",
      tags: ["#tresnamuda", "#pelayaran", "#TMS"],
      category: "operasional",
    },

    bi_tms: {
      background: "bg-purple-300",
      textColor: "text-dark",
      title: "BI-TMS",
      url: "http://bi.rayakreasi.xyz",
      description:
        "Business Intelligence System. Web Scrapping, merging, or anything about data processing here. ",
      tags: ["#BI", "#Data", "#TMS"],
      category: "analytics",
    },

    ift: {
      background: "bg-pink-200",
      textColor: "text-dark",
      title: "IFT Warehouse System",
      url: "https://ift.dzil.my.id",
      description:
        "Warehouse, Quotation manajemen sistem untuk PT. Indo Formosa Trading Jakarta.",
      tags: ["#indoformosa", "#Trading", "#IFT"],
      category: "operasional",
    },

    mkt: {
      background: "bg-yellow-100",
      textColor: "text-dark",
      title: "SIMKT",
      url: "https://mkt.rayakreasi.xyz/",
      description:
        "SIMKT adalah singkatan dari Sistem Informasi Marketing, dibuat untuk membantu Proses Bisnis di internal Departemen Sales dan Marketing - TMS GROUP. ",
      tags: ["#marketing", "#sales"],
      category: "manajemen",
    },

    hrd: {
      background: "bg-white",
      textColor: "text-dark",
      title: "SIHRD",
      url: "https://hrd.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk pengelolaan Human Resource Development di dalam sebuah perusahaan / unit usaha.",
      tags: ["#humanResource", "#absensi"],
      category: "manajemen",
    },

    ism: {
      background: "bg-red-300",
      textColor: "text-dark",
      title: "Certification",
      url: "https://certification.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk management certification milik TMS GROUP, seperti ISM-CODE, ISO-9001, dan lain-lain.",
      tags: ["#ism", "#ism-code", "#iso-9001"],
      category: "compliance",
    },

    my_notes: {
      background: "bg-green-300",
      textColor: "text-dark",
      title: "MyNotes",
      url: "https://my-notes.rayakreasi.xyz/",
      description:
        "My Notes adalah sebuah platform Manajemen Project, dimana sebelumnya MyNotes adalah submodule di Sistem Manajemen Request IT",
      tags: ["#Reminder", "#my-notes"],
      category: "produktivitas",
    },

    sifaktur: {
      background: "bg-purple-100",
      textColor: "text-dark",
      title: "SIFAKTUR",
      url: "https://na-konsultan.com/",
      description:
        "SIFAKTUR adalah Sistem Informasi untuk customer TMS-GROUP untuk pengambilan faktur pajak secara online.",
      tags: ["#pajak", "#faktur", "#ppn"],
      category: "administrasi",
    },

    sidocim: {
      background: "bg-yellow-300",
      textColor: "text-dark",
      title: "SIDOCIM",
      url: "https://sidocim.rayakreasi.xyz",
      description: "SIDOCIM adalah Sistem Informasi untuk customer TMS-GROUP untuk Departemen Import. Fokusnya adalah D.O (Delivery Order) Online ke Customer dan Pelabuhan ",
      tags: ["#sidocim", "#impor", "#do", "#do-online"],
      category: "operasional",
    },

    sidoxim: {
      background: "bg-red-800",
      textColor: "text-white",
      title: "SIDOXIM",
      url: "https://sidoxim.rayakreasi.xyz",
      description: "SIDOXIM adalah Sistem Informasi untuk pengolahan dokumen kepabeanan (CUSTOM) a.k.a Bea Cukai, dan EXIM ",
      tags: ["#sidoxim", "#exim", "#bea-cukai", "#manifest"],
      category: "operasional",
    },

    tech_dzil: {
      background: "bg-pink-500",
      textColor: "text-white",
      title: "TECH DZIL",
      url: "https://dzil.my.id/",
      description: "Blog tentang pemrogaman, share pengalaman dan best practice milik penulis.",
      tags: ["#blog", "#tech", "#dzil"],
      category: "eksternal",
    },

    jp_finance: {
      background: "bg-blue-500",
      textColor: "text-white",
      title: "Tsurumaru Logistics Indonesia",
      url: "https://backend-tsurumaru.rayakreasi.xyz",
      description: "Web app untuk proses bisnis milik Tsurumaru Logistic Indonesia",
      tags: ["#tsurumaru", "#quotation", "#general-cargo"],
      category: "operasional",
    },

    it_helpdesk: {
      background: "bg-purple-200",
      textColor: "text-dark",
      title: "IT Helpdesk TMS GROUP",
      url: "https://it.rayakreasi.xyz",
      description: "Web app untuk proses bisnis IT Helpdesk TMS GROUP",
      tags: ["#it", "#helpdesk", "#tms"],
      category: "support",
    },
  };

  const categories = [
    { id: "semua", label: "Semua Aplikasi", icon: "📋" },
    { id: "operasional", label: "Operasional", icon: "⚙️" },
    { id: "analytics", label: "Analytics", icon: "📊" },
    { id: "manajemen", label: "Manajemen", icon: "👥" },
    { id: "compliance", label: "Compliance", icon: "✓" },
    { id: "produktivitas", label: "Produktivitas", icon: "🚀" },
    { id: "administrasi", label: "Administrasi", icon: "📄" },
    { id: "support", label: "Support", icon: "🛠️" },
    { id: "eksternal", label: "Eksternal", icon: "🌐" },
  ];

  // Filter cards based on search and category
  const filteredCards = useMemo(() => {
    return Object.entries(cards).filter(([, card]) => {
      const matchesSearch = 
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      const matchesCategory = 
        selectedCategory === "semua" || card.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, selectedCategory]);

  return (
    <>
      <div className="mb-6 rounded-2xl border border-gray-200 bg-white/90 shadow-sm backdrop-blur-sm sm:mb-8">
        <div className="border-b border-gray-100 px-4 py-4 sm:px-6">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                Pilih aplikasi yang ingin dibuka
              </h2>
              <p className="mt-1 text-sm text-gray-600">
                Gunakan pencarian atau filter kategori agar lebih cepat menemukan sistem yang dibutuhkan.
              </p>
            </div>

            <div className="text-sm text-gray-600 lg:text-right">
              Menampilkan <span className="font-semibold text-gray-900">{filteredCards.length}</span> dari <span className="font-semibold text-gray-900">{Object.keys(cards).length}</span> aplikasi
            </div>
          </div>
        </div>

        <div className="px-4 py-4 sm:px-6">
          <div className="relative mb-4">
            <SearchIcon className="absolute left-4 top-3.5 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Cari aplikasi atau sistem..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-12 pr-4 text-gray-900 placeholder-gray-500 transition-all focus:border-red-500 focus:outline-none focus:ring-2 focus:ring-red-100"
            />
          </div>

          <div className="mb-3 flex items-center justify-between">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-700">Kategori</h3>
            {(searchTerm || selectedCategory !== "semua") && (
              <button
                type="button"
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("semua");
                }}
                className="text-sm font-medium text-red-600 hover:text-red-700"
              >
                Reset filter
              </button>
            )}
          </div>

          <div className="flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`rounded-full px-3.5 py-2 text-sm font-medium transition-all sm:px-4 ${
                  selectedCategory === cat.id
                    ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-md"
                    : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <span className="mr-2">{cat.icon}</span>
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grid of Cards */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 xl:grid-cols-4">
          {filteredCards.map(([key, value]) => (
            <Card key={key} props={value} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <p className="text-gray-700 text-lg mb-2">Tidak ada aplikasi yang ditemukan</p>
          <p className="text-gray-600 text-sm">Coba ubah pencarian atau kategori Anda</p>
        </div>
      )}
    </>
  );
}

export default Home;
