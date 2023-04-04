import React from "react";
import Card from "../components/Card";

function Home() {
  const cards = {
    akun: {
      background: "bg-yellow-100",
      title: "SI MKT",
      url: "https://mkt.rayakreasi.xyz/",
      description:
        "SIMKT adalah singkatan dari Sistem Informasi Marketing, dibuat untuk membantu Proses Bisnis di internal Departemen Sales dan Marketing - TMS GROUP. ",
      tags: ["#marketing", "#sales"],
    },
    hrd: {
      background: "bg-white",
      title: "SI HRD",
      url: "https://hrd.rayakreasi.xyz/",
      description:
        "Sistem Informasi untuk pengelolaan Human Resource Development di dalam sebuah perusahaan / unit usaha.",
      tags: ["#humanResource", "#absensi"],
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