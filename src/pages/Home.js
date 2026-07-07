import React, { useEffect, useMemo, useRef, useState } from "react";
import AppIconLink from "../components/AppIconLink";
import tmsIcon from "../assets/tms.ico";
import iftIcon from "../assets/ift.ico";
import simktIcon from "../assets/simkt.ico";
import sihrdIcon from "../assets/sihrd.ico";
import certificationIcon from "../assets/certification.ico";
import myNotesIcon from "../assets/mynotes.ico";
import sifakturIcon from "../assets/sifaktur.jpg";
import itHelpdeskIcon from "../assets/it.ico";

function Home() {
  const [searchTerm, setSearchTerm] = useState("");
  const searchInputRef = useRef(null);

  const cards = {
    tms: {
      background: "bg-yellow-50",
      textColor: "text-dark",
      shortTitle: "TMS Website",
      icon: tmsIcon,
      title: "Website PT. Pelayaran Tresnamuda Sejati",
      url: "https://tresnamuda.co.id",
      description:
        "TMS Lines is have 35 years experiences with track record in shipping shows by the major principals presentation such as Wan Hai Lines, Interasia Lines, New Pacific Papua New Guinea Trades, and many more. ",
      tags: ["#tresnamuda", "#pelayaran", "#TMS"],
      category: "operasional",
    },
    it_helpdesk: {
      background: "bg-indigo-50",
      textColor: "text-dark",
      shortTitle: "IT Helpdesk",
      icon: itHelpdeskIcon,
      title: "IT Helpdesk TMS GROUP",
      url: "https://it.rayakreasi.xyz",
      description: "Web app untuk proses bisnis IT Helpdesk TMS GROUP",
      tags: ["#it", "#helpdesk", "#tms"],
      category: "support",
    },


    ift: {
      background: "bg-pink-50",
      textColor: "text-dark",
      shortTitle: "IFT Warehouse",
      title: "IFT Warehouse System",
      icon: iftIcon,
      url: "https://ift.dzil.my.id",
      description:
        "Warehouse, Quotation manajemen sistem untuk PT. Indo Formosa Trading Jakarta.",
      tags: ["#indoformosa", "#Trading", "#IFT"],
      category: "operasional",
    },
    mkt: {
      background: "bg-yellow-50",
      textColor: "text-dark",
      shortTitle: "SIMKT",
      title: "SIMKT",
      icon: simktIcon,
      url: "https://mkt.rayakreasi.xyz/",
      description:
        "SIMKT adalah singkatan dari Sistem Informasi Marketing, dibuat untuk membantu Proses Bisnis di internal Departemen Sales dan Marketing - TMS GROUP. ",
      tags: ["#marketing", "#sales"],
      category: "manajemen",
    },
    hrd: {
      background: "bg-slate-50",
      textColor: "text-dark",
      shortTitle: "SIHRD",
      title: "SIHRD",
      icon: sihrdIcon,
      url: "https://hrd.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk pengelolaan Human Resource Development di dalam sebuah perusahaan / unit usaha.",
      tags: ["#humanResource", "#absensi"],
      category: "manajemen",
    },
    ism: {
      background: "bg-red-50",
      textColor: "text-dark",
      shortTitle: "Certification",
      title: "Certification",
      icon: certificationIcon,
      url: "https://certification.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk management certification milik TMS GROUP, seperti ISM-CODE, ISO-9001, dan lain-lain.",
      tags: ["#ism", "#ism-code", "#iso-9001"],
      category: "compliance",
    },
    my_notes: {
      background: "bg-green-50",
      textColor: "text-dark",
      shortTitle: "MyNotes",
      icon: myNotesIcon,
      title: "MyNotes",
      url: "https://my-notes.rayakreasi.xyz/",
      description:
        "My Notes adalah sebuah platform Manajemen Project, dimana sebelumnya MyNotes adalah submodule di Sistem Manajemen Request IT",
      tags: ["#Reminder", "#my-notes"],
      category: "produktivitas",
    },
    sifaktur: {
      background: "bg-purple-50",
      textColor: "text-dark",
      shortTitle: "SIFAKTUR",
      icon: sifakturIcon,
      title: "SIFAKTUR",
      url: "https://na-konsultan.com/",
      description:
        "SIFAKTUR adalah Sistem Informasi untuk customer TMS-GROUP untuk pengambilan faktur pajak secara online.",
      tags: ["#pajak", "#faktur", "#ppn"],
      category: "administrasi",
    },
    rkd_mobile: {
      background: "bg-cyan-50",
      textColor: "text-dark",
      shortTitle: "RKD Mobile",
      icon: "https://play-lh.googleusercontent.com/-T6ZqUFVY4AuUJ2139gci3j76caK1h9_veJhGYl8Vhm-iRXT7efphSwonfgVcnFfAwto4gbKn99dtLxohh1qVxw=w240-h480",
      iconClassName: "h-11 w-11 object-cover object-center",
      title: "RKD Mobile",
      url: "https://play.google.com/store/apps/details?id=com.dzil.rkdmobile",
      description: "Aplikasi Android RKD Mobile untuk akses layanan RKD via smartphone.",
      tags: ["#android", "#mobile", "#rkd"],
      category: "eksternal",
    },
    sidocim: {
      background: "bg-green-300",
      textColor: "text-dark",
      shortTitle: "SIDOCIM",
      title: "SIDOCIM",
      url: "https://sidocim.rayakreasi.xyz",
      description: "SIDOCIM adalah Sistem Informasi untuk customer TMS-GROUP untuk Departemen Import. Fokusnya adalah D.O (Delivery Order) Online ke Customer dan Pelabuhan ",
      tags: ["#sidocim", "#impor", "#do", "#do-online"],
      category: "operasional",
    },
    sidoxim: {
      background: "bg-red-300",
      textColor: "text-dark",
      shortTitle: "SIDOXIM",
      title: "SIDOXIM",
      url: "https://sidoxim.rayakreasi.xyz",
      description: "SIDOXIM adalah Sistem Informasi untuk pengolahan dokumen kepabeanan (CUSTOM) a.k.a Bea Cukai, dan EXIM ",
      tags: ["#sidoxim", "#exim", "#bea-cukai", "#manifest"],
      category: "operasional",
    },
    tech_dzil: {
      background: "bg-pink-300",
      textColor: "text-dark",
      shortTitle: "TECH DZIL",
      title: "TECH DZIL",
      url: "https://dzil.my.id/",
      description: "Blog tentang pemrogaman, share pengalaman dan best practice milik penulis.",
      tags: ["#blog", "#tech", "#dzil"],
      category: "eksternal",
    },
    jp_finance: {
      background: "bg-blue-300",
      textColor: "text-dark",
      shortTitle: "Tsurumaru",
      title: "Tsurumaru Logistics Indonesia",
      url: "https://backend-tsurumaru.rayakreasi.xyz",
      description: "Web app untuk proses bisnis milik Tsurumaru Logistic Indonesia",
      tags: ["#tsurumaru", "#quotation", "#general-cargo"],
      category: "operasional",
    },
    bi_tms: {
      background: "bg-purple-300",
      textColor: "text-dark",
      shortTitle: "BI-TMS",
      title: "BI-TMS",
      url: "http://bi.rayakreasi.xyz",
      description:
          "Business Intelligence System. Web Scrapping, merging, or anything about data processing here. ",
      tags: ["#BI", "#Data", "#TMS"],
      category: "analytics",
    },

  };

  // Filter cards based on search term
  const filteredCards = useMemo(() => {
    return Object.entries(cards).filter(([, card]) => {
      return (
        card.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        card.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    });
  }, [searchTerm]);

  useEffect(() => {
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  }, []);

  useEffect(() => {
    const handleKeydown = (event) => {
      const activeElement = document.activeElement;
      const isEditableTarget =
        activeElement &&
        (activeElement.tagName === "INPUT" ||
          activeElement.tagName === "TEXTAREA" ||
          activeElement.isContentEditable);

      if (event.key === "/" && !isEditableTarget && searchInputRef.current) {
        event.preventDefault();
        searchInputRef.current.focus();
      }
    };

    window.addEventListener("keydown", handleKeydown);

    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <>
      <div className="mb-4 sm:mb-6">
        <input
          ref={searchInputRef}
          type="text"
          placeholder="Cari aplikasi atau sistem..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full rounded-full border border-gray-200 bg-gray-100 px-5 py-3 text-gray-900 placeholder-gray-500 transition-all focus:border-gray-300 focus:bg-white focus:outline-none focus:ring-2 focus:ring-gray-200"
        />
      </div>

      {/* Grid of App Icons */}
      {filteredCards.length > 0 ? (
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3 sm:gap-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
          {filteredCards.map(([key, value]) => (
            <AppIconLink key={key} appKey={key} app={value} />
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
