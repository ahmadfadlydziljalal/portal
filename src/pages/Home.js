import React from "react";
import Card from "../components/Card";

function Home() {
  const cards = {
    tms: {
      background: "bg-yellow-200",
      title: "Website PT. Pelayaran Tresnamuda Sejati",
      url: "https://tresnamuda.co.id",
      description:
        "TMS Lines is have 35 years experiences with track record in shipping shows by the major principals presentation such as Wan Hai Lines, Interasia Lines, New Pacific Papua New Guinea Trades, and many more. ",
      tags: ["#tresnamuda", "#pelayaran", "#TMS"],
    },

    ift: {
      background: "bg-pink-200",
      title: "IFT Warehouse System",
      url: "https://ift.dzil.my.id",
      description:
        "Warehouse, Quotation manajemen sistem untuk PT. Indo Formosa Trading Jakarta.",
      tags: ["#indoformosa", "#Trading", "#IFT"],
    },

    mkt: {
      background: "bg-yellow-100",
      title: "SIMKT",
      url: "https://mkt.rayakreasi.xyz/",
      description:
        "SIMKT adalah singkatan dari Sistem Informasi Marketing, dibuat untuk membantu Proses Bisnis di internal Departemen Sales dan Marketing - TMS GROUP. ",
      tags: ["#marketing", "#sales"],
    },

    hrd: {
      background: "bg-white",
      title: "SIHRD",
      url: "https://hrd.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk pengelolaan Human Resource Development di dalam sebuah perusahaan / unit usaha.",
      tags: ["#humanResource", "#absensi"],
    },

    ism: {
      background: "bg-red-300",
      title: "SIISM",
      url: "https://ism.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk ISM. International Safety Management Code adalah standar Internasional manajemen keselamatan dalam pengoperasian kapal serta upaya pencegahan/pengendalian pencemaran lingkungan.",
      tags: ["#ism", "#ism-code"],
    },

    my_notes: {
      background: "bg-green-300",
      title: "MyNotes",
      url: "https://my-notes.rayakreasi.xyz/",
      description:
        "My Notes adalah sebuah platform Manajemen Project, dimana sebelumnya MyNotes adalah submodule di Sistem Manajemen Request IT",
      tags: ["#Reminder", "#my-notes"],
    },

    sifaktur: {
      background: "bg-purple-100",
      title: "SIFAKTUR",
      url: "https://na-konsultan.com/",
      description:
        "SIFAKTUR adalah Sistem Informasi untuk customer TMS-GROUP untuk pengambilan faktur pajak secara online.",
      tags: ["#pajak", "#faktur", "#ppn"],
    },

    sidocim: {
      background: "bg-yellow-300",
      title: "SIDOCIM",
      url: "https://sidocim.rayakreasi.xyz",
      description: "SIDOCIM adalah Sistem Informasi untuk customer TMS-GROUP untuk Departemen Import. " +
          "Awalnya dibuat untuk pembayaran DO secara online oleh customer.",
      tags: ["#sidocim", "#impor", "#do", "#do-online"],
    },

    tech_dzil: {
      background: "bg-pink-500",
      title: "TECH DZIL",
      url: "https://dzil.my.id/",
      description: "Blog tentang pemrogaman, share pengalaman dan best practice milik penulis.",
      tags: ["#blog", "#tech", "#dzil"],
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
