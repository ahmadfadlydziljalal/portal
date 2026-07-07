import React from "react";
import {
  BadgeCheckIcon,
  BriefcaseIcon,
  ChartBarIcon,
  ClipboardListIcon,
  CogIcon,
  CubeIcon,
  DocumentTextIcon,
  DeviceMobileIcon,
  GlobeAltIcon,
  OfficeBuildingIcon,
  SupportIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";

function getAcronym(title) {
  const words = title
    .replace(/[^a-zA-Z0-9\s]/g, "")
    .split(/\s+/)
    .filter(Boolean);

  const initials = words.map((word) => word[0]).join("").toUpperCase();

  if (initials.length >= 2) {
    return initials.slice(0, 3);
  }

  return title.replace(/[^a-zA-Z0-9]/g, "").toUpperCase().slice(0, 3);
}

function resolveTextColor(textColor) {
  if (textColor === "text-dark") {
    return "text-gray-900";
  }

  return textColor;
}

const iconByAppKey = {
  tms: OfficeBuildingIcon,
  bi_tms: ChartBarIcon,
  ift: CubeIcon,
  mkt: BriefcaseIcon,
  hrd: UserGroupIcon,
  ism: BadgeCheckIcon,
  my_notes: ClipboardListIcon,
  sifaktur: DocumentTextIcon,
  sidocim: CubeIcon,
  sidoxim: CogIcon,
  tech_dzil: GlobeAltIcon,
  jp_finance: OfficeBuildingIcon,
  it_helpdesk: SupportIcon,
  rkd_mobile: DeviceMobileIcon,
};

const iconByCategory = {
  operasional: CogIcon,
  analytics: ChartBarIcon,
  manajemen: UserGroupIcon,
  compliance: BadgeCheckIcon,
  produktivitas: ClipboardListIcon,
  administrasi: DocumentTextIcon,
  support: SupportIcon,
  eksternal: GlobeAltIcon,
};

export default function AppIconLink({ app, appKey }) {
  const iconTextColor = resolveTextColor(app.textColor);
  const Icon = iconByAppKey[appKey] || iconByCategory[app.category] || CubeIcon;

  return (
    <a
      href={app.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col items-center gap-3 rounded-xl p-3 text-center no-underline transition-colors hover:bg-white/70"
    >
      <div
        className={`flex h-16 w-16 items-center justify-center rounded-2xl border border-black/5 shadow-sm transition-transform duration-200 group-hover:scale-105 ${app.background}`}
      >
        {app.icon ? (
          <img
            src={app.icon}
            alt={app.title}
            style={{ mixBlendMode: "multiply" }}
            className={app.iconClassName || "h-9 w-9 object-contain opacity-95"}
          />
        ) : (
          <Icon className={`h-8 w-8 ${iconTextColor}`} />
        )}
      </div>

      <p className="line-clamp-2 text-sm font-semibold leading-tight text-gray-800" title={app.title}>
        {app.shortTitle || getAcronym(app.title)}
      </p>
    </a>
  );
}

