import React from "react";
import Card from "../components/Card";

function Home() {
  const cards = {
    tms: {
      background: "bg-yellow-200",
      textColor: "text-dark",
      title: "Website PT. Pelayaran Tresnamuda Sejati",
      url: "https://tresnamuda.co.id",
      description:
        "TMS Lines is have 35 years experiences with track record in shipping shows by the major principals presentation such as Wan Hai Lines, Interasia Lines, New Pacific Papua New Guinea Trades, and many more. ",
      tags: ["#tresnamuda", "#pelayaran", "#TMS"],
    },


    bi_tms: {
      background: "bg-purple-300",
      textColor: "text-dark",
      title: "BI-TMS",
      url: "http://bi.rayakreasi.xyz",
      description:
          "Business Intelligence System. Web Scrapping, merging, or anything about data processing here. ",
      tags: ["#BI", "#Data", "#TMS"],
    },

    ift: {
      background: "bg-pink-200",
      textColor: "text-dark",
      title: "IFT Warehouse System",
      url: "https://ift.dzil.my.id",
      description:
        "Warehouse, Quotation manajemen sistem untuk PT. Indo Formosa Trading Jakarta.",
      tags: ["#indoformosa", "#Trading", "#IFT"],
    },

    mkt: {
      background: "bg-yellow-100",
      textColor: "text-dark",
      title: "SIMKT",
      url: "https://mkt.rayakreasi.xyz/",
      description:
        "SIMKT adalah singkatan dari Sistem Informasi Marketing, dibuat untuk membantu Proses Bisnis di internal Departemen Sales dan Marketing - TMS GROUP. ",
      tags: ["#marketing", "#sales"],
    },

    hrd: {
      background: "bg-white",
      textColor: "text-dark",
      title: "SIHRD",
      url: "https://hrd.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk pengelolaan Human Resource Development di dalam sebuah perusahaan / unit usaha.",
      tags: ["#humanResource", "#absensi"],
    },

    ism: {
      background: "bg-red-300",
      textColor: "text-dark",
      title: "Certification",
      url: "https://certification.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk management certification milik TMS GROUP, seperti ISM-CODE, ISO-9001, dan lain-lain.",
      tags: ["#ism", "#ism-code", "#iso-9001"],
    },

    my_notes: {
      background: "bg-green-300",
      textColor: "text-dark",
      title: "MyNotes",
      url: "https://my-notes.rayakreasi.xyz/",
      description:
        "My Notes adalah sebuah platform Manajemen Project, dimana sebelumnya MyNotes adalah submodule di Sistem Manajemen Request IT",
      tags: ["#Reminder", "#my-notes"],
    },

    sifaktur: {
      background: "bg-purple-100",
      textColor: "text-dark",
      title: "SIFAKTUR",
      url: "https://na-konsultan.com/",
      description:
        "SIFAKTUR adalah Sistem Informasi untuk customer TMS-GROUP untuk pengambilan faktur pajak secara online.",
      tags: ["#pajak", "#faktur", "#ppn"],
    },

    sidocim: {
      background: "bg-yellow-300",
      textColor: "text-dark",
      title: "SIDOCIM",
      url: "https://sidocim.rayakreasi.xyz",
      description: "SIDOCIM adalah Sistem Informasi untuk customer TMS-GROUP untuk Departemen Import. Fokusnya adalah D.O (Delivery Order) Online ke Customer dan Pelabuhan ",
      tags: ["#sidocim", "#impor", "#do", "#do-online"],
    },

    sidoxim: {
      background: "bg-red-800",
      textColor: "text-white",
      title: "SIDOXIM",
      url: "https://sidoxim.rayakreasi.xyz",
      description: "SIDOXIM adalah Sistem Informasi untuk pengolahan dokumen kepabeanan (CUSTOM) a.k.a Bea Cukai, dan EXIM ",
      tags: ["#sidoxim", "#exim", "#bea-cukai", "#manifest"],
    },

    tech_dzil: {
      background: "bg-pink-500",
      textColor: "text-white",
      title: "TECH DZIL",
      url: "https://dzil.my.id/",
      description: "Blog tentang pemrogaman, share pengalaman dan best practice milik penulis.",
      tags: ["#blog", "#tech", "#dzil"],
    },

    jp_finance: {
      background: "bg-blue-500",
      textColor: "text-white",
      title: "Tsurumaru Logistics Indonesia",
      url: "https://backend-tsurumaru.rayakreasi.xyz",
      description: "Web app untuk proses bisnis milik Tsurumaru Logistic Indonesia",
      tags: ["#tsurumaru", "#quotation", "#general-cargo"],
    },

    it_helpdesk: {
      background: "bg-purple-200",
      textColor: "text-white",
      title: "IT Helpdesk TMS GROUP",
      url: "https://it.rayakreasi.xyz",
      description: "Web app untuk proses bisnis IT Helpdesk TMS GROUP",
      tags: ["#it", "#helpdesk", "#tms"],
    },
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-3 gap-5 px-3 md:px-0 lg:px-0">
      {Object.entries(cards).map(([key, value]) => {
        return <Card key={key} props={value} />;
      })}
    </div>
  );
}

export default Home;
